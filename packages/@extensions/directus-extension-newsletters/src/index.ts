import { defineHook } from "@directus/extensions-sdk";
import {
  CMS_MODELS,
  MDNews,
  MDListmonk,
  MDAuthor,
  MDCompanyDetail,
} from "@apps/contracts";
import { ListmonkClient } from "@apps/listmonk-client";

type Register = Parameters<Parameters<typeof defineHook>["0"]>["0"];
type Action = Parameters<Register["action"]>;
type ActionHandler = Action["1"];
type Knex = Parameters<ActionHandler>["1"]["database"];

const CREATE_EVENT = `${CMS_MODELS.news}.items.create` as const;
const UPDATE_EVENT = `${CMS_MODELS.news}.items.update` as const;

// Database getters ------------
async function getListmonkConfig(database: Knex) {
  return await database
    .from<MDListmonk>(CMS_MODELS.listmonk)
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
  const id = input["event"] === UPDATE_EVENT ? input["keys"][0] : input["key"];

  if (input["collection"] && input["collection"] !== CMS_MODELS.news) return;

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
  const company_details = await getComponyDetails(context.database);
  if (!listmonk || listmonk.status !== "published" || !company_details) return;

  const listmonkClient = new ListmonkClient({
    baseUrl: listmonk.base_url,
    adminPassword: listmonk.admin_password,
    adminUsername: listmonk.admin_username,
    listId: listmonk.list_id,
    templateId: listmonk.template_id,
  });

  if (!listmonkClient.hasValidConfig()) return;

  let website = company_details.website || "";
  website = website.slice(-1) === "/" ? website : website + "/";

  try {
    const campaign = await listmonkClient.createCampaign({
      name: news.label,
      subject: translation.title,
      ...(news.author
        ? { from_email: `${news.author?.name} <${news.author?.email}>` }
        : {}),
      lists: [+listmonk.list_id],
      template_id: +listmonk.template_id,
      tags: news.tags || [],
      type: "regular",
      content_type: "markdown",
      messenger: "email",
      body: `
      Hi there, this news may interest you.

      ## ${translation.title}\n\n
      ${translation.summary}\n\n
      ${
        news.status === "mailer"
          ? translation.markdown_content + "\n"
          : `Interested ? You can read more [here](${
              website + "news/" + news.slug
            })`
      }
      `.replace(/\n\s+/g, "\n"),
      send_at: new Date(new Date().getTime() + 2 * 60000).toISOString(),
    });

    if (campaign) {
      console.log("-------------- Listmonk compain created ------------------");

      await listmonkClient.campaignStatus(campaign.id, "scheduled");
      await initiateTransfer(id, context.database);
    }
  } catch (error) {
    console.log(error);
  }
};

export default defineHook(({ action }) => {
  action(CREATE_EVENT, actionHandler);
  action(UPDATE_EVENT, actionHandler);
});
