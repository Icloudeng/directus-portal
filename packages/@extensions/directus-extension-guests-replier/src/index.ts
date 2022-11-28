import { defineHook } from "@directus/extensions-sdk";
import { CMS_MODELS } from "@apps/contracts";

const CREATE_EVENT = `${CMS_MODELS.guest_replies}.items.create` as const;
const UPDATE_EVENT = `${CMS_MODELS.guest_replies}.items.update` as const;

export default defineHook(({ filter }) => {
  filter(CREATE_EVENT, () => {
    console.log("Creating Item!  ds");
  });

  filter(UPDATE_EVENT, () => {
    console.log("Creating Item!  ds");
  });
});
