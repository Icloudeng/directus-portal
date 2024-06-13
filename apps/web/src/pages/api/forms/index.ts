import { MDFormOptionsWebhook } from '@apps/contracts';
import ky from 'ky';
import { NextApiRequest, NextApiResponse } from 'next';

import { EMAIL_REGEX, PHONE_REGEX, URL_REGEX } from '@/app/utils/regex';
import { getFormOptions, storeForm } from '@/cms/items/forms';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({});
  }

  const body = req.body as Record<string, string>;

  if (!body['_group']) {
    return res.status(400).json({
      error: 'Missing required field: _group',
    });
  }

  const _group = body['_group'];

  const errors = {} as Record<string, string>;

  Object.keys(body).forEach((key) => {
    if (!key.startsWith('metadata.')) {
      return;
    }

    const field = key.replace('metadata.', '');
    const value = body[field].trim();

    try {
      const metadata = JSON.parse(body[key]);

      if (metadata.regex) {
        const regex = new RegExp(metadata.regex);
        if (!regex.test(value)) {
          errors[field] = 'Please provide a valid value';
        }
      } else {
        switch (metadata.type) {
          case 'email':
            if (value && !EMAIL_REGEX.test(value)) {
              errors[field] = 'Please provide a valid email address';
            }
            break;
          case 'tel':
            if (value && !PHONE_REGEX.test(value)) {
              errors[field] = 'Please provide a valid phone number';
            }
            break;
          case 'url':
            if (value && !URL_REGEX.test(value)) {
              errors[field] = 'Please provide a valid URL';
            }
            break;
        }
      }

      if (metadata.required && !value) {
        errors[field] = 'Please make sure to fill out this field';
      }
    } catch (error) {
      console.error(error);
    }
  });

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  const trimmedBody = Object.keys(body).reduce((acc, key) => {
    if (key.startsWith('metadata.') || key.startsWith('_')) {
      return acc;
    }

    acc[key] = body[key].trim();
    return acc;
  }, {} as Record<string, string>);

  // store form
  storeForm({
    group: _group,
    data: trimmedBody,
  });

  // Push web hook
  getFormOptions().then((formOptions) => {
    (formOptions?.web_hooks || []).forEach((webhook) => {
      if (webhook.url === req.url) return;

      handleWebhooks(webhook, body, _group);
    });
  });

  res.json({ success: true });
}

function handleWebhooks(
  webHook: MDFormOptionsWebhook,
  body: any,
  _group: string
) {
  if (webHook.group && _group !== webHook.group) {
    return;
  }

  ky.post(webHook.url, {
    json: {
      group: _group,
      form: body,
    },
  });
}
