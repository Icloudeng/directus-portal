import {
  ST_ContentStepper,
  ST_Countdown,
  ST_FAQ,
  ST_FeatureCard,
  ST_FeatureListWithIcon,
  ST_FormInput,
  ST_HeroWithMediaBackground,
  ST_Image,
  ST_SideTextFeature,
  ST_TimelineCard,
  ST_Video,
} from '@apps/contracts';

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

export const DumpFAQ: ST_FAQ[] = [
  {
    id: '27',
    collection: 'ST_FAQs',
    item: {
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'How do I update my billing information?',
          content:
            "<p>To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.</p>",
        },
      ],
      id: 'adce7504-ffec-4bc6-976d-9f4f874e8e8f',
      status: 'published',
      date_created: '2024-06-28T14:57:34.043Z',
    },
  },
  {
    id: '28',
    collection: 'ST_FAQs',
    item: {
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'How can I contact customer support?',
          content:
            "<p>To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.</p>",
        },
      ],
      id: '5f5f0a33-e533-42e9-ab4e-0f416ee9ba7b',
      status: 'published',
      date_created: '2024-06-28T14:57:34.069Z',
    },
  },
  {
    id: '29',
    collection: 'ST_FAQs',
    item: {
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'How do I update my profile information?',
          content:
            "<p>To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.</p>",
        },
      ],
      id: 'ecfab0b5-8520-4312-9db1-5510dad3d1ac',
      status: 'published',
      date_created: '2024-06-28T14:57:34.097Z',
    },
  },
];

export const DumpFeatureListWithIcon: ST_FeatureListWithIcon[] = [
  {
    id: '30',
    collection: 'ST_FeatureListWithIcons',
    item: {
      icon_svg:
        '<svg class="text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>',
      color: '#3399FF',
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Project Management',
          features: [
            'Unified Contribution Graph',
            'Org activity graph',
            'Org dependency insights',
            'Milestones',
            'Repo insights',
          ],
        },
      ],
      id: '4cf761fc-b8d8-494d-b8b5-96a4351a5d51',
      status: 'published',
      date_created: '2024-06-28T21:24:55.168Z',
    },
  },
  {
    id: '31',
    collection: 'ST_FeatureListWithIcons',
    item: {
      icon_svg:
        '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>',
      color: '#FFA439',
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Collaborative Coding',
          features: [
            'Dynamic reports and dashboards',
            'Code review assignments',
            'Team discussions',
            'Protected branches',
            'Draft pull requests',
          ],
        },
      ],
      id: 'ed6ec2f7-d0a4-4436-be5d-7eb03b7df870',
      status: 'published',
      date_created: '2024-06-28T21:24:55.192Z',
    },
  },
  {
    id: '32',
    collection: 'ST_FeatureListWithIcons',
    item: {
      icon_svg:
        '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>',
      color: '#E35169',
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Enterprise Security',
          features: [
            'Required reviews',
            'Dependabot security and',
            'Dependency graph',
            'GitHub Advisory Database',
          ],
        },
      ],
      id: '0f7bbc16-5d58-4569-8115-cca00a2f8ae3',
      status: 'published',
      date_created: '2024-06-28T21:24:55.212Z',
    },
  },
];

export const DumpVideo: ST_Video[] = [
  {
    id: '34',
    collection: 'ST_Videos',
    item: {
      video_url: 'https://vimeo.com/347119375',
      id: '95addbac-d807-4cf7-8e06-9caa82219647',
      status: 'published',
      date_created: '2024-06-29T07:32:19.670Z',
    },
  },
];

export const DumpImage: ST_Image[] = [
  {
    id: '36',
    collection: 'ST_Images',
    item: {
      image: {
        id: 'bf1c59ee-237e-44a5-8bf8-4715937be143',
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      id: '6a08175f-7731-48cb-b8c1-dca6b03b94be',
      status: 'published',
      date_created: '2024-06-29T07:33:24.326Z',
    },
  },
];

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const DumpCountdown: ST_Countdown[] = [
  {
    id: '1',
    collection: 'ST_Countdowns',
    item: {
      date: addDays(new Date(), 5).toISOString(),
      id: '1',
      status: 'published',
      date_created: '2024-06-29T07:32:19.670Z',
    },
  },
];

export const DumpHeroWithMediaBackground: ST_HeroWithMediaBackground[] = [
  {
    id: '40',
    collection: 'ST_HeroWithMediaBackgrounds',
    item: {
      media: {
        id: 'bf1c59ee-237e-44a5-8bf8-4715937be143',
        type: 'image/png',
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      animated: true,
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Fashion Week',
          description: 'with TailwindCSS',
          buttons: [
            {
              name: 'Get Started',
              url: '/get-started',
              variant: 'light',
              external: false,
            },
          ],
        },
      ],
      id: '7da1d002-621f-47f3-8ad5-31b49279cbf7',
      status: 'published',
      date_created: '2024-06-29T12:35:55.041Z',
      date_updated: '2024-06-29T13:58:13.056Z',
    },
  },
  {
    id: '41',
    collection: 'ST_HeroWithMediaBackgrounds',
    item: {
      media: {
        id: '20c17e17-a1d5-44d9-8074-746ac391e0ef',
        type: 'image/jpeg',
        src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      },
      animated: true,
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Brand New Sunglasses',
          description: 'Real Time Location',
          buttons: [],
        },
      ],
      id: '6eb3b49d-4503-4a01-95fa-d1066a92279c',
      status: 'published',
      date_created: '2024-06-29T19:01:26.470Z',
      date_updated: '2024-06-29T20:57:20.046Z',
    },
  },
];

export const DumpSideTextFeatures: ST_SideTextFeature[] = [
  {
    id: '44',
    collection: 'ST_SideTextFeatures',
    item: {
      image: {
        id: 'bf1c59ee-237e-44a5-8bf8-4715937be143',
        type: 'image/png',
        src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
      },
      disposition: 'text_left',
      sided: true,
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Nuxt development is carried out by passionate developers',
          description:
            'Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.',
          features: [
            {
              title: 'Chat Anytime',
              color: '#6366F1',
              icon_svg:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">\n                    <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd"></path>\n                  </svg>',
              description: 'Asperiores nemo possimus nesciunt quam mollitia.',
            },
            {
              title: 'Real Time Location',
              color: '#0D9488',
              icon_svg:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">\n                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>\n                  </svg>',
              description: 'Asperiores nemo possimus nesciunt quam mollitia.',
            },
          ],
        },
      ],
      id: '87030281-c7f1-4350-9952-f6f3746a8a7f',
      status: 'published',
      date_created: '2024-06-30T09:34:52.238Z',
      date_updated: '2024-06-30T10:12:03.533Z',
    },
  },
];

export const DumpContentSteppers: ST_ContentStepper[] = [
  {
    id: '45',
    collection: 'ST_ContentSteppers',
    item: {
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'User info',
          content:
            '<h3 id="styling" class="group whitespace-pre-wrap"><span aria-hidden="true">Styling</span></h3>\n<p>Headless UI keeps track of a lot of state about each component, like which tab is currently selected, whether a popover is open or closed, or which item in a menu is currently focused via the keyboard.</p>\n<p>But because the components are headless and completely unstyled out of the box, you can\'t see this information in your UI until you provide the styles you want for each state yourself.</p>\n<h3 id="using-data-attributes" class="group whitespace-pre-wrap"></h3>',
        },
      ],
      id: '43d78e41-7698-4441-aa06-ee303f5fc30a',
      status: 'published',
      date_created: '2024-06-30T11:00:29.943Z',
    },
  },
  {
    id: '46',
    collection: 'ST_ContentSteppers',
    item: {
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Company info',
          content:
            '<p>The easiest way to style the different states of a Headless UI component is using the&nbsp;<code>data-*</code>&nbsp;attributes that each component exposes.</p>\n<p>For example, the&nbsp;<code>Tab</code>&nbsp;component exposes a&nbsp;<code>data-selected</code>&nbsp;attribute, which tells you if the tab is currently selected, and a&nbsp;<code>data-hover</code> attribute, which tells you if the tab is currently being hovered by the mouse.</p>',
        },
      ],
      id: '3473881e-f94d-49d5-8055-f915baeca66f',
      status: 'published',
      date_created: '2024-06-30T11:00:29.969Z',
    },
  },
];

export const DumpTimelineCards: ST_TimelineCard[] = [
  {
    id: '53',
    collection: 'ST_TimelineCards',
    item: {
      color: '#41516C',
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          card_title: 'Time One',
          title: 'How do I update my billing information?',
          description:
            "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
        },
      ],
      id: 'c21179f7-44c5-48ee-94e5-7fbceab24af8',
      status: 'published',
      date_created: '2024-07-09T19:21:31.925Z',
    },
  },
  {
    id: '54',
    collection: 'ST_TimelineCards',
    item: {
      color: '#FFC23B',
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          card_title: 'TIme two',
          title: 'To contact customer support',
          description:
            "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
        },
      ],
      id: 'f6704f03-2da8-41ee-9a68-543d6884613f',
      status: 'published',
      date_created: '2024-07-09T19:21:31.947Z',
    },
  },
];
