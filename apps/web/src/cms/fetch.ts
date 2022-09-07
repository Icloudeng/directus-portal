import { IMAGE_PRESETS } from '@/constant/cms';
import { PartialItem, Sort } from '@directus/sdk';
import { directus_client } from './directus';

function hasFile(
  access_token: string,
  data: PartialItem<any>,
  imageKey = 'image',
  preset?: string
): PartialItem<any> {
  const url = `/assets/${data[imageKey]}?access_token=${access_token}${
    preset ? `&key=${preset}` : ''
  }`;

  data[imageKey] = url;

  return data;
}

function hasFiles(
  access_token: string,
  datas: PartialItem<any>[],
  preset = IMAGE_PRESETS.sliders
): PartialItem<any>[] {
  return datas.map((data) => hasFile(access_token, data, 'image', preset));
}

async function getDatas(model: string, limit?: number, sort?: Sort<unknown>) {
  const directus = await directus_client.instance;

  return directus.items(model).readByQuery({ limit, sort: sort });
}

export const directus_fetch = {
  getDatas,
  hasFiles,
  hasFile,
};
