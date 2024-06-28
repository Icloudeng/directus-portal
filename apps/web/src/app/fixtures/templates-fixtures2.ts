import { ST_FeatureCard, ST_FormInput } from '@apps/contracts';

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

export const DumpFeatureCard: ST_FeatureCard[] = [
  {
    id: '23',
    collection: 'ST_FeatureCards',
    item: {
      icon_svg:
        '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                              <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="#4F46E5" stroke-width="2"></path>\n                              </svg>',
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Easy Payment',
          description:
            'We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances',
        },
      ],
      id: '3bb13a5c-db54-4036-8b07-bba598853960',
      status: 'published',
      date_created: '2024-06-28T14:03:11.887Z',
    },
  },
  {
    id: '24',
    collection: 'ST_FeatureCards',
    item: {
      icon_svg:
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M20.935 12.646a1.617 1.617 0 0 0-2.022-1.034l-1.632.532c-.355-1.099-.735-2.268-1.092-3.365l.006-.002-.004-.008 1.613-.523a1.62 1.62 0 0 0 1.035-2.023 1.62 1.62 0 0 0-2.025-1.034l-1.621.527-.519-1.604a1.619 1.619 0 0 0-2.024-1.034 1.618 1.618 0 0 0-1.033 2.024l.522 1.609-3.368 1.092-.524-1.611a1.618 1.618 0 0 0-2.022-1.034 1.617 1.617 0 0 0-1.034 2.023l.524 1.616-1.662.541a1.602 1.602 0 0 0-.988 1.95c.25.856 1.152 1.373 1.979 1.092.006 0 .658-.209 1.665-.536l1.099 3.386h-.002v.002l-1.67.545a1.599 1.599 0 0 0-.987 1.949c.25.857 1.15 1.374 1.979 1.093.007 0 .659-.211 1.665-.538l.003.005a.024.024 0 0 0 .008-.002l.539 1.657a1.6 1.6 0 0 0 1.949.989c.857-.25 1.373-1.151 1.094-1.979 0-.006-.209-.654-.533-1.654l-.003-.009c1.104-.358 2.276-.739 3.376-1.098l.543 1.668a1.602 1.602 0 0 0 1.949.989c.856-.251 1.374-1.152 1.092-1.979 0-.007-.209-.659-.535-1.663l.019-.006-.003-.007 1.609-.522a1.62 1.62 0 0 0 1.035-2.024zM10.86 14.238l-1.097-3.377a.02.02 0 0 0 .005-.001v-.006c1.098-.356 2.268-.735 3.363-1.092l1.098 3.377-3.369 1.099z"></path></svg>',
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Safe Transaction',
          description:
            'We have the most up-to-date security to support the security of all our customers in carrying out all transactions.',
        },
      ],
      id: '7d1d44c7-5184-4fc4-975a-77f814c55559',
      status: 'published',
      date_created: '2024-06-28T14:03:11.910Z',
    },
  },
  {
    id: '25',
    collection: 'ST_FeatureCards',
    item: {
      icon_svg:
        '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                              <path d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n                              </svg>',
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Fast Customer Service',
          description:
            'Provide Customer Service For Those Of You Who Have Problems 24 Hours A Week',
        },
      ],
      id: '054ad606-632a-4dd7-85a9-ddf19c8ace78',
      status: 'published',
      date_created: '2024-06-28T14:03:11.933Z',
    },
  },
  {
    id: '26',
    collection: 'ST_FeatureCards',
    item: {
      icon_svg:
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><circle cx="12.01" cy="12" r="2"></circle><path d="M11.01 22h2l.5-7h-3l.5 7z"></path><path d="M12 2a10 10 0 0 0-2.45 19.68l-.15-2.12a8 8 0 1 1 5.21 0l-.15 2.12A10 10 0 0 0 12 2z"></path><path d="M15.32 9.61a3.44 3.44 0 0 1 .37.68 3.83 3.83 0 0 1 .23.75 3.57 3.57 0 0 1 .09.8 3.66 3.66 0 0 1-.09.81 3.83 3.83 0 0 1-.23.75 3.44 3.44 0 0 1-.37.68 4.7 4.7 0 0 1-.35.43l-.19 2.62a5.33 5.33 0 0 0 .58-.31A5.86 5.86 0 0 0 17 15.2a5.57 5.57 0 0 0 .55-1 5.89 5.89 0 0 0 .35-1.13 6.06 6.06 0 0 0 .1-1.23 6.22 6.22 0 0 0-.13-1.21A6.09 6.09 0 0 0 17 8.49a6.29 6.29 0 0 0-.73-.89 5.67 5.67 0 0 0-.89-.73 6.3 6.3 0 0 0-1-.56A6.17 6.17 0 0 0 13.21 6a6.11 6.11 0 0 0-2.41 0 5.51 5.51 0 0 0-1.13.36 5.57 5.57 0 0 0-1 .55 5.67 5.67 0 0 0-.89.73 6.29 6.29 0 0 0-.78.85 6.09 6.09 0 0 0-.9 2.14 6.21 6.21 0 0 0-.1 1.21 6.06 6.06 0 0 0 .12 1.21 5.89 5.89 0 0 0 .35 1.13 5.57 5.57 0 0 0 .55 1 6.24 6.24 0 0 0 1.62 1.62 5.33 5.33 0 0 0 .58.31L9 14.51a4.7 4.7 0 0 1-.35-.43 3.44 3.44 0 0 1-.37-.68 3.83 3.83 0 0 1-.23-.75 3.65 3.65 0 0 1-.05-.81 3.56 3.56 0 0 1 .08-.8 3.83 3.83 0 0 1 .23-.75 3.44 3.44 0 0 1 .37-.68 4 4 0 0 1 .5-.61 3.87 3.87 0 0 1 .59-.48 3.44 3.44 0 0 1 .68-.37 3.86 3.86 0 0 1 .75-.24 4.36 4.36 0 0 1 1.61 0 3.86 3.86 0 0 1 .75.24 3.58 3.58 0 0 1 1.27.85 3.49 3.49 0 0 1 .49.61z"></path></svg>',
      translations: [
        {
          id: '4',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Quick Transaction',
          description:
            'We provide faster transaction speeds than competitors, so money arrives and is received faster.',
        },
      ],
      id: '6dce6f26-5d88-416c-ae26-42822f121a14',
      status: 'published',
      date_created: '2024-06-28T14:03:11.967Z',
    },
  },
];
