import { PartnerRequest } from '@/cms/items/types';
import { EMAIL_REGEX, PHONE_REGEX, URL_REGEX } from './regex';

export function validateParterRequestForm(data: PartnerRequest) {
  const errors = {} as { [x: string]: string };

  const keys: (keyof PartnerRequest)[] = [
    'company',
    'country',
    'description',
    'email',
    'first_name',
    'job_title',
    'last_name',
    'phone_number',
    'website',
  ];

  keys.forEach((key) => {
    const value = data[key];
    switch (key) {
      case 'email':
        if (value && !EMAIL_REGEX.test(value)) {
          errors[key] = 'Please provide a valid email address';
        }
        break;
      case 'phone_number':
        if (value && !PHONE_REGEX.test(value)) {
          errors[key] = 'Please provide a valid phone number';
        }
        break;
      case 'website':
        if (value && !URL_REGEX.test(value)) {
          errors[key] = 'Please provide a valid URL';
        }
        break;
    }

    if (!value || value.trim().length < 2) {
      errors[key] = 'Please make sure to fill out this field';
    }
  });

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
