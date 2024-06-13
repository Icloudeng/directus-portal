import { PartnerRequest } from '@apps/contracts';
import { NextApiRequest, NextApiResponse } from 'next';

import { validateForm } from '@/app/utils/validations';
import { storePartnerRequest } from '@/cms/items';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({});
  }
  const body = req.body as PartnerRequest;

  const { errors, isValid } = validateForm<PartnerRequest>(
    [
      'company',
      'country',
      'description',
      'email',
      'first_name',
      'job_title',
      'last_name',
      'phone_number',
      'website',
    ],
    body
  );

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const data = await storePartnerRequest(body);

  res.status(200).json(data);
}
