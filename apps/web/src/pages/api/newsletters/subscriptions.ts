import { NextApiRequest, NextApiResponse } from 'next';
import { validateForm } from '@/app/utils/validations';
import ListmonkClient from '@apps/listmonk-client';
import { storeNewslettersSubscription } from '@/cms/items';

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
    const client = new ListmonkClient();
    const subscriber = await client.subscribe(body.email);

    if (subscriber) {
      await storeNewslettersSubscription({
        email: subscriber.email,
        publisher: 'Listmonk',
      });
    }

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
