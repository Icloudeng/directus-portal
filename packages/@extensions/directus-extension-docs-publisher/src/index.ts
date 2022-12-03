import { defineHook } from "@directus/extensions-sdk";
import { connect, DataType } from "@apps/docs-pubsub";
import { CMS_MODELS } from "@apps/contracts";

const client = connect();

const emitter = (type: DataType) => {
  return async function (input: Record<string, any>) {
    const publisher = await client;
    publisher.publish(type, input);
  };
};

export default defineHook(({ action }) => {
  action(`${CMS_MODELS.dc_footer}.items.create`, emitter("footer"));
  action(`${CMS_MODELS.dc_footer}.items.update`, emitter("footer"));

  action(`${CMS_MODELS.dc_namespaces}.items.create`, emitter("namespaces"));
  action(`${CMS_MODELS.dc_namespaces}.items.update`, emitter("namespaces"));

  action(`${CMS_MODELS.dc_pages}.items.create`, emitter("pages"));
  action(`${CMS_MODELS.dc_pages}.items.update`, emitter("pages"));

  action(`${CMS_MODELS.company_details}.items.create`, emitter("meta"));
  action(`${CMS_MODELS.company_details}.items.update`, emitter("meta"));

  action(`${CMS_MODELS.languages}.items.create`, emitter("languages"));
  action(`${CMS_MODELS.languages}.items.update`, emitter("languages"));
});
