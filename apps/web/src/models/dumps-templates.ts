import {
  ST_Button,
  ST_CardCarousel,
  ST_CardImageCarousel,
  ST_CleanHero,
  ST_MediaTab,
  ST_NavAccordion,
  ST_NavTab,
  ST_PageAsideMenu,
  ST_SidedContent,
  ST_SimpleCardLink,
  ST_StreamableCard,
  ST_Value,
} from '@/cms/page-sections';
import { DRTStatus } from '@/types/directus';

const getId = () => `${Math.random() * 10 ** 17}`;
const dumpDRTStatus: () => DRTStatus = () => ({
  date_created: '1/1/1990',
  id: getId(),
  status: 'published',
});

const languages_code = { code: 'en', name: 'English' };

export const DumpCardCarousel: ST_CardCarousel[] = [
  {
    collection: 'ST_CardCarousels',
    id: 1,
    item: {
      ...dumpDRTStatus(),
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      pagination_buttons: true,
      prev_next_buttons: true,
      disposition: 'text_right',
      translations: [
        {
          id: getId(),
          languages_code: languages_code,
          markdown_content: `
            Explain the importance of IT System in a company.

            ## Noteworthy technology acquisitions
            - Large clouds often have functions
            - Here are the biggest enterprise technology
            - Platform on which applications and systems
            - Cloud computing is the delivery of different services
          `.replace(/\n\s+/g, '\n'),
          title: 'Noteworthy technology acquisitions',
        },
      ],
    },
  },
  {
    collection: 'ST_CardCarousels',
    id: 2,
    item: {
      ...dumpDRTStatus(),
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      },
      pagination_buttons: true,
      prev_next_buttons: true,
      disposition: 'text_right',
      readmore_url: '/',
      translations: [
        {
          id: getId(),
          languages_code: languages_code,
          title: 'consumption-based pricing model',
          markdown_content: `
            Explain the importance of IT System in a company.

            ## Noteworthy technology acquisitions
            - Large clouds often have functions
            - Here are the biggest enterprise technology
            - Platform on which applications and systems
            - Cloud computing is the delivery of different services
          `.replace(/\n\s+/g, '\n'),
        },
      ],
    },
  },
];

export const DumpCardImageCarousel: ST_CardImageCarousel[] = [
  {
    collection: 'ST_CardImageCarousels',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      },
      initial_index: 1,
      pagination_buttons: true,
      readmore_url: '/',
      prev_next_buttons: true,
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Challenges in intelligent systems',
          description:
            'Research in intelligent systems faces numerous challenges, many of which relate to representing a dynamic physical world computationally. Uncertainty: Physical sensors/effectors provide limited, noisy and inaccurate information/action. Therefore, any actions the system takes may be incorrect both due to noise in the sensors and due to the limitations in executing those actions.',
        },
      ],
    },
  },
  {
    collection: 'ST_CardImageCarousels',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      initial_index: 0,
      pagination_buttons: true,
      readmore_url: '/',
      prev_next_buttons: true,
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Challenges in intelligent systems',
          description:
            'Research in intelligent systems faces numerous challenges, many of which relate to representing a dynamic physical world computationally. Uncertainty: Physical sensors/effectors provide limited, noisy and inaccurate information/action. Therefore, any actions the system takes may be incorrect both due to noise in the sensors and due to the limitations in executing those actions.',
        },
      ],
    },
  },
  {
    collection: 'ST_CardImageCarousels',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      },
      initial_index: 0,
      pagination_buttons: true,
      readmore_url: '/',
      prev_next_buttons: true,
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Challenges in intelligent systems',
          description:
            'Research in intelligent systems faces numerous challenges, many of which relate to representing a dynamic physical world computationally. Uncertainty: Physical sensors/effectors provide limited, noisy and inaccurate information/action. Therefore, any actions the system takes may be incorrect both due to noise in the sensors and due to the limitations in executing those actions.',
        },
      ],
    },
  },
];

export const DumpCleanHero: ST_CleanHero[] = [
  {
    collection: 'ST_CleanHeros',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Plans and pricing',
          description: 'No hidden charges and setup fee. Pay-as-you-go.',
        },
      ],
    },
  },
];

export const DumpNavAccordion: ST_NavAccordion[] = [
  {
    collection: 'ST_NavAccordions',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      id: 1222,
      prev_next_buttons: true,
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Ultra-fast deploy',
          markdown_content: '',
          description:
            'To reduce the time it takes to deploy VMs, we keep them in a dedicated, renewable pool. When you create a VM, the control panel requests this pool. It reduces the average deployment time to 40 seconds.',
        },
      ],
    },
  },
  {
    collection: 'ST_NavAccordions',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      id: 1223,
      prev_next_buttons: true,
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      },
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Freeze Protection',
          markdown_content: '',
          description:
            'A control panel is designed within the Single Page Application architecture. After the first page has been loaded, all pages load instantly, without lag. Focus entirely on your project.',
        },
      ],
    },
  },
  {
    collection: 'ST_NavAccordions',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      id: 1225,
      prev_next_buttons: true,
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
      },
      translations: [
        {
          id: getId(),
          languages_code,
          title: '2FA guard',
          markdown_content: '',
          description:
            'We bring you the best options for protecting your control panel. You can set up two-factor authentication via mobile app or SMS, right in the panel settings.',
        },
      ],
    },
  },
];

export const DumpSidedContent: ST_SidedContent[] = [
  {
    id: getId(),
    collection: 'ST_SidedContents',
    item: {
      ...dumpDRTStatus(),
      disposition: 'text_bottom',
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      },
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Icloudeng Makes It Simple to Embrace the Cloud',
          markdown_content: `
          ### text_bottom
          We take a hands-on approach to designing and implementing cloud solutions that make sense for the needs of your organization. We’ll help you assess if and when a move to the cloud is right and create a smooth transition for your team.

          - Require extra IT support
          - Adherence to industry compliance
          - Increase maintenance costs
          - Require a greater capital investment
          - Increase the risk of data loss
          - Limit your company’s ability to scale
          `.replace(/\n\s+/g, '\n'),
        },
      ],
    },
  },
  {
    id: getId(),
    collection: 'ST_SidedContents',
    item: {
      ...dumpDRTStatus(),
      disposition: 'text_top',
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
      },
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'Icloudeng Makes It Simple to Embrace the Cloud',
          markdown_content: `
          ### text_top
          We take a hands-on approach to designing and implementing cloud solutions that make sense for the needs of your organization. We’ll help you assess if and when a move to the cloud is right and create a smooth transition for your team.

          - Require extra IT support
          - Adherence to industry compliance
          - Increase maintenance costs
          - Require a greater capital investment
          - Increase the risk of data loss
          - Limit your company’s ability to scale
          `.replace(/\n\s+/g, '\n'),
        },
      ],
    },
  },
];

export const DumpValue: ST_Value[] = [
  {
    collection: 'ST_Values',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      flexible: false,
      rows: 'dynamic',
      icon_svg:
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path></svg>',
      translations: [
        {
          id: getId(),
          name: 'Predictable',
          languages_code,
          description:
            'Billing charges by the minute. Only for active services.',
        },
      ],
    },
  },
  {
    collection: 'ST_Values',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      flexible: false,
      rows: 'dynamic',
      icon_svg:
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"></path><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"></path></svg>',
      translations: [
        {
          id: getId(),
          name: 'Scalable',
          languages_code,
          description:
            'It is easy to modify configurations even after deployment in seconds.',
        },
      ],
    },
  },
  {
    collection: 'ST_Values',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      flexible: false,
      rows: 'dynamic',
      icon_svg:
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path></svg>',
      translations: [
        {
          id: getId(),
          name: 'Reliable',
          languages_code,
          description:
            'Infrastructure availability is 99.9%. Guaranteed by the agreement.',
        },
      ],
    },
  },
  {
    collection: 'ST_Values',
    id: getId(),
    item: {
      ...dumpDRTStatus(),
      flexible: false,
      rows: 'dynamic',
      icon_svg:
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"></path></svg>',
      translations: [
        {
          id: getId(),
          name: 'Fastest',
          languages_code,
          description:
            'Xeon Gold CPUs and NVMe SSDs perform better in benchmarks.',
        },
      ],
    },
  },
];

export const DumpNavTab: ST_NavTab[] = [
  {
    id: getId(),
    collection: 'ST_NavTabs',
    item: {
      ...dumpDRTStatus(),
      disposition: 'text_left',
      translations: [
        {
          id: getId(),
          languages_code,
          name: 'Template',
          markdown_content: `
        ### Title
        We take a hands-on approach to designing and implementing cloud solutions that make sense for the needs of your organization. We’ll help you assess if and when a move to the cloud is right and create a smooth transition for your team.

        - Require extra IT support
        - Adherence to industry compliance
        - Increase maintenance costs
        - Require a greater capital investment
        - Increase the risk of data loss
        - Limit your company’s ability to scale
        `.replace(/\n\s+/g, '\n'),
        },
      ],
    },
  },
  {
    id: getId(),
    collection: 'ST_NavTabs',
    item: {
      ...dumpDRTStatus(),
      disposition: 'text_left',
      image: {
        id: getId(),
        src: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      },
      translations: [
        {
          id: getId(),
          languages_code,
          name: 'About',
          markdown_content: `
        ### Title2
        We take a hands-on approach to designing and implementing cloud solutions that make sense for the needs of your organization.

        - Require extra IT support
        - Adherence to industry compliance
        - Increase maintenance costs
        - Require a greater capital investment
        - Increase the risk of data loss
        - Limit your company’s ability to scale
        `.replace(/\n\s+/g, '\n'),
        },
      ],
    },
  },
];

export const DumpSimpleCardLink: ST_SimpleCardLink[] = [
  {
    id: getId(),
    collection: 'ST_SimpleCardLinks',
    item: {
      ...dumpDRTStatus(),
      external: false,
      url: '/',
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'About Serverspace',
          description:
            'Learn more about Serverspace and the main benefits of a cloud provider.',
          button_text: 'Explore',
        },
      ],
    },
  },
  {
    id: getId(),
    collection: 'ST_SimpleCardLinks',
    item: {
      ...dumpDRTStatus(),
      external: false,
      url: '/',
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'About Serverspace',
          description:
            'Learn more about Serverspace and the main benefits of a cloud provider.',
          button_text: 'Explore',
        },
      ],
    },
  },
  {
    id: getId(),
    collection: 'ST_SimpleCardLinks',
    item: {
      ...dumpDRTStatus(),
      external: false,
      url: '/',
      translations: [
        {
          id: getId(),
          languages_code,
          title: 'About Serverspace',
          description:
            'Learn more about Serverspace and the main benefits of a cloud provider.',
          button_text: 'Explore',
        },
      ],
    },
  },
];

export const DumpButton: ST_Button[] = [
  'outline',
  'primary',
  'ghost',
  'light',
  'dark',
].map((variant: any) => {
  return {
    id: getId(),
    collection: 'ST_Buttons',
    item: {
      ...dumpDRTStatus(),
      url: '/-/sign-up',
      external: false,
      variant: variant,
      translations: [
        {
          id: getId(),
          languages_code: {
            code: 'en',
            name: 'English',
          },
          button_text: variant,
        },
      ],
    },
  };
});

export const DumpMediaTabs: ST_MediaTab[] = [
  {
    id: '30',
    collection: 'ST_MediaTabs',
    item: {
      disposition: 'text_top',
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          tab_name: 'Get stared',
          title: 'Cloud Computing',
          media: undefined,
          media_url: 'https://youtu.be/mxT233EdY5c',
          description:
            'In this video we run through a quick overview of what is cloud computing.',
        },
      ],
      id: '73a10e60-cc62-4939-9d87-74af8d9b41ed',
      status: 'published',
      date_created: '2022-10-20T22:46:33.584Z',
      date_updated: '2022-10-20T23:31:42.660Z',
    },
  },
  {
    id: '31',
    collection: 'ST_MediaTabs',
    item: {
      disposition: 'text_top',
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          tab_name: 'Media',
          title: 'Media',
          description:
            "In this video you'll learn how to import media, save media to your global libraries & use our stock integrations.",
        },
      ],
      id: '2652b0f1-61b9-43e5-9e57-ec51d592733b',
      status: 'published',
      date_created: '2022-10-20T22:46:33.654Z',
    },
  },
  {
    id: '32',
    collection: 'ST_MediaTabs',
    item: {
      disposition: 'text_top',
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          tab_name: 'Group',
          title: 'Working with Groups',
          description:
            "In this video you'll learn how to create groups, mask groups & adjust the boundaries for groups.",
        },
      ],
      id: 'bc066ff4-725b-41c1-956e-faa4e56b019b',
      status: 'published',
      date_created: '2022-10-20T22:46:33.718Z',
    },
  },
  {
    id: '33',
    collection: 'ST_MediaTabs',
    item: {
      disposition: 'text_top',
      translations: [
        {
          id: '4',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          tab_name: 'Motion Presets',
          title: 'Working with Motion Presets',
          description:
            "In this video you'll learn how to add animations to any layer with pre-built animations. You'll also discover how to create & save your own animations!",
        },
      ],
      id: 'a0f545ac-b8c6-47eb-bb95-ede2a98ff85e',
      status: 'published',
      date_created: '2022-10-20T22:46:33.781Z',
      date_updated: '2022-10-20T23:25:31.154Z',
    },
  },
  {
    id: '34',
    collection: 'ST_MediaTabs',
    item: {
      disposition: 'text_top',
      translations: [
        {
          id: '5',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          tab_name: 'Publishing',
          title: 'Exporting & Render Queue',
          description:
            "In this video you'll learn how to export your videos, publish a specific frame as an image and how the render queue works.",
        },
      ],
      id: '03c829a7-7372-4d62-b0e4-b74e47b29adb',
      status: 'published',
      date_created: '2022-10-20T22:46:33.843Z',
    },
  },
];

export const DumpPageAsideMenus: ST_PageAsideMenu[] = [
  {
    id: '26',
    collection: 'ST_PageAsideMenus',
    item: {
      plan_pricing: [],
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'vStack cloud',
          menu_name: 'COMPUTE',
          markdown_content:
            "Cost-effective and developer-friendly solution. It's a great choice for the fastest deploying your applications. Learn more\n\n",
        },
      ],
      id: 'dbbb9f80-4794-4ba7-a656-10fea2dfa66c',
      status: 'published',
      date_created: '2022-10-18T12:46:28.545Z',
      date_updated: '2022-10-19T09:52:54.652Z',
    },
  },
  {
    id: '27',
    collection: 'ST_PageAsideMenus',
    item: {
      plan_pricing: [],
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Managed',
          menu_name: 'SERVICES',
          markdown_content:
            'Cloud servers’ maintenance and support by Serverspace technical experts. Learn more\n\n',
        },
      ],
      id: '30eecfdf-7d18-4eae-bf69-33f3186f6da2',
      status: 'published',
      date_created: '2022-10-18T12:46:28.628Z',
      date_updated: '2022-10-19T11:01:44.526Z',
    },
  },
  {
    id: '28',
    collection: 'ST_PageAsideMenus',
    item: {
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Object storage',
          menu_name: 'STORAGE',
          markdown_content:
            'Unlimited storage that is compatible with S3 and Swift API. Auto scaling depending on the data volume. Learn more\n\n',
        },
      ],
      id: '1b748f1d-d653-4de1-b17e-4883d986f018',
      status: 'published',
      date_created: '2022-10-18T12:46:28.711Z',
    },
  },
];

export const DumpStreamableCards: ST_StreamableCard[] = [
  {
    id: '35',
    collection: 'ST_StreamableCards',
    item: {
      stream_direction: 'stream_left',
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          name: 'Slack',
        },
      ],
      id: '20abdd0d-9404-4b94-9e24-17bd82305e2a',
      status: 'published',
      date_created: '2022-10-22T06:31:55.716Z',
    },
  },
  {
    id: '36',
    collection: 'ST_StreamableCards',
    item: {
      stream_direction: 'stream_left',
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          name: 'Gitlab',
        },
      ],
      id: 'd6eae1a5-c978-4076-bbea-b3f14da31d29',
      status: 'published',
      date_created: '2022-10-22T06:38:12.426Z',
    },
  },
  {
    id: '37',
    collection: 'ST_StreamableCards',
    item: {
      stream_direction: 'stream_right',
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          name: 'Whatfix',
        },
      ],
      id: 'c25c0981-4a54-49fd-b903-5b95b15ea900',
      status: 'published',
      date_created: '2022-10-22T07:18:40.216Z',
      date_updated: '2022-10-22T07:19:07.415Z',
    },
  },
  {
    id: '38',
    collection: 'ST_StreamableCards',
    item: {
      stream_direction: 'stream_right',
      translations: [
        {
          id: '4',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          name: 'Parabol',
        },
      ],
      id: 'c94ebff4-8ff6-406d-8fe7-ac9a648efa78',
      status: 'published',
      date_created: '2022-10-22T07:18:40.288Z',
    },
  },
];
