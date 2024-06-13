import { NextApiRequest, NextApiResponse } from 'next';

import { searchGqlPlatforms } from '@/cms/items';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = (req.query.q as string).trim();

  res.status(200);

  if (!query) {
    return res.json([]);
  }

  const platform = await searchGqlPlatforms(query).catch(console.error);

  if (!platform) {
    return res.json([]);
  }

  res.json(platform.data?.platforms || []);
}
