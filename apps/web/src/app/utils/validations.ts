import { PartnerRequest } from '@/cms/items/types';

export const validateParterRequestForm = (data: PartnerRequest) => {
  const errors = {};

  const keys: (keyof PartnerRequest)[] = [
    'company',
    'country',
    'description',
    'email',
    'first_name',
    'job_title',
    'last_name',
    'linkedin',
    'phone_number',
    'website',
  ];

  keys.forEach((key) => {});
};
