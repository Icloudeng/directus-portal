import { NextApiRequest, NextApiResponse } from 'next';
import listmonk from '@listmonk';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({});
  }

  res.status(200).json({});
}
