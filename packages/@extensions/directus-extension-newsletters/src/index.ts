import { defineHook } from "@directus/extensions-sdk";
import { CMS_MODELS, MDNews } from "@apps/contracts";

type Register = Parameters<Parameters<typeof defineHook>["0"]>["0"];
type Knex = Parameters<Parameters<Register["action"]>["1"]>["1"]["database"];

async function getItem(id: string, database: Knex) {
  const item = await database
    .from(CMS_MODELS.news)
    .select("*")
    .where({ id })
    .first()
    .catch(console.error);
  if (!item) return;

  const translations = await database
    .from(CMS_MODELS.news_translations)
    .select("*")
    .where({
      [CMS_MODELS.news + "_id"]: id,
    });
  item.translations = translations;
  return item as MDNews;
}

export default defineHook(({ action }, { env }) => {
  action(`${CMS_MODELS.news}.items.create`, (_) => {
    console.log("Item created! fdsf sdf");
  });

  action(`${CMS_MODELS.news}.items.update`, async (input, context) => {
    const id = input["keys"][0];
    if (!id) return;

    const item = await getItem(id, context.database);
    if (!item) return;
  });
});
