import { GuestQuestion } from '@packages/contracts';
import { NextApiRequest, NextApiResponse } from 'next';

import { validateForm } from '@/app/utils/validations';
import { storeGuestQuestion } from '@/cms/items';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({});
  }
  const body = req.body as GuestQuestion;

  const { errors, isValid } = validateForm<GuestQuestion>(
    ['email', 'name', 'message'],
    body
  );

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const data = await storeGuestQuestion(body);

  res.status(200).json(data);
}
