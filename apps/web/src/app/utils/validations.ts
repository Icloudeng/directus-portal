import { EMAIL_REGEX, PHONE_REGEX, URL_REGEX } from './regex';

type Ks = { [x: string]: string };

export function validateForm<T extends Ks>(keys: (keyof T)[], data: T) {
  const errors = {} as { [k in keyof T]: string | undefined };

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
