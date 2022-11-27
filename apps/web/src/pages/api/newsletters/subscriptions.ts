import { NextApiRequest, NextApiResponse } from 'next';
import { validateForm } from '@/app/utils/validations';
import { ListmonkClient } from '@apps/listmonk-client';
import { getListmonkConfig, storeNewslettersSubscription } from '@/cms/items';

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

  const config = await getListmonkConfig();

  if (!config || config.status !== 'published') {
    return res.status(200).json({});
  }

  const client = new ListmonkClient({
    baseUrl: config.base_url,
    adminUsername: config.admin_username,
    adminPassword: config.admin_password,
    listId: config.list_id,
    templateId: config.template_id,
  });

  if (!client.hasValidConfig()) {
    return res.status(200).json({});
  }

  try {
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
