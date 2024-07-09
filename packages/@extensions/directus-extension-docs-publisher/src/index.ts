import { defineHook } from "@directus/extensions-sdk";
import { connect, DataType } from "@packages/docs-pubsub";
import { CMS_MODELS } from "@packages/contracts";

const client = connect();

const emitter = (type: DataType) => {
  return async function (input: any) {
    const publisher = await client;
    publisher.publish(type, input);
  };
};

export default defineHook(({ action }) => {
  emitter("server")({});

  action(`${CMS_MODELS.dc_footer}.items.create`, emitter("footer"));
  action(`${CMS_MODELS.dc_footer}.items.update`, emitter("footer"));
  action(`${CMS_MODELS.dc_footer}.items.delete`, emitter("footer"));

  action(`${CMS_MODELS.dc_namespaces}.items.create`, emitter("namespaces"));
  action(`${CMS_MODELS.dc_namespaces}.items.update`, emitter("namespaces"));
  action(`${CMS_MODELS.dc_namespaces}.items.delete`, emitter("namespaces"));
  action(`${CMS_MODELS.dc_namespaces}.items.sort`, emitter("namespaces"));

  action(`${CMS_MODELS.dc_pages}.items.create`, emitter("pages"));
  action(`${CMS_MODELS.dc_pages}.items.update`, emitter("pages"));
  action(`${CMS_MODELS.dc_pages}.items.delete`, emitter("pages"));
  action(`${CMS_MODELS.dc_pages}.items.sort`, emitter("pages"));

  action(`${CMS_MODELS.company_details}.items.create`, emitter("meta"));
  action(`${CMS_MODELS.company_details}.items.update`, emitter("meta"));
  action(`${CMS_MODELS.company_details}.items.delete`, emitter("meta"));

  action(`${CMS_MODELS.languages}.items.create`, emitter("languages"));
  action(`${CMS_MODELS.languages}.items.update`, emitter("languages"));
  action(`${CMS_MODELS.languages}.items.delete`, emitter("languages"));
});
