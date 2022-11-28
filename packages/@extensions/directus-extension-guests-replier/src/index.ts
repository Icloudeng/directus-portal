import { defineHook } from "@directus/extensions-sdk";

export default defineHook(({ filter }) => {
  filter("items.create", () => {
    console.log("Creating Item!  ds");
  });
});
