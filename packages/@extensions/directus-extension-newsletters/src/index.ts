import { defineHook } from "@directus/extensions-sdk";
import { CMS_MODELS } from "@apps/contracts";

export default defineHook(({ action }) => {
  action(`${CMS_MODELS.news}.items.create`, (input) => {
    console.log("Item created! fdsf sdf");

    return input;
  });

  action(`${CMS_MODELS.news}.items.update`, (input) => {
    console.log("Item update!", input);

    return input;
  });
});
