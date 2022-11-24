import { NextApiRequest, NextApiResponse } from 'next';
import { validateForm } from '@/app/utils/validations';
import ListmonkClient from 'listmonk-client';

const BASE_URL = process.env.LISTMONK_BASE_URL || '';
const ADMIN_USERNAME = process.env.LISTMONK_ADMIN_USERNAME || '';
const ADMIN_PASSWORD = process.env.LISTMONK_ADMIN_PASSWORD || '';
const LIST_ID = process.env.LISTMONK_LIST_ID || '';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({});
  }
  const body = req.body as { email: string };
  const { errors, isValid } = validateForm<{ email: string }>(['email'], body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const client = new ListmonkClient(
      BASE_URL,
      ADMIN_USERNAME,
      ADMIN_PASSWORD,
      LIST_ID
    );

    const subscriber = await client.subscribe(body.email);

    return res.status(200).json({
      subscriber,
      success: true,
    });
  } catch (error: any) {
    console.log(error?.message || '');
  }

  res.status(200).json({
    subscriber: null,
    success: false,
  });
}
