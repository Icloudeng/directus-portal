import { NextApiRequest, NextApiResponse } from 'next';

import { getGqlListNewsQuery } from '@/cms/items';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = ((req.query.q as string) || '').trim();
  const offset = +((req.query.offset as string) || '');
  const limit = +((req.query.limit as string) || '');

  const $res = await getGqlListNewsQuery(query, offset, limit);

  res.status(200).json($res.data?.news || []);
}
