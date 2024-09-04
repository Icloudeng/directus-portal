import { defineHook } from "@directus/extensions-sdk";
import { CMS_MODELS } from "@packages/contracts";

export interface Permission {
  id: number;
  fields: string[];
  presets: any;
  validation: Validation;
  permissions: Permissions;
  action: string;
  collection: string;
  role: any;
}

export interface Validation {}

export interface Permissions {}

export default defineHook(async (_, { services, getSchema }) => {
  const { ItemsService } = services;

  const itemsService = new ItemsService(
    CMS_MODELS.directus.directus_permissions,
    {
      schema: await getSchema(),
    }
  );

  try {
    const permissions: Permission[] = await itemsService.readByQuery({
      fields: ["*"],
    });

    const publicReadFilePermission = permissions.find((permission) => {
      return (
        permission.collection === CMS_MODELS.directus.directus_files &&
        permission.action === "read" &&
        permission.fields?.at(0) === "*"
      );
    });

    if (!publicReadFilePermission) {
      await itemsService.createOne({
        role: null,
        collection: "directus_files",
        action: "read",
        fields: "*",
        permissions: {},
        validation: {},
      });

      console.log(
        `@extensions/directus-extension-public-assets: directus_files public read permission created`
      );
    }
  } catch (error) {
    console.error(
      "Directus Plugin Error @extensions/directus-extension-public-assets: ",
      error
    );
  }
});
