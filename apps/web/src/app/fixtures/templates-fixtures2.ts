import { ST_FormInput } from '@apps/contracts';

export const DumpFormInput: ST_FormInput[] = [
  {
    id: '4',
    collection: 'ST_FormInput',
    item: {
      name: 'name',
      group: 'subscribe',
      type: 'text',
      required: true,
      full_width: false,
      options: undefined,
      regex: undefined,
      id: 'bd4d3e09-f1f3-4b67-874e-391869cd387c',
      status: 'published',
      date_created: '2024-06-12T11:53:54.293Z',
      date_updated: undefined,
      translations: [],
    },
  },
  {
    id: '5',
    collection: 'ST_FormInput',
    item: {
      name: 'email',
      group: 'subscribe',
      type: 'email',
      default_value: undefined,
      required: true,
      full_width: false,
      options: undefined,
      regex: undefined,
      id: 'f143966b-6845-4922-8dea-cbd30b4b01df',
      status: 'published',
      date_created: '2024-06-12T11:53:54.313Z',
      date_updated: '2024-06-12T11:56:28.063Z',
      translations: [],
    },
  },
  {
    id: '6',
    collection: 'ST_FormInput',
    item: {
      name: 'description',
      group: 'subscribe',
      type: 'textarea',
      default_value: undefined,
      required: true,
      full_width: true,
      options: undefined,
      regex: undefined,
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          label: 'Description',
          placeholder: 'Entrez votre description',
        },
      ],
      id: 'c277320d-a3d9-46b6-af63-073701d3a306',
      status: 'published',
      date_created: '2024-06-12T12:05:21.687Z',
      date_updated: '2024-06-12T12:07:51.671Z',
    },
  },
  {
    id: '7',
    collection: 'ST_FormInput',
    item: {
      name: 'submit',
      group: 'subscribe',
      type: 'submit',
      default_value: undefined,
      required: true,
      full_width: false,
      options: undefined,
      regex: undefined,
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          label: 'Submit form',
        },
      ],
      id: 'cd675f9b-3f0e-41f4-bf8c-17ce2e0f1e87',
      status: 'published',
      date_created: '2024-06-12T12:09:16.692Z',
    },
  },
];
