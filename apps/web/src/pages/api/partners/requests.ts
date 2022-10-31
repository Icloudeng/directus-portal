import { validateParterRequestForm } from '@/app/utils/validations';
import { storePartnerRequest } from '@/cms/items';
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
  const { errors, isValid } = validateParterRequestForm(body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const datas = await storePartnerRequest(body);

  res.status(200).json(datas);
}
