import { defineHook } from "@directus/extensions-sdk";
import {
  CMS_MODELS,
  MDGuestReplie,
  MDGuestQuestion,
  MDAuthor,
} from "@packages/contracts";

const CREATE_EVENT = `${CMS_MODELS.guest_replies}.items.create` as const;
const UPDATE_EVENT = `${CMS_MODELS.guest_replies}.items.update` as const;

function sendMail(
  {
    question,
    reply_message,
    replier,
  }: {
    question: MDGuestQuestion;
    replier?: MDAuthor | null;
    reply_message: string;
  },
  mailService: any
) {
  console.log(CMS_MODELS.guest_replies, "reply --------------");
  return mailService.send({
    to: question.email,
    ...(replier ? { from: `"${replier.name}" <${replier.email}>` } : {}),
    subject: "Reply: " + question.message.slice(0, 50) + "...",
    template: {
      name: "guest-reply",
      data: {
        content: reply_message,
        question,
        replier: replier || {},
      },
    },
  });
}

async function getFieldObject({
  ItemsService,
  schema,
  accountability,
  questionId,
  replierId,
}: {
  ItemsService: any;
  schema: any;
  accountability: any;
  questionId: string;
  replierId?: string;
}) {
  const guestQuestionsService = new ItemsService(CMS_MODELS.guest_questions, {
    schema: schema,
    accountability: accountability,
  });

  const authorService = new ItemsService(CMS_MODELS.authors, {
    schema: schema,
    accountability: accountability,
  });

  let replier: MDAuthor | null = null;

  const question: MDGuestQuestion = await guestQuestionsService.readOne(
    questionId
  );

  if (replierId) {
    replier = await authorService.readOne(replierId);
  }

  return {
    replier,
    question,
  };
}

async function getReplyObject({
  ItemsService,
  schema,
  accountability,
  id,
}: {
  ItemsService: any;
  schema: any;
  accountability: any;
  id: string;
}) {
  const replyService = new ItemsService(CMS_MODELS.guest_replies, {
    schema: schema,
    accountability: accountability,
  });

  return (await replyService.readOne(id)) as MDGuestReplie;
}

export default defineHook(({ filter }, { services, exceptions }) => {
  const { MailService, ItemsService } = services;
  const { ServiceUnavailableException } = exceptions;

  filter(
    CREATE_EVENT,
    async (input: any, meta, { schema, database, accountability }) => {
      if (
        meta.collection !== CMS_MODELS.guest_replies ||
        input.status !== "published"
      )
        return input;

      const mailService = new MailService({ schema, knex: database });

      try {
        const { replier, question } = await getFieldObject({
          ItemsService,
          schema,
          accountability,
          questionId: input.question,
          replierId: input.replier,
        });
        await sendMail(
          {
            reply_message: input.message,
            replier,
            question,
          },
          mailService
        );
      } catch (error) {
        throw new ServiceUnavailableException(error);
      }

      input.transfer_initiated = true;
      input.state = "sent";

      return input;
    }
  );

  filter(
    UPDATE_EVENT,
    async (input: any, meta, { schema, database, accountability }) => {
      const id = meta.keys[0];
      if (meta.collection !== CMS_MODELS.guest_replies) return input;

      const mailService = new MailService({ schema, knex: database });
      try {
        const reply = await getReplyObject({
          ItemsService,
          schema,
          accountability,
          id,
        });

        if (reply.transfer_initiated) return;
        const status = input.status ? input.status : reply.status;

        if (!reply || status !== "published") return;

        const { replier, question } = await getFieldObject({
          ItemsService,
          schema,
          accountability,
          questionId: reply.question as any,
          replierId: reply.replier as any,
        });
        await sendMail(
          {
            reply_message: input.message || reply.message,
            replier,
            question,
          },
          mailService
        );
      } catch (error) {
        throw new ServiceUnavailableException(error);
      }

      input.transfer_initiated = true;
      input.state = "sent";

      return input;
    }
  );
});
