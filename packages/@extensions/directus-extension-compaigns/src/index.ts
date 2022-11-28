import { defineHook } from "@directus/extensions-sdk";
import { CMS_MODELS, MDAuthor, MDCampaign, MDListmonk } from "@apps/contracts";
import { ListmonkClient } from "@apps/listmonk-client";

type Register = Parameters<Parameters<typeof defineHook>["0"]>["0"];
type Action = Parameters<Register["action"]>;
type ActionHandler = Action["1"];
type Knex = Parameters<ActionHandler>["1"]["database"];

type Param1 = {
  database: any;
  ItemsService: any;
  schema: any;
  accountability: any;
};

type Param2 = {
  authorId?: string;
  list_id?: string;
  template_id?: string;
  title: string;
  message: string;
  action: "Created" | "Updated";
};

const CREATE_EVENT = `${CMS_MODELS.campaigns}.items.create` as const;
const UPDATE_EVENT = `${CMS_MODELS.campaigns}.items.update` as const;

// Database getters ------------
async function getListmonkConfig(database: Knex) {
  return await database
    .from<MDListmonk>(CMS_MODELS.listmonk)
    .select("*")
    .first();
}

async function getAuthorObject({
  ItemsService,
  schema,
  accountability,
  authorId,
}: {
  ItemsService: any;
  schema: any;
  accountability: any;
  authorId?: string;
}) {
  const authorService = new ItemsService(CMS_MODELS.authors, {
    schema: schema,
    accountability: accountability,
  });

  let author: MDAuthor | null = null;

  if (authorId) {
    author = await authorService.readOne(authorId);
  }

  return author;
}

async function getCampaignItem(id: string, database: Knex) {
  return await database
    .from<MDCampaign>(CMS_MODELS.campaigns)
    .select("*")
    .where({ id })
    .first();
}

async function createCampaign(
  { database, ItemsService, schema, accountability }: Param1,
  { authorId, list_id, template_id, title, message, action }: Param2
) {
  const listmonk = await getListmonkConfig(database);
  if (!listmonk) {
    throw new Error("The Listmonk must be configured");
  }

  const author = await getAuthorObject({
    ItemsService,
    schema,
    accountability,
    authorId,
  });

  const listmonkClient = new ListmonkClient({
    baseUrl: listmonk.base_url,
    adminPassword: listmonk.admin_password,
    adminUsername: listmonk.admin_username,
    listId: list_id || listmonk.list_id,
    templateId: template_id || listmonk.template_id,
  });

  const campaign = await listmonkClient.createCampaign({
    name: title,
    subject: title,
    ...(author ? { from_email: `${author?.name} <${author?.email}>` } : {}),
    lists: [+listmonkClient.listId],
    template_id: +listmonkClient.templateId,
    tags: [],
    type: "regular",
    content_type: "html",
    messenger: "email",
    body: message,
    send_at: new Date(new Date().getTime() + 2 * 60000).toISOString(),
  });

  if (campaign) {
    console.log(
      `-------------- (Compains) Listmonk compain ${action} ------------------`
    );
    await listmonkClient.campaignStatus(campaign.id, "scheduled");
  }

  return campaign;
}

async function initiateTransfer(id: string, database: Knex) {
  return database.from(CMS_MODELS.campaigns).where({ id }).update({
    transfer_initiated: true,
  });
}

export default defineHook(({ filter, action }, { services, exceptions }) => {
  const { ItemsService } = services;
  const { ServiceUnavailableException } = exceptions;

  filter(
    CREATE_EVENT,
    async (input: any, meta, { database, schema, accountability }) => {
      if (
        meta.collection !== CMS_MODELS.campaigns ||
        input.status !== "published"
      )
        return input;

      try {
        await createCampaign(
          {
            database,
            schema,
            accountability,
            ItemsService,
          },
          {
            authorId: input.author,
            action: "Created",
            list_id: input.list_id,
            template_id: input.template_id,
            title: input.title,
            message: input.message,
          }
        );
      } catch (error) {
        throw new ServiceUnavailableException(error);
      }

      input.transfer_initiated = true;

      return input;
    }
  );

  action(UPDATE_EVENT, async (meta, { database, schema, accountability }) => {
    const id = meta.keys[0];
    if (meta.collection !== CMS_MODELS.campaigns) return;

    try {
      const compainItem = await getCampaignItem(id, database);

      if (
        !compainItem ||
        compainItem.transfer_initiated ||
        compainItem.status !== "published"
      )
        return;

      const compain = await createCampaign(
        {
          database,
          schema,
          accountability,
          ItemsService,
        },
        {
          authorId: compainItem.author as any,
          action: "Updated",
          list_id: compainItem.list_id as any,
          template_id: compainItem.template_id as any,
          title: compainItem.title as any,
          message: compainItem.message as any,
        }
      );

      if (compain) {
        await initiateTransfer(id, database);
      }
    } catch (error) {
      console.log(error);
    }
  });
});
