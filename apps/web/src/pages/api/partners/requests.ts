import { PartnerRequest } from '@/cms/items/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({});
  }

  const body = req.body as PartnerRequest;
}
