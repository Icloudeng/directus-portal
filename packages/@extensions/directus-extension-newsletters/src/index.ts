import { defineHook } from "@directus/extensions-sdk";
import {
  CMS_MODELS,
  MDNews,
  MDListmonk,
  MDNewsletter,
  MDAuthor,
  MDCompanyDetail,
} from "@apps/contracts";
import { ListmonkClient } from "@apps/listmonk-client";

type Register = Parameters<Parameters<typeof defineHook>["0"]>["0"];
type Action = Parameters<Register["action"]>;
type ActionHandler = Action["1"];
type Knex = Parameters<ActionHandler>["1"]["database"];

// Database getters ------------
async function getListmonkConfig(database: Knex) {
  return await database
    .from<MDListmonk>(CMS_MODELS.listmonk)
    .select("*")
    .first();
}

async function getNewsletterConfig(database: Knex) {
  return await database
    .from<MDNewsletter>(CMS_MODELS.newsletter)
    .select("*")
    .first();
}

async function getNewsItem(id: string, database: Knex) {
  const item = await database
    .from<MDNews>(CMS_MODELS.news)
    .select("*")
    .where({ id })
    .first();
  if (!item) return;

  // get item translations
  const translations = await database
    .from(CMS_MODELS.news_translations)
    .select("*")
    .where({
      [CMS_MODELS.news + "_id"]: id,
    });
  item.translations = translations;

  // get item author
  if (item.author) {
    item.author = await database
      .from<MDAuthor>(CMS_MODELS.authors)
      .select("*")
      .where({ id: item.author as any })
      .first();
  }

  return item;
}

async function getComponyDetails(database: Knex) {
  return await database
    .from<MDCompanyDetail>(CMS_MODELS.company_details)
    .select("*")
    .first();
}

// Update news item by transfer_initiated to true
async function initiateTransfer(id: string, database: Knex) {
  return database.from(CMS_MODELS.news).where({ id }).update({
    transfer_initiated: true,
  });
}

// ------------------ Hook handler --------------------------
const actionHandler: ActionHandler = async (input, context) => {
  const id = input["keys"][0];

  const news = await getNewsItem(id, context.database);
  if (!news || news.transfer_initiated) return;

  let translation = news.translations.find((t) => {
    const code = t.languages_code as any;
    return code.startsWith("en");
  });

  translation = translation ? translation : news.translations[0];

  if (
    !(
      (news.status === "published" && news.published_mailer) ||
      news.status === "mailer"
    ) ||
    !translation
  )
    return;

  const listmonk = await getListmonkConfig(context.database);
  const newsletter = await getNewsletterConfig(context.database);
  const company_details = await getComponyDetails(context.database);
  if (!listmonk || !newsletter || !company_details) return;

  const listmonkClient = new ListmonkClient({
    baseUrl: listmonk.base_url,
    adminPassword: listmonk.admin_password,
    adminUsername: listmonk.admin_username,
    listId: listmonk.list_id,
    templateId: listmonk.template_id,
  });

  if (!listmonkClient.hasValidConfig()) return;

  let website = company_details.website || "";
  website = website.at(-1) === "/" ? website : website + "/";

  try {
    const campaign = await listmonkClient.createCampaign({
      name: news.label,
      subject: translation.title,
      from_email: `${news.author?.name || newsletter.from_name} <${
        news.author?.email || newsletter.from_email
      }>`,
      lists: [+listmonk.list_id],
      template_id: +listmonk.template_id,
      tags: news.tags || [],
      type: "optin",
      content_type: "markdown",
      messenger: "email",
      body: `
      Hi there, this news may interest you.

      ## ${translation.title}\n\n
      ${translation.summary}
      
      Interested ? You can read more [here](${website + "news/" + news.slug})
      `.replace(/\n\s+/g, "\n"),
    });

    console.log("News Campaign has been created");

    if (campaign) {
      await initiateTransfer(id, context.database);
    }
  } catch (error) {
    console.log(error);
  }
};

export default defineHook(({ action }) => {
  action(`${CMS_MODELS.news}.items.create`, actionHandler);
  action(`${CMS_MODELS.news}.items.update`, actionHandler);
});
