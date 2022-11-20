import { getGqlListNewsQuery } from '@/cms/items';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = (req.query.q as string).trim();
  res.status(200);

  if (!query) {
    return res.json([]);
  }
}
