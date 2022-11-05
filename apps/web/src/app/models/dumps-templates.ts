/* eslint-disable */
import type {
  ST_BecomePartnerForm,
  ST_Button,
  ST_Card,
  ST_CardCarousel,
  ST_CardImageCarousel,
  ST_CleanHero,
  ST_CompanyDetail,
  ST_Gallery,
  ST_GroupedLogo,
  ST_HoverableMediaMenu,
  ST_MediaTab,
  ST_NavAccordion,
  ST_NavTab,
  ST_PageAsideMenu,
  ST_PlansPricing,
  ST_SidedContent,
  ST_SideTextImage,
  ST_SimpleCardLink,
  ST_StreamableCard,
  ST_Testimonial,
  ST_TimelineRange,
  ST_TransformedImageCarousel,
  ST_Value,
} from '@/cms/page-sections';
import type { DRTStatus } from '@/types/directus';

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
      disposition: 'text_left',
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

export const DumpHoverableMediaMenus: ST_HoverableMediaMenu[] = [
  {
    id: '40',
    collection: 'ST_HoverableMediaMenus',
    item: {
      image: {
        id: '63ac466c-bc63-4e23-9050-3d7a3ff05a43',
        type: 'image/webp',
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          markdown_content:
            '# It is a long established\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here',
        },
      ],
      id: 'ea9b59e4-dc3b-4587-926e-18e39c385f57',
      status: 'published',
      date_created: '2022-10-26T13:00:08.363Z',
      date_updated: '2022-10-26T13:34:57.657Z',
    },
  },
  {
    id: '41',
    collection: 'ST_HoverableMediaMenus',
    item: {
      image: {
        id: '13d96468-bb41-49b8-a3c7-5670a0a3cb2f',
        type: 'image/webp',
        src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      },
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          markdown_content:
            '# We use an innovative\n\nWe use an innovative hyper-converged vStack platform. The platform is powered by Open Source technologies that provide fantastic performance. It is the first of its kind, the unique one.\n',
        },
      ],
      id: '3cb918aa-76fc-47b9-ace1-71c15efbe89f',
      status: 'published',
      date_created: '2022-10-26T13:00:08.442Z',
      date_updated: '2022-10-26T13:34:57.775Z',
    },
  },
];

export const DumpTransformedImageCarousels: ST_TransformedImageCarousel[] = [
  {
    id: '42',
    collection: 'ST_TransformedImageCarousels',
    item: {
      image: {
        id: '63ac466c-bc63-4e23-9050-3d7a3ff05a43',
        type: 'image/webp',
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      id: '3125b487-d1ac-45d6-94f1-b2298fa953a6',
      status: 'published',
      date_created: '2022-10-27T06:33:04.141Z',
    },
  },
  {
    id: '43',
    collection: 'ST_TransformedImageCarousels',
    item: {
      image: {
        id: 'f8bf372a-d571-4668-93f3-c9383341be0b',
        type: 'image/jpeg',
        src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      },
      id: '39b5fbb9-3d1e-405f-802f-88408028b425',
      status: 'published',
      date_created: '2022-10-27T06:33:04.185Z',
    },
  },
  {
    id: '44',
    collection: 'ST_TransformedImageCarousels',
    item: {
      image: {
        id: 'c3f19c78-7a77-4c06-bc54-82c4599f40f9',
        type: 'image/jpeg',
        src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
      },
      id: '098bb1be-7939-4392-96b4-bf70ce1a7b81',
      status: 'published',
      date_created: '2022-10-27T06:33:04.220Z',
    },
  },
];

export const DumpPlansPricing: ST_PlansPricing[] = [
  {
    id: '29',
    collection: 'ST_PlansPricing',
    item: {
      plan_pricing: [
        'flexible_plans',
        'fixed_plans',
        'plans_comparisons',
        'machine_templates',
      ],
      id: '90be9996-7483-4c5b-a93c-9e64051b6213',
      status: 'published',
      date_created: '2022-10-19T11:00:25.304Z',
      date_updated: '2022-10-27T07:42:53.086Z',
      plan_pricing_contents: {
        flexible_plans: {
          ram: 1,
          ram_cost_hour: 0.0005,
          cpu: 1,
          cpu_cost_hour: 0.0007,
          ssd: 25,
          ssd_cost_hour: 0.00001,
          monthly_reduction: 4,
          id: '251c0f8c-099b-4863-8f73-fef8aac5e99e',
          status: 'published',
          date_created: '2022-10-18T21:07:21.862Z',
          date_updated: '2022-10-27T21:23:37.091Z',
        },
        fixed_plans: [
          {
            translations: [
              {
                id: '1',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Basic',
              },
            ],
            platforms: [
              {
                platform: 'Oddo',
              },
              {
                platform: 'Nextcloud',
              },
            ],
            type: 'basic',
            monthly_reduction: 0,
            ram: 2,
            cpu: 1,
            ssd: 25,
            cost_hour: 0.231,
            id: '9376e97d-fae4-43e7-abff-1b29f237af96',
            status: 'published',
            date_created: '2022-10-27T08:03:09.076Z',
            date_updated: '2022-10-28T00:17:49.709Z',
          },
          {
            translations: [
              {
                id: '2',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Small Company',
              },
            ],
            platforms: [
              {
                platform: 'Oddo',
              },
              {
                platform: 'Metabase',
              },
            ],
            type: 'extended',
            monthly_reduction: 0,
            ram: 2,
            cpu: 1,
            ssd: 25,
            cost_hour: 0.01,
            id: 'f5897405-b7ce-431f-a9ea-b96411863abc',
            status: 'published',
            date_created: '2022-10-28T00:16:23.730Z',
          },
          {
            translations: [
              {
                id: '3',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Big Company',
              },
            ],
            platforms: [
              {
                platform: 'Nextcloud',
              },
              {
                platform: 'Matomo',
              },
              {
                platform: 'Metabase',
              },
              {
                platform: 'Oddo',
              },
            ],
            type: 'pro',
            monthly_reduction: 0,
            ram: 2,
            cpu: 1,
            ssd: 25,
            cost_hour: 0.01,
            id: '02765f6e-240b-4914-8935-54c08411313a',
            status: 'published',
            date_created: '2022-10-28T00:17:24.864Z',
          },
        ],
        plans_comparisons: [
          {
            translations: [
              {
                id: '1',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Subscription activation cost',
              },
            ],
            basic: 'checked',
            extended: '$ 10/mo',
            pro: 'checked',
            id: '9b62764a-6c3e-4684-9c4d-04f55e7752d2',
            status: 'published',
            date_created: '2022-10-27T09:58:02.258Z',
            date_updated: '2022-10-27T10:10:15.461Z',
          },
          {
            translations: [
              {
                id: '2',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Software installation and setup',
              },
            ],
            basic: 'checked',
            extended: 'checked',
            pro: 'checked',
            id: '26a71a31-9bc7-409c-8def-ec62696e7a79',
            status: 'published',
            date_created: '2022-10-28T00:19:01.093Z',
          },
          {
            translations: [
              {
                id: '3',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Updates installation within one major release',
              },
            ],
            basic: 'checked',
            extended: 'checked',
            pro: 'checked',
            id: 'a3369aa3-9bb0-4452-931c-96e49987d9bf',
            status: 'published',
            date_created: '2022-10-28T00:19:24.972Z',
          },
          {
            translations: [
              {
                id: '4',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Elaboration of infrastructure improvement suggestions',
              },
            ],
            basic: 'unchecked',
            extended: 'checked',
            pro: 'checked',
            id: 'be00a0ca-8d98-40e1-aa9d-e0f36da01e89',
            status: 'published',
            date_created: '2022-10-28T00:19:49.440Z',
          },
          {
            translations: [
              {
                id: '5',
                languages_code: {
                  code: 'en',
                  name: 'English',
                },
                name: 'Security logs monitoring',
              },
            ],
            basic: 'unchecked',
            extended: 'unchecked',
            pro: 'checked',
            id: '0e77ddb5-32d9-4106-be5a-e65bdb4aa00b',
            status: 'published',
            date_created: '2022-10-28T00:20:33.119Z',
          },
        ],
        machine_templates: [
          {
            name: 'Windows Server 2019 Std X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z"></path></svg>',
            cost_hour: 0.001,
            default: false,
            id: 'bb16febd-d35d-4a7c-b700-a3d0a4e54601',
            status: 'published',
            date_created: '2022-10-19T18:32:55.497Z',
          },
          {
            name: 'CentOS 8.3 X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.076.066L8.883 3.28H3.348v5.434L0 12.01l3.349 3.298v5.39h5.374l3.285 3.236 3.285-3.236h5.43v-5.374L24 12.026l-3.232-3.252V3.321H15.31zm0 .749l2.49 2.506h-1.69v6.441l-.8.805-.81-.815V3.28H9.627zm-8.2 2.991h4.483L6.485 5.692l4.253 4.279v.654H9.94L5.674 6.423l-1.798 1.77zm5.227 0h1.635v5.415l-3.509-3.53zm4.302.043h1.687l1.83 1.842-3.517 3.539zm2.431 0h4.404v4.394l-1.83-1.842-4.241 4.267h-.764v-.69l4.261-4.287zm2.574 3.3l1.83 1.843v1.676h-5.327zm-12.735.013l3.515 3.462H3.876v-1.69zM3.348 9.454v1.697h6.377l.871.858-.782.77H3.35v1.786L.753 12.01zm17.42.068l2.488 2.503-2.533 2.55v-1.796h-6.41l-.75-.754.825-.83h6.38zm-9.502.978l.81.815.186-.188.614-.618v.686h.768l-.825.83.75.754h-.719v.808l-.842-.83-.741.73v-.707h-.7l.781-.77-.188-.186-.682-.672h.788zm-7.39 2.807h5.402l-3.603 3.55-1.798-1.772zm6.154 0h.708v.7l-4.404 4.338 1.852 1.824h-4.31v-4.342l1.798 1.77zm3.348 0h.715l4.317 4.343.186-.187 1.599-1.61v4.316h-4.366l1.853-1.825-.188-.185-4.116-4.054zm1.46 0h5.357v1.798l-1.785 1.796zm-2.83.191l.842.829v6.37h1.691l-2.532 2.495-2.533-2.495h1.79V14.23zm-1.27 1.251v5.42H8.939l-1.852-1.823zm2.64.097l3.552 3.499-1.853 1.825h-1.7z"></path></svg>',
            cost_hour: 0.001,
            default: false,
            id: '485b3d94-4827-437c-b1d9-18c98b880d71',
            status: 'published',
            date_created: '2022-10-19T18:34:49.351Z',
          },
          {
            name: 'FreeBSD 12.2 X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M303.7 96.2c11.1-11.1 115.5-77 139.2-53.2 23.7 23.7-42.1 128.1-53.2 139.2-11.1 11.1-39.4.9-63.1-22.9-23.8-23.7-34.1-52-22.9-63.1zM109.9 68.1C73.6 47.5 22 24.6 5.6 41.1c-16.6 16.6 7.1 69.4 27.9 105.7 18.5-32.2 44.8-59.3 76.4-78.7zM406.7 174c3.3 11.3 2.7 20.7-2.7 26.1-20.3 20.3-87.5-27-109.3-70.1-18-32.3-11.1-53.4 14.9-48.7 5.7-3.6 12.3-7.6 19.6-11.6-29.8-15.5-63.6-24.3-99.5-24.3-119.1 0-215.6 96.5-215.6 215.6 0 119 96.5 215.6 215.6 215.6S445.3 380.1 445.3 261c0-38.4-10.1-74.5-27.7-105.8-3.9 7-7.6 13.3-10.9 18.8z"></path></svg>',
            cost_hour: 0.001,
            default: false,
            id: '9891a974-fae8-4f6b-ae68-3b7373e278a9',
            status: 'published',
            date_created: '2022-10-19T18:37:57.643Z',
          },
          {
            name: 'Ubuntu 20.04 X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4.973c-6.248 0-11.313 5.065-11.313 11.313s5.065 11.313 11.313 11.313c6.248 0 11.313-5.065 11.313-11.313s-5.065-11.313-11.313-11.313zM18.538 8.869c0.417-0.722 1.341-0.97 2.063-0.553s0.97 1.341 0.552 2.063c-0.417 0.722-1.34 0.97-2.063 0.552s-0.97-1.34-0.553-2.062zM16 9.724c0.608 0 1.195 0.084 1.753 0.238 0.098 0.607 0.459 1.166 1.033 1.498s1.237 0.364 1.811 0.147c1.117 1.098 1.844 2.592 1.95 4.256l-2.152 0.032c-0.198-2.254-2.090-4.021-4.394-4.021-0.664 0-1.294 0.148-1.858 0.41l-1.050-1.881c0.877-0.434 1.864-0.679 2.908-0.679zM8.307 17.796c-0.835 0-1.511-0.676-1.511-1.51s0.676-1.511 1.511-1.511c0.834 0 1.51 0.676 1.51 1.511s-0.676 1.51-1.51 1.51zM9.646 17.931c0.477-0.389 0.782-0.981 0.782-1.645s-0.305-1.256-0.782-1.645c0.409-1.581 1.392-2.931 2.713-3.814l1.104 1.85c-1.135 0.799-1.876 2.117-1.876 3.61s0.741 2.811 1.876 3.609l-1.104 1.85c-1.322-0.883-2.305-2.233-2.713-3.815zM20.602 24.255c-0.723 0.417-1.646 0.17-2.063-0.553s-0.17-1.645 0.553-2.063c0.722-0.417 1.646-0.169 2.062 0.553s0.17 1.646-0.553 2.063zM20.597 20.964c-0.574-0.217-1.237-0.184-1.811 0.147-0.574 0.332-0.934 0.891-1.033 1.498-0.558 0.155-1.146 0.239-1.753 0.239-1.044 0-2.031-0.245-2.908-0.68l1.050-1.881c0.565 0.263 1.194 0.41 1.858 0.41 2.305 0 4.196-1.767 4.394-4.021l2.153 0.032c-0.106 1.664-0.833 3.158-1.95 4.256z"></path></svg>',
            cost_hour: 0.001,
            default: true,
            id: 'd4f75937-5c1e-4a0b-8eed-738e15f7f353',
            status: 'published',
            date_created: '2022-10-19T18:35:48.709Z',
            date_updated: '2022-10-19T20:16:58.076Z',
          },
          {
            name: 'Debian 10.7 X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.885 17.41c0.167-0.13 0.319-0.262 0.454-0.391-0.377 0.092-0.76 0.094-1.146 0.059-0.463 0.006 0.088 0.239 0.692 0.332zM20.679 16.458c0.276-0.381 0.477-0.798 0.548-1.229-0.062 0.307-0.229 0.572-0.386 0.852-0.866 0.545-0.081-0.324-0-0.654-0.931 1.172-0.128 0.703-0.162 1.030zM21.597 14.070c0.056-0.834-0.164-0.571-0.238-0.252 0.086 0.045 0.155 0.588 0.238 0.252zM16.436 2.667c0.247 0.044 0.534 0.078 0.494 0.137 0.27-0.059 0.332-0.114-0.494-0.137zM16.918 2.826l0.012-0.022-0.175 0.036zM16.287 20.066c-0.667-0.312-1.277-0.784-1.779-1.361 0.266 0.39 0.554 0.769 0.925 1.067-0.629-0.213-1.468-1.523-1.713-1.576 1.084 1.94 4.396 3.402 6.131 2.677-0.803 0.029-1.822 0.016-2.724-0.317-0.347-0.179-0.807-0.532-0.811-0.648-0.017 0.045-0.046 0.090-0.028 0.158zM16.322 19.885c-0.005 0.006-0.007 0.013-0.007 0.022 0.003-0.007 0.005-0.015 0.007-0.022zM26.274 12.297c0.008-0.425 0.118-0.223 0.161-0.328-0.084-0.048-0.303-0.374-0.436-0.999 0.097-0.147 0.258 0.381 0.39 0.403-0.085-0.497-0.23-0.876-0.236-1.258-0.384-0.803-0.136 0.107-0.448-0.345-0.409-1.276 0.339-0.296 0.39-0.875 0.62 0.898 0.973 2.289 1.135 2.866-0.124-0.703-0.324-1.383-0.568-2.042 0.188 0.079-0.303-1.446 0.245-0.436-0.585-2.153-2.504-4.165-4.27-5.109 0.216 0.198 0.489 0.446 0.391 0.485-0.878-0.523-0.724-0.564-0.849-0.784-0.716-0.291-0.762 0.023-1.236 0.001-1.348-0.715-1.608-0.639-2.849-1.087l0.057 0.264c-0.893-0.297-1.041 0.113-2.006 0.001-0.059-0.046 0.309-0.166 0.612-0.21-0.864 0.114-0.823-0.17-1.668 0.031 0.208-0.146 0.428-0.243 0.651-0.367-0.704 0.043-1.681 0.41-1.38 0.076-1.149 0.513-3.189 1.232-4.334 2.306l-0.036-0.241c-0.525 0.63-2.288 1.881-2.428 2.697l-0.14 0.033c-0.273 0.462-0.45 0.986-0.666 1.462-0.357 0.608-0.524 0.234-0.473 0.329-0.702 1.424-1.051 2.62-1.352 3.601 0.215 0.321 0.005 1.932 0.086 3.222-0.353 6.369 4.47 12.552 9.741 13.98 0.773 0.276 1.922 0.266 2.899 0.294-1.153-0.33-1.302-0.175-2.425-0.566-0.81-0.382-0.988-0.817-1.562-1.315l0.227 0.401c-1.126-0.398-0.655-0.493-1.571-0.783l0.243-0.317c-0.365-0.028-0.966-0.615-1.131-0.94l-0.399 0.016c-0.48-0.592-0.735-1.018-0.716-1.348l-0.129 0.23c-0.146-0.251-1.764-2.219-0.925-1.761-0.156-0.143-0.363-0.232-0.588-0.64l0.171-0.195c-0.404-0.52-0.743-1.186-0.718-1.408 0.216 0.291 0.365 0.345 0.513 0.395-1.020-2.531-1.077-0.139-1.85-2.576l0.163-0.013c-0.125-0.189-0.201-0.394-0.302-0.595l0.071-0.709c-0.734-0.849-0.205-3.611-0.099-5.125 0.073-0.616 0.613-1.272 1.023-2.3l-0.25-0.043c0.478-0.834 2.729-3.348 3.772-3.219 0.505-0.634-0.1-0.002-0.199-0.162 1.109-1.148 1.458-0.811 2.207-1.018 0.807-0.479-0.693 0.187-0.31-0.183 1.396-0.356 0.989-0.81 2.81-0.991 0.192 0.109-0.446 0.169-0.606 0.311 1.163-0.569 3.68-0.44 5.315 0.316 1.897 0.887 4.029 3.507 4.113 5.973l0.096 0.026c-0.048 0.98 0.15 2.114-0.194 3.155l0.234-0.493c0.027 0.749-0.219 1.113-0.442 1.756l-0.401 0.2c-0.328 0.636 0.032 0.404-0.203 0.91-0.512 0.455-1.552 1.423-1.885 1.511-0.243-0.005 0.165-0.287 0.218-0.397-0.684 0.47-0.549 0.706-1.596 0.992l-0.031-0.068c-2.583 1.215-6.17-1.193-6.123-4.478-0.028 0.209-0.078 0.156-0.136 0.241-0.133-1.691 0.781-3.388 2.322-4.081 1.508-0.746 3.275-0.44 4.355 0.566-0.593-0.777-1.774-1.601-3.173-1.524-1.371 0.022-2.653 0.893-3.081 1.838-0.702 0.442-0.784 1.704-1.090 1.935-0.412 3.026 0.774 4.333 2.781 5.871 0.162 0.109 0.181 0.171 0.167 0.227 0.001-0.001 0.001-0.003 0.003-0.004 2.367 0.884 4.812 0.67 6.86-0.972 0.521-0.406 1.090-1.096 1.255-1.106-0.248 0.373 0.042 0.179-0.148 0.508 0.519-0.837-0.226-0.341 0.537-1.446l0.282 0.388c-0.105-0.695 0.863-1.539 0.765-2.638 0.222-0.336 0.248 0.362 0.012 1.135 0.327-0.858 0.086-0.996 0.17-1.704 0.091 0.238 0.21 0.491 0.271 0.742-0.213-0.829 0.218-1.396 0.325-1.878-0.105-0.047-0.329 0.366-0.38-0.613zM13.071 18.038c0.304 0.414 0.546 0.862 0.935 1.185-0.28-0.546-0.487-0.772-0.87-1.51l-0.065 0.325zM13.856 17.685c-0.161-0.178-0.257-0.393-0.363-0.607 0.102 0.376 0.311 0.698 0.506 1.027l-0.143-0.42zM25.717 17.664c0.456-0.858 0.752-1.796 0.875-2.747l-0.068 0.171c-0.125 0.886-0.394 1.763-0.807 2.576zM17.63 2.307c-0.433 0.036-0.864 0.058-1.29 0.113l0.188 0.026c0.313-0.115 0.77-0.063 1.102-0.138zM5.659 8.779c0.322-0.724-0.089-0.26-0.125-0.453 0.050 0.643-0.495 0.886 0.125 0.453zM5.018 10.414c-0.401 0.513-0.185 0.622-0.227 0.971 0.145-0.446 0.171-0.713 0.227-0.971z"></path></svg>',
            cost_hour: 0.002,
            default: false,
            id: '333a85d7-c9a5-4d30-828c-799668f3e529',
            status: 'published',
            date_created: '2022-10-19T18:36:51.008Z',
            date_updated: '2022-10-27T21:18:34.465Z',
          },
        ],
      },
    },
  },
];

export const DumpTestimonials: ST_Testimonial[] = [
  {
    id: '45',
    collection: 'ST_Testimonials',
    item: {
      client_name: 'Vladmir Putin',
      client_post: 'Telegram messenger, CEO',
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          review_text:
            'I am Brazilian, and after testing several and several sites, both Brazilian and foreign, I arrived at the icloudeng and stayed, in the others it was not 1-2 months, bad service, instabilities and disproportionate price to what was offered, when trying the Serverspace, I fell in love, because it meets my needs without any problems and with practicality my needs.',
        },
      ],
      id: '08e56e47-76fc-4f69-8980-631a91932f0d',
      status: 'published',
      date_created: '2022-10-28T10:31:43.669Z',
      date_updated: '2022-10-28T11:19:44.418Z',
    },
  },
  {
    id: '46',
    collection: 'ST_Testimonials',
    item: {
      client_name: 'Joe Biden',
      client_post: 'Tesla LTD, Dir cab',
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          review_text:
            'I use Icloudeng because provides very stable and fast servers. Also, your site provides many features to the user, and I can build a new server or delete the previous server whenever I want. Fully automatic, as well as full support. Thanks for the importance you give to the user.',
        },
      ],
      id: 'd63e9c0f-af1a-4c54-9008-672589be785a',
      status: 'published',
      date_created: '2022-10-28T10:31:43.743Z',
    },
  },
  {
    id: '47',
    collection: 'ST_Testimonials',
    item: {
      client_name: 'Emmanuel Macron',
      client_post: 'RFI, Assistant',
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          review_text:
            'Icloudeng has provided me Remote Desktop Services at a much cheaper price as compared to other providers in the market like AWS, Google Cloud or Microsoft Azure. Customer support is also helpful at most of the occasions.',
        },
      ],
      id: '7c1b9035-030f-4a15-a4af-1a8fa1fd6c2f',
      status: 'published',
      date_created: '2022-10-28T10:31:43.815Z',
    },
  },
];

export const DumpGallery: ST_Gallery[] = [
  {
    id: '48',
    collection: 'ST_Gallery',
    item: {
      image: {
        id: '13d96468-bb41-49b8-a3c7-5670a0a3cb2f',
        type: 'image/webp',
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      id: 'abb9a478-c3e1-448d-8e8f-b4cc53e51631',
      status: 'published',
      date_created: '2022-10-28T11:40:54.609Z',
    },
  },
  {
    id: '49',
    collection: 'ST_Gallery',
    item: {
      image: {
        id: '3ebc59df-88e7-4d15-8a4c-61ba235ee004',
        type: 'image/jpeg',
        src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      },
      id: '0e5e660c-6cc4-4032-9081-fa6a80a7ec6d',
      status: 'published',
      date_created: '2022-10-28T11:40:54.653Z',
    },
  },
  {
    id: '50',
    collection: 'ST_Gallery',
    item: {
      image: {
        id: 'd7c60e1f-36aa-4a06-a482-3999382eea93',
        type: 'image/jpeg',
        src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
      },
      id: '0a1dacdc-f431-4d39-9863-8ba867a43404',
      status: 'published',
      date_created: '2022-10-28T11:40:54.692Z',
    },
  },
];

export const DumpGroupedLogos: ST_GroupedLogo[] = [
  {
    id: '51',
    collection: 'ST_GroupedLogos',
    item: {
      name: 'Monstroid2',
      image: {
        id: 'cf5d5910-9576-4e19-bd87-184d817b8c18',
        type: 'image/webp',
        width: 512,
        height: 512,
        src: require('~/images/box.png').default.src,
      },
      id: 'bea65272-8f3c-4d5b-9f41-1f7bcc79b9a0',
      status: 'published',
      date_created: '2022-10-28T16:57:17.935Z',
    },
  },
  {
    id: '52',
    collection: 'ST_GroupedLogos',
    item: {
      name: 'Jetpack',
      image: {
        id: 'cbb689db-b488-4032-90d3-6a713a7bea80',
        type: 'image/webp',
        width: 512,
        height: 512,
        src: require('~/images/fingerprint.png').default.src,
      },
      id: '0c06b83c-690f-4aa2-a5b8-d72cdc1e39be',
      status: 'published',
      date_created: '2022-10-28T16:57:17.978Z',
    },
  },
  {
    id: '53',
    collection: 'ST_GroupedLogos',
    item: {
      name: 'Yoast SEO',
      image: {
        id: 'e68fb95a-9122-4e2c-8bfb-2a8c0825fd84',
        type: 'image/webp',
        width: 512,
        height: 512,
        src: require('~/images/gitlab.png').default.src,
      },
      id: '0246913c-3a72-4f49-b18c-f66b2834e07c',
      status: 'published',
      date_created: '2022-10-28T16:57:18.018Z',
    },
  },
  {
    id: '54',
    collection: 'ST_GroupedLogos',
    item: {
      name: 'Disqus Comments',
      image: {
        id: '65235211-12af-4646-87c7-40700fc8cdb7',
        type: 'image/webp',
        width: 512,
        height: 512,
        src: require('~/images/parabolic.png').default.src,
      },
      id: 'af432c58-d1f5-4792-9b62-0931cc4288ff',
      status: 'published',
      date_created: '2022-10-28T16:57:18.056Z',
    },
  },
  {
    id: '55',
    collection: 'ST_GroupedLogos',
    item: {
      name: 'WooCommerce',
      image: {
        id: '75e5c78a-378e-49d4-a40c-7a65b7ad73b5',
        type: 'image/webp',
        width: 512,
        height: 512,
        src: require('~/images/slack.png').default.src,
      },
      id: '3923981f-cc9d-430e-aafc-cb80add3bed7',
      status: 'published',
      date_created: '2022-10-28T16:57:18.093Z',
    },
  },
  {
    id: '56',
    collection: 'ST_GroupedLogos',
    item: {
      image: {
        id: '06f63584-06f6-4c74-8e43-40f6d34dfdc4',
        type: 'image/webp',
        width: 1024,
        height: 390,
        src: require('~/images/surabooks.webp').default.src,
      },
      id: '6c8ff39a-e952-4955-815f-f9dbbccd4c0f',
      status: 'published',
      date_created: '2022-10-28T17:53:16.124Z',
    },
  },
  {
    id: '57',
    collection: 'ST_GroupedLogos',
    item: {
      image: {
        id: '7945db4d-0a0b-4494-8ea1-2590f08eed8a',
        type: 'image/webp',
        width: 175,
        height: 32,
        src: require('~/images/ecom.webp').default.src,
      },
      id: '0438269d-3b2d-4d82-82a7-9d07a452fa6a',
      status: 'published',
      date_created: '2022-10-28T17:53:16.163Z',
    },
  },
  {
    id: '58',
    collection: 'ST_GroupedLogos',
    item: {
      image: {
        id: '7e5e17d9-9048-4b3e-b28f-ea63b46036b1',
        type: 'image/webp',
        width: 535,
        height: 126,
        src: require('~/images/riskapp.webp').default.src,
      },
      id: '3ff4538c-7ccc-4345-9bf1-bd33d063ce69',
      status: 'published',
      date_created: '2022-10-28T17:53:16.201Z',
    },
  },
  {
    id: '59',
    collection: 'ST_GroupedLogos',
    item: {
      image: {
        id: '0607fbfc-fe3c-440e-9ff5-0883e40ead11',
        type: 'image/webp',
        width: 331,
        height: 86,
        src: require('~/images/techsolvo.webp').default.src,
      },
      id: 'd6d119c4-6e79-4e2c-be97-fd0acc3914c5',
      status: 'published',
      date_created: '2022-10-28T17:53:16.239Z',
    },
  },
  {
    id: '60',
    collection: 'ST_GroupedLogos',
    item: {
      image: {
        id: '026d1c29-5b63-4aa9-b34d-713825f5b190',
        type: 'image/webp',
        width: 362,
        height: 87,
        src: require('~/images/itgold.webp').default.src,
      },
      id: 'c74a3606-ceb1-4519-b823-cdc8da2d7086',
      status: 'published',
      date_created: '2022-10-28T17:53:16.275Z',
    },
  },
];

export const DumpBecomePartnerForms: ST_BecomePartnerForm[] = [
  {
    id: '62',
    collection: 'ST_BecomePartnerForms',
    item: {
      id: '18a4ba12-aaf1-41d1-8ddf-068d7725ee47',
      status: 'published',
      date_created: '2022-10-30T20:32:51.078Z',
    },
  },
];

export const DumpCompanyDetails: ST_CompanyDetail[] = [
  {
    id: '64',
    collection: 'ST_CompanyDetails',
    item: {
      id: '3caf1f7a-85e8-463d-824a-cb7a388f3c53',
      status: 'published',
      date_created: '2022-11-01T07:38:03.097Z',
    },
  },
];

export const DumpTimelineRanges: ST_TimelineRange[] = [
  {
    id: '65',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2008',
          time_description:
            'Launched in-house developed cloud platform under the IT-GRAD brand;\nGot the status of a VMware Service Provider Partner.',
        },
      ],
      id: '771cf667-5249-43ff-931b-fe2c3b6beb98',
      status: 'published',
      date_created: '2022-11-01T14:25:08.785Z',
    },
  },
  {
    id: '66',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2009',
          time_description: 'Implemented the NetApp data storage system.',
        },
      ],
      id: '6a0dbfe0-91c9-4763-b7ee-5865d1e83efa',
      status: 'published',
      date_created: '2022-11-01T14:25:08.898Z',
    },
  },
  {
    id: '67',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2016',
          time_description: 'Received the PCI DSS certificate.',
        },
      ],
      id: '55f9707e-f31f-4408-8f91-e006d5da46f8',
      status: 'published',
      date_created: '2022-11-01T14:25:09.009Z',
    },
  },
  {
    id: '68',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '4',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2017',
          time_description:
            'Gained the conformity certificate of ISO/IEC 20000, ISO 9001:2015.',
        },
      ],
      id: 'aa1780e0-bf76-4038-a3eb-ae3e1572f83d',
      status: 'published',
      date_created: '2022-11-01T14:25:09.098Z',
    },
  },
  {
    id: '69',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '5',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2019',
          time_description:
            'Expanded on the international market under Serverspace brand;\nOpened offices and data centers in Belarus, the Netherlands, and Kazakhstan.',
        },
      ],
      id: '3f9e9b06-a5b0-4d1f-ac88-8f66d2823b41',
      status: 'published',
      date_created: '2022-11-01T14:25:09.159Z',
    },
  },
  {
    id: '70',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '6',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2020',
          time_description:
            'Integrated the hyperconverged vStack platform;\nOpened a data center and an office in the USA;\nCreated a data center in Russia',
        },
      ],
      id: '3ed01502-f47e-479c-ac8d-18674521688c',
      status: 'published',
      date_created: '2022-11-01T14:25:09.226Z',
      date_updated: '2022-11-01T16:17:05.354Z',
    },
  },
  {
    id: '71',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '7',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2021',
          time_description:
            'Launched new clusters in New Jersey, Amsterdam, and Moscow.',
        },
      ],
      id: '263a2ab5-7573-4a10-8d59-3aa5e18dcf31',
      status: 'published',
      date_created: '2022-11-01T14:25:09.293Z',
      date_updated: '2022-11-01T16:17:05.418Z',
    },
  },
  {
    id: '72',
    collection: 'ST_TimelineRanges',
    item: {
      translations: [
        {
          id: '8',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          time_title: '2022',
          time_description:
            'Became part of the ITGLOBAL.COM group of companies.\nOpened an office and a data center in Canada.',
        },
      ],
      id: '443068bb-c957-47c7-bd10-4fd697900a3d',
      status: 'published',
      date_created: '2022-11-01T14:25:09.355Z',
      date_updated: '2022-11-01T16:17:05.478Z',
    },
  },
];

export const DumpSideTextImage: ST_SideTextImage[] = [
  {
    id: '74',
    collection: 'ST_SideTextImage',
    item: {
      image: {
        id: '9cfe91ac-8158-4315-a5fd-0206eb9cd0a3',
        src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
      },
      image_svg:
        '<svg width="682" height="378" viewBox="0 0 682 378" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-image show">\n<g clip-path="url(#clip-graph-wl-0)">\n<g clip-path="url(#clip-graph-wl-1)">\n<g clip-path="url(#clip-graph-wl-2)">\n<g clip-path="url(#clip3)">\n<path d="M80.9991 5.50024H42.4141V25" stroke="#DAE1EB"></path>\n<path d="M119.999 5.50024H81.4141V25" stroke="#DAE1EB"></path>\n<path d="M158.999 5.50024H120.414V25" stroke="#DAE1EB"></path>\n<path d="M197.999 5.50024H159.414V25" stroke="#DAE1EB"></path>\n<path d="M236.999 5.50024H198.414V25" stroke="#DAE1EB"></path>\n<path d="M275.999 5.50024H237.414V25" stroke="#DAE1EB"></path>\n<path d="M314.999 5.50024H276.414V25" stroke="#DAE1EB"></path>\n<path d="M353.999 5.50024H315.414V25" stroke="#DAE1EB"></path>\n<path d="M392.999 5.50024H354.414V25" stroke="#DAE1EB"></path>\n<path d="M431.999 5.50024H393.414V25" stroke="#DAE1EB"></path>\n<path d="M470.999 5.50024H432.414V25" stroke="#DAE1EB"></path>\n<path d="M509.999 5.50024H471.414V25" stroke="#DAE1EB"></path>\n<path d="M548.999 5.50024H510.414V25" stroke="#DAE1EB"></path>\n<path d="M587.999 5.50024H549.414V25" stroke="#DAE1EB"></path>\n<path d="M626.999 5.50024H588.414V25" stroke="#DAE1EB"></path>\n<path d="M665.999 5.50024H627.414V25" stroke="#DAE1EB"></path>\n<path d="M704.999 5.50024H666.414V25" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip4)">\n<path d="M80.9991 25.5002H42.4141V45" stroke="#DAE1EB"></path>\n<path d="M119.999 25.5002H81.4141V45" stroke="#DAE1EB"></path>\n<path d="M158.999 25.5002H120.414V45" stroke="#DAE1EB"></path>\n<path d="M197.999 25.5002H159.414V45" stroke="#DAE1EB"></path>\n<path d="M236.999 25.5002H198.414V45" stroke="#DAE1EB"></path>\n<path d="M275.999 25.5002H237.414V45" stroke="#DAE1EB"></path>\n<path d="M314.999 25.5002H276.414V45" stroke="#DAE1EB"></path>\n<path d="M353.999 25.5002H315.414V45" stroke="#DAE1EB"></path>\n<path d="M392.999 25.5002H354.414V45" stroke="#DAE1EB"></path>\n<path d="M431.999 25.5002H393.414V45" stroke="#DAE1EB"></path>\n<path d="M470.999 25.5002H432.414V45" stroke="#DAE1EB"></path>\n<path d="M509.999 25.5002H471.414V45" stroke="#DAE1EB"></path>\n<path d="M548.999 25.5002H510.414V45" stroke="#DAE1EB"></path>\n<path d="M587.999 25.5002H549.414V45" stroke="#DAE1EB"></path>\n<path d="M626.999 25.5002H588.414V45" stroke="#DAE1EB"></path>\n<path d="M665.999 25.5002H627.414V45" stroke="#DAE1EB"></path>\n<path d="M704.999 25.5002H666.414V45" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip5)">\n<path d="M80.9991 45.5002H42.4141V65" stroke="#DAE1EB"></path>\n<path d="M119.999 45.5002H81.4141V65" stroke="#DAE1EB"></path>\n<path d="M158.999 45.5002H120.414V65" stroke="#DAE1EB"></path>\n<path d="M197.999 45.5002H159.414V65" stroke="#DAE1EB"></path>\n<path d="M236.999 45.5002H198.414V65" stroke="#DAE1EB"></path>\n<path d="M275.999 45.5002H237.414V65" stroke="#DAE1EB"></path>\n<path d="M314.999 45.5002H276.414V65" stroke="#DAE1EB"></path>\n<path d="M353.999 45.5002H315.414V65" stroke="#DAE1EB"></path>\n<path d="M392.999 45.5002H354.414V65" stroke="#DAE1EB"></path>\n<path d="M431.999 45.5002H393.414V65" stroke="#DAE1EB"></path>\n<path d="M470.999 45.5002H432.414V65" stroke="#DAE1EB"></path>\n<path d="M509.999 45.5002H471.414V65" stroke="#DAE1EB"></path>\n<path d="M548.999 45.5002H510.414V65" stroke="#DAE1EB"></path>\n<path d="M587.999 45.5002H549.414V65" stroke="#DAE1EB"></path>\n<path d="M626.999 45.5002H588.414V65" stroke="#DAE1EB"></path>\n<path d="M665.999 45.5002H627.414V65" stroke="#DAE1EB"></path>\n<path d="M704.999 45.5002H666.414V65" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip6)">\n<path d="M80.9991 65.5002H42.4141V85" stroke="#DAE1EB"></path>\n<path d="M119.999 65.5002H81.4141V85" stroke="#DAE1EB"></path>\n<path d="M158.999 65.5002H120.414V85" stroke="#DAE1EB"></path>\n<path d="M197.999 65.5002H159.414V85" stroke="#DAE1EB"></path>\n<path d="M236.999 65.5002H198.414V85" stroke="#DAE1EB"></path>\n<path d="M275.999 65.5002H237.414V85" stroke="#DAE1EB"></path>\n<path d="M314.999 65.5002H276.414V85" stroke="#DAE1EB"></path>\n<path d="M353.999 65.5002H315.414V85" stroke="#DAE1EB"></path>\n<path d="M392.999 65.5002H354.414V85" stroke="#DAE1EB"></path>\n<path d="M431.999 65.5002H393.414V85" stroke="#DAE1EB"></path>\n<path d="M470.999 65.5002H432.414V85" stroke="#DAE1EB"></path>\n<path d="M509.999 65.5002H471.414V85" stroke="#DAE1EB"></path>\n<path d="M548.999 65.5002H510.414V85" stroke="#DAE1EB"></path>\n<path d="M587.999 65.5002H549.414V85" stroke="#DAE1EB"></path>\n<path d="M626.999 65.5002H588.414V85" stroke="#DAE1EB"></path>\n<path d="M665.999 65.5002H627.414V85" stroke="#DAE1EB"></path>\n<path d="M704.999 65.5002H666.414V85" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip7)">\n<path d="M80.9991 85.5002H42.4141V105" stroke="#DAE1EB"></path>\n<path d="M119.999 85.5002H81.4141V105" stroke="#DAE1EB"></path>\n<path d="M158.999 85.5002H120.414V105" stroke="#DAE1EB"></path>\n<path d="M197.999 85.5002H159.414V105" stroke="#DAE1EB"></path>\n<path d="M236.999 85.5002H198.414V105" stroke="#DAE1EB"></path>\n<path d="M275.999 85.5002H237.414V105" stroke="#DAE1EB"></path>\n<path d="M314.999 85.5002H276.414V105" stroke="#DAE1EB"></path>\n<path d="M353.999 85.5002H315.414V105" stroke="#DAE1EB"></path>\n<path d="M392.999 85.5002H354.414V105" stroke="#DAE1EB"></path>\n<path d="M431.999 85.5002H393.414V105" stroke="#DAE1EB"></path>\n<path d="M470.999 85.5002H432.414V105" stroke="#DAE1EB"></path>\n<path d="M509.999 85.5002H471.414V105" stroke="#DAE1EB"></path>\n<path d="M548.999 85.5002H510.414V105" stroke="#DAE1EB"></path>\n<path d="M587.999 85.5002H549.414V105" stroke="#DAE1EB"></path>\n<path d="M626.999 85.5002H588.414V105" stroke="#DAE1EB"></path>\n<path d="M665.999 85.5002H627.414V105" stroke="#DAE1EB"></path>\n<path d="M704.999 85.5002H666.414V105" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip8)">\n<path d="M80.9991 105.5H42.4141V125" stroke="#DAE1EB"></path>\n<path d="M119.999 105.5H81.4141V125" stroke="#DAE1EB"></path>\n<path d="M158.999 105.5H120.414V125" stroke="#DAE1EB"></path>\n<path d="M197.999 105.5H159.414V125" stroke="#DAE1EB"></path>\n<path d="M236.999 105.5H198.414V125" stroke="#DAE1EB"></path>\n<path d="M275.999 105.5H237.414V125" stroke="#DAE1EB"></path>\n<path d="M314.999 105.5H276.414V125" stroke="#DAE1EB"></path>\n<path d="M353.999 105.5H315.414V125" stroke="#DAE1EB"></path>\n<path d="M392.999 105.5H354.414V125" stroke="#DAE1EB"></path>\n<path d="M431.999 105.5H393.414V125" stroke="#DAE1EB"></path>\n<path d="M470.999 105.5H432.414V125" stroke="#DAE1EB"></path>\n<path d="M509.999 105.5H471.414V125" stroke="#DAE1EB"></path>\n<path d="M548.999 105.5H510.414V125" stroke="#DAE1EB"></path>\n<path d="M587.999 105.5H549.414V125" stroke="#DAE1EB"></path>\n<path d="M626.999 105.5H588.414V125" stroke="#DAE1EB"></path>\n<path d="M665.999 105.5H627.414V125" stroke="#DAE1EB"></path>\n<path d="M704.999 105.5H666.414V125" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip9)">\n<path d="M80.9991 125.5H42.4141V145" stroke="#DAE1EB"></path>\n<path d="M119.999 125.5H81.4141V145" stroke="#DAE1EB"></path>\n<path d="M158.999 125.5H120.414V145" stroke="#DAE1EB"></path>\n<path d="M197.999 125.5H159.414V145" stroke="#DAE1EB"></path>\n<path d="M236.999 125.5H198.414V145" stroke="#DAE1EB"></path>\n<path d="M275.999 125.5H237.414V145" stroke="#DAE1EB"></path>\n<path d="M314.999 125.5H276.414V145" stroke="#DAE1EB"></path>\n<path d="M353.999 125.5H315.414V145" stroke="#DAE1EB"></path>\n<path d="M392.999 125.5H354.414V145" stroke="#DAE1EB"></path>\n<path d="M431.999 125.5H393.414V145" stroke="#DAE1EB"></path>\n<path d="M470.999 125.5H432.414V145" stroke="#DAE1EB"></path>\n<path d="M509.999 125.5H471.414V145" stroke="#DAE1EB"></path>\n<path d="M548.999 125.5H510.414V145" stroke="#DAE1EB"></path>\n<path d="M587.999 125.5H549.414V145" stroke="#DAE1EB"></path>\n<path d="M626.999 125.5H588.414V145" stroke="#DAE1EB"></path>\n<path d="M665.999 125.5H627.414V145" stroke="#DAE1EB"></path>\n<path d="M704.999 125.5H666.414V145" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-10)">\n<path d="M80.9991 145.5H42.4141V165" stroke="#DAE1EB"></path>\n<path d="M119.999 145.5H81.4141V165" stroke="#DAE1EB"></path>\n<path d="M158.999 145.5H120.414V165" stroke="#DAE1EB"></path>\n<path d="M197.999 145.5H159.414V165" stroke="#DAE1EB"></path>\n<path d="M236.999 145.5H198.414V165" stroke="#DAE1EB"></path>\n<path d="M275.999 145.5H237.414V165" stroke="#DAE1EB"></path>\n<path d="M314.999 145.5H276.414V165" stroke="#DAE1EB"></path>\n<path d="M353.999 145.5H315.414V165" stroke="#DAE1EB"></path>\n<path d="M392.999 145.5H354.414V165" stroke="#DAE1EB"></path>\n<path d="M431.999 145.5H393.414V165" stroke="#DAE1EB"></path>\n<path d="M470.999 145.5H432.414V165" stroke="#DAE1EB"></path>\n<path d="M509.999 145.5H471.414V165" stroke="#DAE1EB"></path>\n<path d="M548.999 145.5H510.414V165" stroke="#DAE1EB"></path>\n<path d="M587.999 145.5H549.414V165" stroke="#DAE1EB"></path>\n<path d="M626.999 145.5H588.414V165" stroke="#DAE1EB"></path>\n<path d="M665.999 145.5H627.414V165" stroke="#DAE1EB"></path>\n<path d="M704.999 145.5H666.414V165" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-11)">\n<path d="M80.9991 165.5H42.4141V185" stroke="#DAE1EB"></path>\n<path d="M119.999 165.5H81.4141V185" stroke="#DAE1EB"></path>\n<path d="M158.999 165.5H120.414V185" stroke="#DAE1EB"></path>\n<path d="M197.999 165.5H159.414V185" stroke="#DAE1EB"></path>\n<path d="M236.999 165.5H198.414V185" stroke="#DAE1EB"></path>\n<path d="M275.999 165.5H237.414V185" stroke="#DAE1EB"></path>\n<path d="M314.999 165.5H276.414V185" stroke="#DAE1EB"></path>\n<path d="M353.999 165.5H315.414V185" stroke="#DAE1EB"></path>\n<path d="M392.999 165.5H354.414V185" stroke="#DAE1EB"></path>\n<path d="M431.999 165.5H393.414V185" stroke="#DAE1EB"></path>\n<path d="M470.999 165.5H432.414V185" stroke="#DAE1EB"></path>\n<path d="M509.999 165.5H471.414V185" stroke="#DAE1EB"></path>\n<path d="M548.999 165.5H510.414V185" stroke="#DAE1EB"></path>\n<path d="M587.999 165.5H549.414V185" stroke="#DAE1EB"></path>\n<path d="M626.999 165.5H588.414V185" stroke="#DAE1EB"></path>\n<path d="M665.999 165.5H627.414V185" stroke="#DAE1EB"></path>\n<path d="M704.999 165.5H666.414V185" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-12)">\n<path d="M80.9991 185.5H42.4141V205" stroke="#DAE1EB"></path>\n<path d="M119.999 185.5H81.4141V205" stroke="#DAE1EB"></path>\n<path d="M158.999 185.5H120.414V205" stroke="#DAE1EB"></path>\n<path d="M197.999 185.5H159.414V205" stroke="#DAE1EB"></path>\n<path d="M236.999 185.5H198.414V205" stroke="#DAE1EB"></path>\n<path d="M275.999 185.5H237.414V205" stroke="#DAE1EB"></path>\n<path d="M314.999 185.5H276.414V205" stroke="#DAE1EB"></path>\n<path d="M353.999 185.5H315.414V205" stroke="#DAE1EB"></path>\n<path d="M392.999 185.5H354.414V205" stroke="#DAE1EB"></path>\n<path d="M431.999 185.5H393.414V205" stroke="#DAE1EB"></path>\n<path d="M470.999 185.5H432.414V205" stroke="#DAE1EB"></path>\n<path d="M509.999 185.5H471.414V205" stroke="#DAE1EB"></path>\n<path d="M548.999 185.5H510.414V205" stroke="#DAE1EB"></path>\n<path d="M587.999 185.5H549.414V205" stroke="#DAE1EB"></path>\n<path d="M626.999 185.5H588.414V205" stroke="#DAE1EB"></path>\n<path d="M665.999 185.5H627.414V205" stroke="#DAE1EB"></path>\n<path d="M704.999 185.5H666.414V205" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-13)">\n<path d="M80.9991 205.5H42.4141V225" stroke="#DAE1EB"></path>\n<path d="M119.999 205.5H81.4141V225" stroke="#DAE1EB"></path>\n<path d="M158.999 205.5H120.414V225" stroke="#DAE1EB"></path>\n<path d="M197.999 205.5H159.414V225" stroke="#DAE1EB"></path>\n<path d="M236.999 205.5H198.414V225" stroke="#DAE1EB"></path>\n<path d="M275.999 205.5H237.414V225" stroke="#DAE1EB"></path>\n<path d="M314.999 205.5H276.414V225" stroke="#DAE1EB"></path>\n<path d="M353.999 205.5H315.414V225" stroke="#DAE1EB"></path>\n<path d="M392.999 205.5H354.414V225" stroke="#DAE1EB"></path>\n<path d="M431.999 205.5H393.414V225" stroke="#DAE1EB"></path>\n<path d="M470.999 205.5H432.414V225" stroke="#DAE1EB"></path>\n<path d="M509.999 205.5H471.414V225" stroke="#DAE1EB"></path>\n<path d="M548.999 205.5H510.414V225" stroke="#DAE1EB"></path>\n<path d="M587.999 205.5H549.414V225" stroke="#DAE1EB"></path>\n<path d="M626.999 205.5H588.414V225" stroke="#DAE1EB"></path>\n<path d="M665.999 205.5H627.414V225" stroke="#DAE1EB"></path>\n<path d="M704.999 205.5H666.414V225" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-14)">\n<path d="M80.9991 225.5H42.4141V245" stroke="#DAE1EB"></path>\n<path d="M119.999 225.5H81.4141V245" stroke="#DAE1EB"></path>\n<path d="M158.999 225.5H120.414V245" stroke="#DAE1EB"></path>\n<path d="M197.999 225.5H159.414V245" stroke="#DAE1EB"></path>\n<path d="M236.999 225.5H198.414V245" stroke="#DAE1EB"></path>\n<path d="M275.999 225.5H237.414V245" stroke="#DAE1EB"></path>\n<path d="M314.999 225.5H276.414V245" stroke="#DAE1EB"></path>\n<path d="M353.999 225.5H315.414V245" stroke="#DAE1EB"></path>\n<path d="M392.999 225.5H354.414V245" stroke="#DAE1EB"></path>\n<path d="M431.999 225.5H393.414V245" stroke="#DAE1EB"></path>\n<path d="M470.999 225.5H432.414V245" stroke="#DAE1EB"></path>\n<path d="M509.999 225.5H471.414V245" stroke="#DAE1EB"></path>\n<path d="M548.999 225.5H510.414V245" stroke="#DAE1EB"></path>\n<path d="M587.999 225.5H549.414V245" stroke="#DAE1EB"></path>\n<path d="M626.999 225.5H588.414V245" stroke="#DAE1EB"></path>\n<path d="M665.999 225.5H627.414V245" stroke="#DAE1EB"></path>\n<path d="M704.999 225.5H666.414V245" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-15)">\n<path d="M80.9991 245.5H42.4141V265" stroke="#DAE1EB"></path>\n<path d="M119.999 245.5H81.4141V265" stroke="#DAE1EB"></path>\n<path d="M158.999 245.5H120.414V265" stroke="#DAE1EB"></path>\n<path d="M197.999 245.5H159.414V265" stroke="#DAE1EB"></path>\n<path d="M236.999 245.5H198.414V265" stroke="#DAE1EB"></path>\n<path d="M275.999 245.5H237.414V265" stroke="#DAE1EB"></path>\n<path d="M314.999 245.5H276.414V265" stroke="#DAE1EB"></path>\n<path d="M353.999 245.5H315.414V265" stroke="#DAE1EB"></path>\n<path d="M392.999 245.5H354.414V265" stroke="#DAE1EB"></path>\n<path d="M431.999 245.5H393.414V265" stroke="#DAE1EB"></path>\n<path d="M470.999 245.5H432.414V265" stroke="#DAE1EB"></path>\n<path d="M509.999 245.5H471.414V265" stroke="#DAE1EB"></path>\n<path d="M548.999 245.5H510.414V265" stroke="#DAE1EB"></path>\n<path d="M587.999 245.5H549.414V265" stroke="#DAE1EB"></path>\n<path d="M626.999 245.5H588.414V265" stroke="#DAE1EB"></path>\n<path d="M665.999 245.5H627.414V265" stroke="#DAE1EB"></path>\n<path d="M704.999 245.5H666.414V265" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-16)">\n<path d="M80.9991 265.5H42.4141V285" stroke="#DAE1EB"></path>\n<path d="M119.999 265.5H81.4141V285" stroke="#DAE1EB"></path>\n<path d="M158.999 265.5H120.414V285" stroke="#DAE1EB"></path>\n<path d="M197.999 265.5H159.414V285" stroke="#DAE1EB"></path>\n<path d="M236.999 265.5H198.414V285" stroke="#DAE1EB"></path>\n<path d="M275.999 265.5H237.414V285" stroke="#DAE1EB"></path>\n<path d="M314.999 265.5H276.414V285" stroke="#DAE1EB"></path>\n<path d="M353.999 265.5H315.414V285" stroke="#DAE1EB"></path>\n<path d="M392.999 265.5H354.414V285" stroke="#DAE1EB"></path>\n<path d="M431.999 265.5H393.414V285" stroke="#DAE1EB"></path>\n<path d="M470.999 265.5H432.414V285" stroke="#DAE1EB"></path>\n<path d="M509.999 265.5H471.414V285" stroke="#DAE1EB"></path>\n<path d="M548.999 265.5H510.414V285" stroke="#DAE1EB"></path>\n<path d="M587.999 265.5H549.414V285" stroke="#DAE1EB"></path>\n<path d="M626.999 265.5H588.414V285" stroke="#DAE1EB"></path>\n<path d="M665.999 265.5H627.414V285" stroke="#DAE1EB"></path>\n<path d="M704.999 265.5H666.414V285" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-17)">\n<path d="M80.9991 285.5H42.4141V305" stroke="#DAE1EB"></path>\n<path d="M119.999 285.5H81.4141V305" stroke="#DAE1EB"></path>\n<path d="M158.999 285.5H120.414V305" stroke="#DAE1EB"></path>\n<path d="M197.999 285.5H159.414V305" stroke="#DAE1EB"></path>\n<path d="M236.999 285.5H198.414V305" stroke="#DAE1EB"></path>\n<path d="M275.999 285.5H237.414V305" stroke="#DAE1EB"></path>\n<path d="M314.999 285.5H276.414V305" stroke="#DAE1EB"></path>\n<path d="M353.999 285.5H315.414V305" stroke="#DAE1EB"></path>\n<path d="M392.999 285.5H354.414V305" stroke="#DAE1EB"></path>\n<path d="M431.999 285.5H393.414V305" stroke="#DAE1EB"></path>\n<path d="M470.999 285.5H432.414V305" stroke="#DAE1EB"></path>\n<path d="M509.999 285.5H471.414V305" stroke="#DAE1EB"></path>\n<path d="M548.999 285.5H510.414V305" stroke="#DAE1EB"></path>\n<path d="M587.999 285.5H549.414V305" stroke="#DAE1EB"></path>\n<path d="M626.999 285.5H588.414V305" stroke="#DAE1EB"></path>\n<path d="M665.999 285.5H627.414V305" stroke="#DAE1EB"></path>\n<path d="M704.999 285.5H666.414V305" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-18)">\n<path d="M80.9991 305.5H42.4141V325" stroke="#DAE1EB"></path>\n<path d="M119.999 305.5H81.4141V325" stroke="#DAE1EB"></path>\n<path d="M158.999 305.5H120.414V325" stroke="#DAE1EB"></path>\n<path d="M197.999 305.5H159.414V325" stroke="#DAE1EB"></path>\n<path d="M236.999 305.5H198.414V325" stroke="#DAE1EB"></path>\n<path d="M275.999 305.5H237.414V325" stroke="#DAE1EB"></path>\n<path d="M314.999 305.5H276.414V325" stroke="#DAE1EB"></path>\n<path d="M353.999 305.5H315.414V325" stroke="#DAE1EB"></path>\n<path d="M392.999 305.5H354.414V325" stroke="#DAE1EB"></path>\n<path d="M431.999 305.5H393.414V325" stroke="#DAE1EB"></path>\n<path d="M470.999 305.5H432.414V325" stroke="#DAE1EB"></path>\n<path d="M509.999 305.5H471.414V325" stroke="#DAE1EB"></path>\n<path d="M548.999 305.5H510.414V325" stroke="#DAE1EB"></path>\n<path d="M587.999 305.5H549.414V325" stroke="#DAE1EB"></path>\n<path d="M626.999 305.5H588.414V325" stroke="#DAE1EB"></path>\n<path d="M665.999 305.5H627.414V325" stroke="#DAE1EB"></path>\n<path d="M704.999 305.5H666.414V325" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-19)">\n<path d="M80.9991 325.5H42.4141V345" stroke="#DAE1EB"></path>\n<path d="M119.999 325.5H81.4141V345" stroke="#DAE1EB"></path>\n<path d="M158.999 325.5H120.414V345" stroke="#DAE1EB"></path>\n<path d="M197.999 325.5H159.414V345" stroke="#DAE1EB"></path>\n<path d="M236.999 325.5H198.414V345" stroke="#DAE1EB"></path>\n<path d="M275.999 325.5H237.414V345" stroke="#DAE1EB"></path>\n<path d="M314.999 325.5H276.414V345" stroke="#DAE1EB"></path>\n<path d="M353.999 325.5H315.414V345" stroke="#DAE1EB"></path>\n<path d="M392.999 325.5H354.414V345" stroke="#DAE1EB"></path>\n<path d="M431.999 325.5H393.414V345" stroke="#DAE1EB"></path>\n<path d="M470.999 325.5H432.414V345" stroke="#DAE1EB"></path>\n<path d="M509.999 325.5H471.414V345" stroke="#DAE1EB"></path>\n<path d="M548.999 325.5H510.414V345" stroke="#DAE1EB"></path>\n<path d="M587.999 325.5H549.414V345" stroke="#DAE1EB"></path>\n<path d="M626.999 325.5H588.414V345" stroke="#DAE1EB"></path>\n<path d="M665.999 325.5H627.414V345" stroke="#DAE1EB"></path>\n<path d="M704.999 325.5H666.414V345" stroke="#DAE1EB"></path>\n</g>\n<g clip-path="url(#clip-graph-wl-20)">\n<path d="M80.9991 345.5H42.4141V365" stroke="#DAE1EB"></path>\n<path d="M119.999 345.5H81.4141V365" stroke="#DAE1EB"></path>\n<path d="M158.999 345.5H120.414V365" stroke="#DAE1EB"></path>\n<path d="M197.999 345.5H159.414V365" stroke="#DAE1EB"></path>\n<path d="M236.999 345.5H198.414V365" stroke="#DAE1EB"></path>\n<path d="M275.999 345.5H237.414V365" stroke="#DAE1EB"></path>\n<path d="M314.999 345.5H276.414V365" stroke="#DAE1EB"></path>\n<path d="M353.999 345.5H315.414V365" stroke="#DAE1EB"></path>\n<path d="M392.999 345.5H354.414V365" stroke="#DAE1EB"></path>\n<path d="M431.999 345.5H393.414V365" stroke="#DAE1EB"></path>\n<path d="M470.999 345.5H432.414V365" stroke="#DAE1EB"></path>\n<path d="M509.999 345.5H471.414V365" stroke="#DAE1EB"></path>\n<path d="M548.999 345.5H510.414V365" stroke="#DAE1EB"></path>\n<path d="M587.999 345.5H549.414V365" stroke="#DAE1EB"></path>\n<path d="M626.999 345.5H588.414V365" stroke="#DAE1EB"></path>\n<path d="M665.999 345.5H627.414V365" stroke="#DAE1EB"></path>\n<path d="M704.999 345.5H666.414V365" stroke="#DAE1EB"></path>\n</g>\n</g>\n<line x1="42" y1="345.5" x2="706" y2="345.5" stroke="#DAE1EB"></line>\n<g class="animate-element up show" data-animation-delay="1.1s" style="animation-delay: 1.1s;">\n    <g clip-path="url(#clip-graph-wl-21)">\n        <path d="M33.4992 246.5L32.9297 245.505L159.946 227.669C187.75 223.764 214.868 215.969 240.501 204.512L299.989 177.926C345.31 157.671 396.972 156.979 442.819 176.013C502.786 200.911 571.526 191.474 622.565 151.337L708.69 83.6074L709.308 84.3935L708.964 84.6643L708.999 389H33.4992V246.5Z" fill="url(#paint0_linear)" fill-opacity="0.5"></path>\n    </g>\n</g>\n<path class="animate-line fast show" d="M33 246L160.016 228.164C187.867 224.253 215.03 216.445 240.706 204.969L300.194 178.382C345.389 158.183 396.908 157.493 442.628 176.475V176.475C502.762 201.442 571.693 191.979 622.875 151.73L709 84.0005" stroke="#0044FF"></path>\n\n    <g class="animate-element yellow-graph up small show" data-animation-delay="1.1s" style="animation-delay: 1.1s;">\n        <path d="M676.5 190.5H275.5L676.5 114.5V190.5Z" fill="url(#paint1_linear)" fill-opacity="0.35"></path>\n        <path d="M275.5 190.5L676.5 114.5" stroke="#FDC201" stroke-width="2" stroke-linecap="round" stroke-dasharray="0.1 15"></path>\n    </g>\n    <g class="animate-element blue-graph down small show" data-animation-delay="1.1s" style="animation-delay: 1.1s;">\n        <path d="M888 211.508C792.009 215.827 779.354 132.594 716.652 147.546C667.972 159.093 613.82 264.338 547.812 274.14C454.443 287.929 414.313 218.319 354.461 193.814C313.534 177.035 301.563 192.236 241.369 236.095C150.394 302.383 132.153 223.801 94.1898 223.801C1.16254 223.801 69.679 136 -14 136V346.574H888V211.508Z" fill="url(#paint2_linear)" fill-opacity="0.25"></path>\n    </g>\n</g>\n</g>\n<path d="M267.483 369.368H271.119V371H264.675V369.776L267.123 367.64C268.027 366.84 268.599 366.304 268.839 366.032C269.079 365.76 269.199 365.476 269.199 365.18C269.199 364.876 269.087 364.62 268.863 364.412C268.647 364.196 268.331 364.088 267.915 364.088C267.099 364.088 266.623 364.532 266.487 365.42H264.759C264.815 364.516 265.139 363.796 265.731 363.26C266.331 362.724 267.083 362.456 267.987 362.456C268.883 362.456 269.599 362.712 270.135 363.224C270.671 363.728 270.939 364.352 270.939 365.096C270.939 365.28 270.915 365.46 270.867 365.636C270.827 365.804 270.783 365.956 270.735 366.092C270.695 366.22 270.603 366.376 270.459 366.56C270.315 366.736 270.203 366.876 270.123 366.98C270.051 367.076 269.899 367.232 269.667 367.448C269.435 367.664 269.267 367.82 269.163 367.916C269.059 368.004 268.851 368.184 268.539 368.456L267.507 369.356L267.483 369.368ZM272.961 363.632C273.601 362.848 274.485 362.456 275.613 362.456C276.741 362.456 277.625 362.848 278.265 363.632C278.905 364.408 279.225 365.464 279.225 366.8C279.225 368.136 278.905 369.196 278.265 369.98C277.625 370.756 276.741 371.144 275.613 371.144C274.485 371.144 273.601 370.756 272.961 369.98C272.321 369.196 272.001 368.136 272.001 366.8C272.001 365.464 272.321 364.408 272.961 363.632ZM275.613 369.512C276.861 369.512 277.485 368.608 277.485 366.8C277.485 364.992 276.861 364.088 275.613 364.088C274.357 364.088 273.729 364.992 273.729 366.8C273.729 368.608 274.357 369.512 275.613 369.512ZM282.858 369.368H286.494V371H280.05V369.776L282.498 367.64C283.402 366.84 283.974 366.304 284.214 366.032C284.454 365.76 284.574 365.476 284.574 365.18C284.574 364.876 284.462 364.62 284.238 364.412C284.022 364.196 283.706 364.088 283.29 364.088C282.474 364.088 281.998 364.532 281.862 365.42H280.134C280.19 364.516 280.514 363.796 281.106 363.26C281.706 362.724 282.458 362.456 283.362 362.456C284.258 362.456 284.974 362.712 285.51 363.224C286.046 363.728 286.314 364.352 286.314 365.096C286.314 365.28 286.29 365.46 286.242 365.636C286.202 365.804 286.158 365.956 286.11 366.092C286.07 366.22 285.978 366.376 285.834 366.56C285.69 366.736 285.578 366.876 285.498 366.98C285.426 367.076 285.274 367.232 285.042 367.448C284.81 367.664 284.642 367.82 284.538 367.916C284.434 368.004 284.226 368.184 283.914 368.456L282.882 369.356L282.858 369.368ZM290.097 362.6H290.877V371H289.161V364.592L287.277 365.384V363.692L290.097 362.6Z" fill="#1D2330"></path>\n<path d="M654.729 369.368H658.365V371H651.921V369.776L654.369 367.64C655.273 366.84 655.845 366.304 656.085 366.032C656.325 365.76 656.445 365.476 656.445 365.18C656.445 364.876 656.333 364.62 656.109 364.412C655.893 364.196 655.577 364.088 655.161 364.088C654.345 364.088 653.869 364.532 653.733 365.42H652.005C652.061 364.516 652.385 363.796 652.977 363.26C653.577 362.724 654.329 362.456 655.233 362.456C656.129 362.456 656.845 362.712 657.381 363.224C657.917 363.728 658.185 364.352 658.185 365.096C658.185 365.28 658.161 365.46 658.113 365.636C658.073 365.804 658.029 365.956 657.981 366.092C657.941 366.22 657.849 366.376 657.705 366.56C657.561 366.736 657.449 366.876 657.369 366.98C657.297 367.076 657.145 367.232 656.913 367.448C656.681 367.664 656.513 367.82 656.409 367.916C656.305 368.004 656.097 368.184 655.785 368.456L654.753 369.356L654.729 369.368ZM660.207 363.632C660.847 362.848 661.731 362.456 662.859 362.456C663.987 362.456 664.871 362.848 665.511 363.632C666.151 364.408 666.471 365.464 666.471 366.8C666.471 368.136 666.151 369.196 665.511 369.98C664.871 370.756 663.987 371.144 662.859 371.144C661.731 371.144 660.847 370.756 660.207 369.98C659.567 369.196 659.247 368.136 659.247 366.8C659.247 365.464 659.567 364.408 660.207 363.632ZM662.859 369.512C664.107 369.512 664.731 368.608 664.731 366.8C664.731 364.992 664.107 364.088 662.859 364.088C661.603 364.088 660.975 364.992 660.975 366.8C660.975 368.608 661.603 369.512 662.859 369.512ZM670.104 369.368H673.74V371H667.296V369.776L669.744 367.64C670.648 366.84 671.22 366.304 671.46 366.032C671.7 365.76 671.82 365.476 671.82 365.18C671.82 364.876 671.708 364.62 671.484 364.412C671.268 364.196 670.952 364.088 670.536 364.088C669.72 364.088 669.244 364.532 669.108 365.42H667.38C667.436 364.516 667.76 363.796 668.352 363.26C668.952 362.724 669.704 362.456 670.608 362.456C671.504 362.456 672.22 362.712 672.756 363.224C673.292 363.728 673.56 364.352 673.56 365.096C673.56 365.28 673.536 365.46 673.488 365.636C673.448 365.804 673.404 365.956 673.356 366.092C673.316 366.22 673.224 366.376 673.08 366.56C672.936 366.736 672.824 366.876 672.744 366.98C672.672 367.076 672.52 367.232 672.288 367.448C672.056 367.664 671.888 367.82 671.784 367.916C671.68 368.004 671.472 368.184 671.16 368.456L670.128 369.356L670.104 369.368ZM677.452 369.368H681.088V371H674.644V369.776L677.092 367.64C677.996 366.84 678.568 366.304 678.808 366.032C679.048 365.76 679.168 365.476 679.168 365.18C679.168 364.876 679.056 364.62 678.832 364.412C678.616 364.196 678.3 364.088 677.884 364.088C677.068 364.088 676.592 364.532 676.456 365.42H674.728C674.784 364.516 675.108 363.796 675.7 363.26C676.3 362.724 677.052 362.456 677.956 362.456C678.852 362.456 679.568 362.712 680.104 363.224C680.64 363.728 680.908 364.352 680.908 365.096C680.908 365.28 680.884 365.46 680.836 365.636C680.796 365.804 680.752 365.956 680.704 366.092C680.664 366.22 680.572 366.376 680.428 366.56C680.284 366.736 680.172 366.876 680.092 366.98C680.02 367.076 679.868 367.232 679.636 367.448C679.404 367.664 679.236 367.82 679.132 367.916C679.028 368.004 678.82 368.184 678.508 368.456L677.476 369.356L677.452 369.368Z" fill="#1D2330"></path>\n<path d="M357.635 366.8C357.635 368.112 357.179 369.184 356.267 370.016L357.635 371.84L356.867 372.416L355.487 370.58C354.839 370.948 354.111 371.132 353.303 371.132C352.079 371.132 351.051 370.72 350.219 369.896C349.387 369.064 348.971 368.032 348.971 366.8C348.971 365.568 349.387 364.54 350.219 363.716C351.059 362.884 352.091 362.468 353.315 362.468C354.539 362.468 355.563 362.884 356.387 363.716C357.219 364.54 357.635 365.568 357.635 366.8ZM353.303 370.184C354.247 370.184 355.035 369.864 355.667 369.224C356.307 368.576 356.627 367.768 356.627 366.8C356.627 365.832 356.307 365.028 355.667 364.388C355.035 363.74 354.247 363.416 353.303 363.416C352.367 363.416 351.579 363.74 350.939 364.388C350.299 365.036 349.979 365.84 349.979 366.8C349.979 367.76 350.299 368.564 350.939 369.212C351.579 369.86 352.367 370.184 353.303 370.184ZM361.21 362.6H361.666V371H360.67V363.764L358.738 364.544V363.56L361.21 362.6Z" fill="#1D2330"></path>\n<path d="M434.653 366.8C434.653 368.112 434.197 369.184 433.285 370.016L434.653 371.84L433.885 372.416L432.505 370.58C431.857 370.948 431.129 371.132 430.321 371.132C429.097 371.132 428.069 370.72 427.237 369.896C426.405 369.064 425.989 368.032 425.989 366.8C425.989 365.568 426.405 364.54 427.237 363.716C428.077 362.884 429.109 362.468 430.333 362.468C431.557 362.468 432.581 362.884 433.405 363.716C434.237 364.54 434.653 365.568 434.653 366.8ZM430.321 370.184C431.265 370.184 432.053 369.864 432.685 369.224C433.325 368.576 433.645 367.768 433.645 366.8C433.645 365.832 433.325 365.028 432.685 364.388C432.053 363.74 431.265 363.416 430.321 363.416C429.385 363.416 428.597 363.74 427.957 364.388C427.317 365.036 426.997 365.84 426.997 366.8C426.997 367.76 427.317 368.564 427.957 369.212C428.597 369.86 429.385 370.184 430.321 370.184ZM442.176 370.04V371H435.876V370.28L438.312 368.156C439.44 367.172 440.16 366.5 440.472 366.14C440.792 365.78 440.952 365.396 440.952 364.988C440.952 364.524 440.78 364.148 440.436 363.86C440.092 363.564 439.632 363.416 439.056 363.416C438.48 363.416 438.016 363.572 437.664 363.884C437.312 364.188 437.076 364.62 436.956 365.18H435.948C436.068 364.348 436.412 363.688 436.98 363.2C437.548 362.712 438.256 362.468 439.104 362.468C439.952 362.468 440.636 362.704 441.156 363.176C441.684 363.648 441.948 364.24 441.948 364.952C441.948 365.528 441.756 366.048 441.372 366.512C440.996 366.968 440.248 367.68 439.128 368.648L437.52 370.04H442.176Z" fill="#1D2330"></path>\n<path d="M44.653 366.8C44.653 368.112 44.197 369.184 43.285 370.016L44.653 371.84L43.885 372.416L42.505 370.58C41.857 370.948 41.129 371.132 40.321 371.132C39.097 371.132 38.069 370.72 37.237 369.896C36.405 369.064 35.989 368.032 35.989 366.8C35.989 365.568 36.405 364.54 37.237 363.716C38.077 362.884 39.109 362.468 40.333 362.468C41.557 362.468 42.581 362.884 43.405 363.716C44.237 364.54 44.653 365.568 44.653 366.8ZM40.321 370.184C41.265 370.184 42.053 369.864 42.685 369.224C43.325 368.576 43.645 367.768 43.645 366.8C43.645 365.832 43.325 365.028 42.685 364.388C42.053 363.74 41.265 363.416 40.321 363.416C39.385 363.416 38.597 363.74 37.957 364.388C37.317 365.036 36.997 365.84 36.997 366.8C36.997 367.76 37.317 368.564 37.957 369.212C38.597 369.86 39.385 370.184 40.321 370.184ZM52.1757 370.04V371H45.8757V370.28L48.3117 368.156C49.4397 367.172 50.1597 366.5 50.4717 366.14C50.7917 365.78 50.9517 365.396 50.9517 364.988C50.9517 364.524 50.7797 364.148 50.4357 363.86C50.0917 363.564 49.6317 363.416 49.0557 363.416C48.4797 363.416 48.0157 363.572 47.6637 363.884C47.3117 364.188 47.0757 364.62 46.9557 365.18H45.9477C46.0677 364.348 46.4117 363.688 46.9797 363.2C47.5477 362.712 48.2557 362.468 49.1037 362.468C49.9517 362.468 50.6357 362.704 51.1557 363.176C51.6837 363.648 51.9477 364.24 51.9477 364.952C51.9477 365.528 51.7557 366.048 51.3717 366.512C50.9957 366.968 50.2477 367.68 49.1277 368.648L47.5197 370.04H52.1757Z" fill="#1D2330"></path>\n<path d="M2.95813 301.6H3.41413V310H2.41813V302.764L0.486125 303.544V302.56L2.95813 301.6ZM8.55266 301.468C9.62466 301.468 10.4567 301.848 11.0487 302.608C11.6407 303.36 11.9367 304.424 11.9367 305.8C11.9367 307.176 11.6407 308.244 11.0487 309.004C10.4567 309.756 9.62466 310.132 8.55266 310.132C7.48866 310.132 6.65666 309.756 6.05666 309.004C5.46466 308.252 5.16866 307.184 5.16866 305.8C5.16866 304.416 5.46466 303.348 6.05666 302.596C6.65666 301.844 7.48866 301.468 8.55266 301.468ZM6.80066 308.368C7.22466 308.912 7.80866 309.184 8.55266 309.184C9.29666 309.184 9.87666 308.912 10.2927 308.368C10.7167 307.816 10.9287 306.96 10.9287 305.8C10.9287 304.64 10.7167 303.788 10.2927 303.244C9.87666 302.692 9.29666 302.416 8.55266 302.416C7.80866 302.416 7.22466 302.692 6.80066 303.244C6.38466 303.788 6.17666 304.64 6.17666 305.8C6.17666 306.96 6.38466 307.816 6.80066 308.368ZM16.6386 301.468C17.7106 301.468 18.5426 301.848 19.1346 302.608C19.7266 303.36 20.0226 304.424 20.0226 305.8C20.0226 307.176 19.7266 308.244 19.1346 309.004C18.5426 309.756 17.7106 310.132 16.6386 310.132C15.5746 310.132 14.7426 309.756 14.1426 309.004C13.5506 308.252 13.2546 307.184 13.2546 305.8C13.2546 304.416 13.5506 303.348 14.1426 302.596C14.7426 301.844 15.5746 301.468 16.6386 301.468ZM14.8866 308.368C15.3106 308.912 15.8946 309.184 16.6386 309.184C17.3826 309.184 17.9626 308.912 18.3786 308.368C18.8026 307.816 19.0146 306.96 19.0146 305.8C19.0146 304.64 18.8026 303.788 18.3786 303.244C17.9626 302.692 17.3826 302.416 16.6386 302.416C15.8946 302.416 15.3106 302.692 14.8866 303.244C14.4706 303.788 14.2626 304.64 14.2626 305.8C14.2626 306.96 14.4706 307.816 14.8866 308.368ZM31.5965 310H30.3125L26.3645 305.92V310H25.3685V301.6H26.3645V305.536L30.1805 301.6H31.4525L27.4805 305.716L31.5965 310Z" fill="#1D2330"></path>\n<path d="M6.64953 240.6H7.10553V249H6.10953V241.764L4.17753 242.544V241.56L6.64953 240.6ZM11.0441 240.6H11.5001V249H10.5041V241.764L8.57206 242.544V241.56L11.0441 240.6ZM16.6386 240.468C17.7106 240.468 18.5426 240.848 19.1346 241.608C19.7266 242.36 20.0226 243.424 20.0226 244.8C20.0226 246.176 19.7266 247.244 19.1346 248.004C18.5426 248.756 17.7106 249.132 16.6386 249.132C15.5746 249.132 14.7426 248.756 14.1426 248.004C13.5506 247.252 13.2546 246.184 13.2546 244.8C13.2546 243.416 13.5506 242.348 14.1426 241.596C14.7426 240.844 15.5746 240.468 16.6386 240.468ZM14.8866 247.368C15.3106 247.912 15.8946 248.184 16.6386 248.184C17.3826 248.184 17.9626 247.912 18.3786 247.368C18.8026 246.816 19.0146 245.96 19.0146 244.8C19.0146 243.64 18.8026 242.788 18.3786 242.244C17.9626 241.692 17.3826 241.416 16.6386 241.416C15.8946 241.416 15.3106 241.692 14.8866 242.244C14.4706 242.788 14.2626 243.64 14.2626 244.8C14.2626 245.96 14.4706 246.816 14.8866 247.368ZM31.5965 249H30.3125L26.3645 244.92V249H25.3685V240.6H26.3645V244.536L30.1805 240.6H31.4525L27.4805 244.716L31.5965 249Z" fill="#1D2330"></path>\n<path d="M3.80188 181.6H4.25788V190H3.26188V182.764L1.32988 183.544V182.56L3.80188 181.6ZM12.1444 189.04V190H5.84441V189.28L8.28041 187.156C9.40841 186.172 10.1284 185.5 10.4404 185.14C10.7604 184.78 10.9204 184.396 10.9204 183.988C10.9204 183.524 10.7484 183.148 10.4044 182.86C10.0604 182.564 9.60041 182.416 9.02441 182.416C8.44841 182.416 7.98441 182.572 7.63241 182.884C7.28041 183.188 7.04441 183.62 6.92441 184.18H5.91641C6.03641 183.348 6.38041 182.688 6.94841 182.2C7.51641 181.712 8.22441 181.468 9.07241 181.468C9.92041 181.468 10.6044 181.704 11.1244 182.176C11.6524 182.648 11.9164 183.24 11.9164 183.952C11.9164 184.528 11.7244 185.048 11.3404 185.512C10.9644 185.968 10.2164 186.68 9.09641 187.648L7.48841 189.04H12.1444ZM16.6386 181.468C17.7106 181.468 18.5426 181.848 19.1346 182.608C19.7266 183.36 20.0226 184.424 20.0226 185.8C20.0226 187.176 19.7266 188.244 19.1346 189.004C18.5426 189.756 17.7106 190.132 16.6386 190.132C15.5746 190.132 14.7426 189.756 14.1426 189.004C13.5506 188.252 13.2546 187.184 13.2546 185.8C13.2546 184.416 13.5506 183.348 14.1426 182.596C14.7426 181.844 15.5746 181.468 16.6386 181.468ZM14.8866 188.368C15.3106 188.912 15.8946 189.184 16.6386 189.184C17.3826 189.184 17.9626 188.912 18.3786 188.368C18.8026 187.816 19.0146 186.96 19.0146 185.8C19.0146 184.64 18.8026 183.788 18.3786 183.244C17.9626 182.692 17.3826 182.416 16.6386 182.416C15.8946 182.416 15.3106 182.692 14.8866 183.244C14.4706 183.788 14.2626 184.64 14.2626 185.8C14.2626 186.96 14.4706 187.816 14.8866 188.368ZM31.5965 190H30.3125L26.3645 185.92V190H25.3685V181.6H26.3645V185.536L30.1805 181.6H31.4525L27.4805 185.716L31.5965 190Z" fill="#1D2330"></path>\n<path d="M3.69641 119.6H4.15241V128H3.15641V120.764L1.22441 121.544V120.56L3.69641 119.6ZM10.5389 123.572C11.0109 123.724 11.3749 123.98 11.6309 124.34C11.8949 124.7 12.0269 125.136 12.0269 125.648C12.0269 126.408 11.7509 127.012 11.1989 127.46C10.6469 127.908 9.92294 128.132 9.02694 128.132C8.16294 128.132 7.42694 127.916 6.81894 127.484C6.21894 127.052 5.85894 126.424 5.73894 125.6H6.74694C6.97894 126.656 7.73494 127.184 9.01494 127.184C9.63894 127.184 10.1269 127.04 10.4789 126.752C10.8389 126.464 11.0189 126.072 11.0189 125.576C11.0189 125.128 10.8669 124.772 10.5629 124.508C10.2669 124.236 9.79494 124.1 9.14694 124.1H7.98294V123.224H8.85894C10.1149 123.224 10.7429 122.792 10.7429 121.928C10.7429 121.464 10.5709 121.096 10.2269 120.824C9.89094 120.552 9.44294 120.416 8.88294 120.416C8.35494 120.416 7.92294 120.532 7.58694 120.764C7.25094 120.988 7.01494 121.364 6.87894 121.892H5.87094C6.02294 121.068 6.36694 120.46 6.90294 120.068C7.44694 119.668 8.11494 119.468 8.90694 119.468C9.72294 119.468 10.3989 119.688 10.9349 120.128C11.4789 120.56 11.7509 121.12 11.7509 121.808C11.7509 122.216 11.6469 122.576 11.4389 122.888C11.2309 123.2 10.9309 123.428 10.5389 123.572ZM16.6386 119.468C17.7106 119.468 18.5426 119.848 19.1346 120.608C19.7266 121.36 20.0226 122.424 20.0226 123.8C20.0226 125.176 19.7266 126.244 19.1346 127.004C18.5426 127.756 17.7106 128.132 16.6386 128.132C15.5746 128.132 14.7426 127.756 14.1426 127.004C13.5506 126.252 13.2546 125.184 13.2546 123.8C13.2546 122.416 13.5506 121.348 14.1426 120.596C14.7426 119.844 15.5746 119.468 16.6386 119.468ZM14.8866 126.368C15.3106 126.912 15.8946 127.184 16.6386 127.184C17.3826 127.184 17.9626 126.912 18.3786 126.368C18.8026 125.816 19.0146 124.96 19.0146 123.8C19.0146 122.64 18.8026 121.788 18.3786 121.244C17.9626 120.692 17.3826 120.416 16.6386 120.416C15.8946 120.416 15.3106 120.692 14.8866 121.244C14.4706 121.788 14.2626 122.64 14.2626 123.8C14.2626 124.96 14.4706 125.816 14.8866 126.368ZM31.5965 128H30.3125L26.3645 123.92V128H25.3685V119.6H26.3645V123.536L30.1805 119.6H31.4525L27.4805 123.716L31.5965 128Z" fill="#1D2330"></path>\n<path d="M3.49719 60.6H3.95319V69H2.95719V61.764L1.02519 62.544V61.56L3.49719 60.6ZM12.1517 66.048V66.984H10.9157V69H9.91972V66.984H5.41972V66.048L9.42772 60.6H10.9157V66.048H12.1517ZM6.52372 66.036L9.91972 66.048V61.536H9.82372L6.52372 66.036ZM16.6386 60.468C17.7106 60.468 18.5426 60.848 19.1346 61.608C19.7266 62.36 20.0226 63.424 20.0226 64.8C20.0226 66.176 19.7266 67.244 19.1346 68.004C18.5426 68.756 17.7106 69.132 16.6386 69.132C15.5746 69.132 14.7426 68.756 14.1426 68.004C13.5506 67.252 13.2546 66.184 13.2546 64.8C13.2546 63.416 13.5506 62.348 14.1426 61.596C14.7426 60.844 15.5746 60.468 16.6386 60.468ZM14.8866 67.368C15.3106 67.912 15.8946 68.184 16.6386 68.184C17.3826 68.184 17.9626 67.912 18.3786 67.368C18.8026 66.816 19.0146 65.96 19.0146 64.8C19.0146 63.64 18.8026 62.788 18.3786 62.244C17.9626 61.692 17.3826 61.416 16.6386 61.416C15.8946 61.416 15.3106 61.692 14.8866 62.244C14.4706 62.788 14.2626 63.64 14.2626 64.8C14.2626 65.96 14.4706 66.816 14.8866 67.368ZM31.5965 69H30.3125L26.3645 64.92V69H25.3685V60.6H26.3645V64.536L30.1805 60.6H31.4525L27.4805 64.716L31.5965 69Z" fill="#1D2330"></path>\n<path d="M3.66125 0.599999H4.11725V9H3.12125V1.764L1.18925 2.544V1.56L3.66125 0.599999ZM9.17178 3.456C9.97978 3.456 10.6558 3.708 11.1998 4.212C11.7518 4.716 12.0278 5.384 12.0278 6.216C12.0278 7.064 11.7358 7.764 11.1518 8.316C10.5678 8.86 9.83978 9.132 8.96778 9.132C8.12778 9.132 7.40378 8.904 6.79578 8.448C6.18778 7.992 5.82378 7.348 5.70378 6.516H6.71178C6.83178 7.052 7.09578 7.464 7.50378 7.752C7.91178 8.04 8.39978 8.184 8.96778 8.184C9.55978 8.184 10.0478 7.996 10.4318 7.62C10.8238 7.244 11.0198 6.776 11.0198 6.216C11.0198 5.64 10.8278 5.176 10.4438 4.824C10.0598 4.472 9.57178 4.296 8.97978 4.296C8.07578 4.296 7.41178 4.66 6.98778 5.388H6.02778L7.04778 0.599999H11.6318V1.548H7.80378L7.25178 4.164C7.76378 3.692 8.40378 3.456 9.17178 3.456ZM16.6386 0.468C17.7106 0.468 18.5426 0.848 19.1346 1.608C19.7266 2.36 20.0226 3.424 20.0226 4.8C20.0226 6.176 19.7266 7.244 19.1346 8.004C18.5426 8.756 17.7106 9.132 16.6386 9.132C15.5746 9.132 14.7426 8.756 14.1426 8.004C13.5506 7.252 13.2546 6.184 13.2546 4.8C13.2546 3.416 13.5506 2.348 14.1426 1.596C14.7426 0.844 15.5746 0.468 16.6386 0.468ZM14.8866 7.368C15.3106 7.912 15.8946 8.184 16.6386 8.184C17.3826 8.184 17.9626 7.912 18.3786 7.368C18.8026 6.816 19.0146 5.96 19.0146 4.8C19.0146 3.64 18.8026 2.788 18.3786 2.244C17.9626 1.692 17.3826 1.416 16.6386 1.416C15.8946 1.416 15.3106 1.692 14.8866 2.244C14.4706 2.788 14.2626 3.64 14.2626 4.8C14.2626 5.96 14.4706 6.816 14.8866 7.368ZM31.5965 9H30.3125L26.3645 4.92V9H25.3685V0.599999H26.3645V4.536L30.1805 0.599999H31.4525L27.4805 4.716L31.5965 9Z" fill="#1D2330"></path>\n<path d="M511.659 366.8C511.659 368.112 511.203 369.184 510.291 370.016L511.659 371.84L510.891 372.416L509.511 370.58C508.863 370.948 508.135 371.132 507.327 371.132C506.103 371.132 505.075 370.72 504.243 369.896C503.411 369.064 502.995 368.032 502.995 366.8C502.995 365.568 503.411 364.54 504.243 363.716C505.083 362.884 506.115 362.468 507.339 362.468C508.563 362.468 509.587 362.884 510.411 363.716C511.243 364.54 511.659 365.568 511.659 366.8ZM507.327 370.184C508.271 370.184 509.059 369.864 509.691 369.224C510.331 368.576 510.651 367.768 510.651 366.8C510.651 365.832 510.331 365.028 509.691 364.388C509.059 363.74 508.271 363.416 507.327 363.416C506.391 363.416 505.603 363.74 504.963 364.388C504.323 365.036 504.003 365.84 504.003 366.8C504.003 367.76 504.323 368.564 504.963 369.212C505.603 369.86 506.391 370.184 507.327 370.184ZM517.682 366.572C518.154 366.724 518.518 366.98 518.774 367.34C519.038 367.7 519.17 368.136 519.17 368.648C519.17 369.408 518.894 370.012 518.342 370.46C517.79 370.908 517.066 371.132 516.17 371.132C515.306 371.132 514.57 370.916 513.962 370.484C513.362 370.052 513.002 369.424 512.882 368.6H513.89C514.122 369.656 514.878 370.184 516.158 370.184C516.782 370.184 517.27 370.04 517.622 369.752C517.982 369.464 518.162 369.072 518.162 368.576C518.162 368.128 518.01 367.772 517.706 367.508C517.41 367.236 516.938 367.1 516.29 367.1H515.126V366.224H516.002C517.258 366.224 517.886 365.792 517.886 364.928C517.886 364.464 517.714 364.096 517.37 363.824C517.034 363.552 516.586 363.416 516.026 363.416C515.498 363.416 515.066 363.532 514.73 363.764C514.394 363.988 514.158 364.364 514.022 364.892H513.014C513.166 364.068 513.51 363.46 514.046 363.068C514.59 362.668 515.258 362.468 516.05 362.468C516.866 362.468 517.542 362.688 518.078 363.128C518.622 363.56 518.894 364.12 518.894 364.808C518.894 365.216 518.79 365.576 518.582 365.888C518.374 366.2 518.074 366.428 517.682 366.572Z" fill="#1D2330"></path>\n<path d="M121.659 366.8C121.659 368.112 121.203 369.184 120.291 370.016L121.659 371.84L120.891 372.416L119.511 370.58C118.863 370.948 118.135 371.132 117.327 371.132C116.103 371.132 115.075 370.72 114.243 369.896C113.411 369.064 112.995 368.032 112.995 366.8C112.995 365.568 113.411 364.54 114.243 363.716C115.083 362.884 116.115 362.468 117.339 362.468C118.563 362.468 119.587 362.884 120.411 363.716C121.243 364.54 121.659 365.568 121.659 366.8ZM117.327 370.184C118.271 370.184 119.059 369.864 119.691 369.224C120.331 368.576 120.651 367.768 120.651 366.8C120.651 365.832 120.331 365.028 119.691 364.388C119.059 363.74 118.271 363.416 117.327 363.416C116.391 363.416 115.603 363.74 114.963 364.388C114.323 365.036 114.003 365.84 114.003 366.8C114.003 367.76 114.323 368.564 114.963 369.212C115.603 369.86 116.391 370.184 117.327 370.184ZM127.682 366.572C128.154 366.724 128.518 366.98 128.774 367.34C129.038 367.7 129.17 368.136 129.17 368.648C129.17 369.408 128.894 370.012 128.342 370.46C127.79 370.908 127.066 371.132 126.17 371.132C125.306 371.132 124.57 370.916 123.962 370.484C123.362 370.052 123.002 369.424 122.882 368.6H123.89C124.122 369.656 124.878 370.184 126.158 370.184C126.782 370.184 127.27 370.04 127.622 369.752C127.982 369.464 128.162 369.072 128.162 368.576C128.162 368.128 128.01 367.772 127.706 367.508C127.41 367.236 126.938 367.1 126.29 367.1H125.126V366.224H126.002C127.258 366.224 127.886 365.792 127.886 364.928C127.886 364.464 127.714 364.096 127.37 363.824C127.034 363.552 126.586 363.416 126.026 363.416C125.498 363.416 125.066 363.532 124.73 363.764C124.394 363.988 124.158 364.364 124.022 364.892H123.014C123.166 364.068 123.51 363.46 124.046 363.068C124.59 362.668 125.258 362.468 126.05 362.468C126.866 362.468 127.542 362.688 128.078 363.128C128.622 363.56 128.894 364.12 128.894 364.808C128.894 365.216 128.79 365.576 128.582 365.888C128.374 366.2 128.074 366.428 127.682 366.572Z" fill="#1D2330"></path>\n<path d="M589.559 366.8C589.559 368.112 589.103 369.184 588.191 370.016L589.559 371.84L588.791 372.416L587.411 370.58C586.763 370.948 586.035 371.132 585.227 371.132C584.003 371.132 582.975 370.72 582.143 369.896C581.311 369.064 580.895 368.032 580.895 366.8C580.895 365.568 581.311 364.54 582.143 363.716C582.983 362.884 584.015 362.468 585.239 362.468C586.463 362.468 587.487 362.884 588.311 363.716C589.143 364.54 589.559 365.568 589.559 366.8ZM585.227 370.184C586.171 370.184 586.959 369.864 587.591 369.224C588.231 368.576 588.551 367.768 588.551 366.8C588.551 365.832 588.231 365.028 587.591 364.388C586.959 363.74 586.171 363.416 585.227 363.416C584.291 363.416 583.503 363.74 582.863 364.388C582.223 365.036 581.903 365.84 581.903 366.8C581.903 367.76 582.223 368.564 582.863 369.212C583.503 369.86 584.291 370.184 585.227 370.184ZM597.394 368.048V368.984H596.158V371H595.162V368.984H590.662V368.048L594.67 362.6H596.158V368.048H597.394ZM591.766 368.036L595.162 368.048V363.536H595.066L591.766 368.036Z" fill="#1D2330"></path>\n<path d="M199.559 366.8C199.559 368.112 199.103 369.184 198.191 370.016L199.559 371.84L198.791 372.416L197.411 370.58C196.763 370.948 196.035 371.132 195.227 371.132C194.003 371.132 192.975 370.72 192.143 369.896C191.311 369.064 190.895 368.032 190.895 366.8C190.895 365.568 191.311 364.54 192.143 363.716C192.983 362.884 194.015 362.468 195.239 362.468C196.463 362.468 197.487 362.884 198.311 363.716C199.143 364.54 199.559 365.568 199.559 366.8ZM195.227 370.184C196.171 370.184 196.959 369.864 197.591 369.224C198.231 368.576 198.551 367.768 198.551 366.8C198.551 365.832 198.231 365.028 197.591 364.388C196.959 363.74 196.171 363.416 195.227 363.416C194.291 363.416 193.503 363.74 192.863 364.388C192.223 365.036 191.903 365.84 191.903 366.8C191.903 367.76 192.223 368.564 192.863 369.212C193.503 369.86 194.291 370.184 195.227 370.184ZM207.394 368.048V368.984H206.158V371H205.162V368.984H200.662V368.048L204.67 362.6H206.158V368.048H207.394ZM201.766 368.036L205.162 368.048V363.536H205.066L201.766 368.036Z" fill="#1D2330"></path>\n<g class="graph-lines">\n    <g clip-path="url(#clip-graph-wl-22)">\n        <g class="animate-element fade show" data-animation-delay="1.5s" style="animation-delay: 1.5s;">\n            <path opacity="0.5" d="M276.5 191V421" stroke="#0044FF"></path>\n            <circle cx="276.5" cy="189.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path opacity="0.5" d="M354.5 165V395" stroke="#0044FF"></path>\n            <circle cx="354.5" cy="163.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path opacity="0.5" d="M120.5 235V465" stroke="#0044FF"></path>\n            <circle cx="120.5" cy="233.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path opacity="0.5" d="M432.5 174V404" stroke="#0044FF"></path>\n            <circle cx="432.5" cy="172.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path opacity="0.5" d="M198.5 222V452" stroke="#0044FF"></path>\n            <circle cx="198.5" cy="220.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path opacity="0.5" d="M510.5 191V421" stroke="#0044FF"></path>\n            <circle cx="510.5" cy="189.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path opacity="0.5" d="M588.5 174V404" stroke="#0044FF"></path>\n            <circle cx="588.5" cy="172.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path opacity="0.5" d="M666.5 118V348" stroke="#0044FF"></path>\n            <circle cx="666.5" cy="116.5" r="4" fill="white" stroke="#0044FF"></circle>\n            <path d="M276.5 191V551" stroke="#FDC201"></path>\n            <circle cx="276.5" cy="189.5" r="4" fill="white" stroke="#FDC201"></circle>\n            <path d="M666.5 118V478" stroke="#FDC201"></path>\n            <circle cx="666.5" cy="116.5" r="4" fill="white" stroke="#FDC201"></circle>\n        </g>\n    </g>\n</g>\n\n<defs>\n<linearGradient id="paint0_linear" x1="371.119" y1="-23.4995" x2="371.119" y2="314.5" gradientUnits="userSpaceOnUse">\n<stop stop-color="#3066FC"></stop>\n<stop offset="1" stop-color="#3066FC" stop-opacity="0"></stop>\n</linearGradient>\n<linearGradient id="paint1_linear" x1="476" y1="118.5" x2="476" y2="223" gradientUnits="userSpaceOnUse">\n<stop stop-color="#FDC201"></stop>\n<stop offset="1" stop-color="#FDC201" stop-opacity="0"></stop>\n</linearGradient>\n<linearGradient id="paint2_linear" x1="436.995" y1="166" x2="436.995" y2="367.5" gradientUnits="userSpaceOnUse">\n<stop stop-color="#3168FD"></stop>\n<stop offset="1" stop-color="#3067FD" stop-opacity="0"></stop>\n</linearGradient>\n<clipPath id="clip-graph-wl-0">\n<rect width="667" height="373" fill="white" transform="translate(0 5)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-1">\n<rect width="664" height="341" fill="white" transform="translate(42 5)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-2">\n<rect width="1000" height="500" fill="white" transform="translate(42 5)"></rect>\n</clipPath>\n<clipPath id="clip3">\n<rect width="1248" height="20" fill="white" transform="translate(42 5)"></rect>\n</clipPath>\n<clipPath id="clip4">\n<rect width="1248" height="20" fill="white" transform="translate(42 25)"></rect>\n</clipPath>\n<clipPath id="clip5">\n<rect width="1248" height="20" fill="white" transform="translate(42 45)"></rect>\n</clipPath>\n<clipPath id="clip6">\n<rect width="1248" height="20" fill="white" transform="translate(42 65)"></rect>\n</clipPath>\n<clipPath id="clip7">\n<rect width="1248" height="20" fill="white" transform="translate(42 85)"></rect>\n</clipPath>\n<clipPath id="clip8">\n<rect width="1248" height="20" fill="white" transform="translate(42 105)"></rect>\n</clipPath>\n<clipPath id="clip9">\n<rect width="1248" height="20" fill="white" transform="translate(42 125)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-10">\n<rect width="1248" height="20" fill="white" transform="translate(42 145)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-11">\n<rect width="1248" height="20" fill="white" transform="translate(42 165)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-12">\n<rect width="1248" height="20" fill="white" transform="translate(42 185)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-13">\n<rect width="1248" height="20" fill="white" transform="translate(42 205)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-14">\n<rect width="1248" height="20" fill="white" transform="translate(42 225)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-15">\n<rect width="1248" height="20" fill="white" transform="translate(42 245)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-16">\n<rect width="1248" height="20" fill="white" transform="translate(42 265)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-17">\n<rect width="1248" height="20" fill="white" transform="translate(42 285)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-18">\n<rect width="1248" height="20" fill="white" transform="translate(42 305)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-19">\n<rect width="1248" height="20" fill="white" transform="translate(42 325)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-20">\n<rect width="1248" height="20" fill="white" transform="translate(42 345)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-21">\n<rect width="676.379" height="305.393" fill="white" transform="translate(32.9297 83.6074)"></rect>\n</clipPath>\n<clipPath id="clip-graph-wl-22">\n<rect width="555" height="233" fill="white" transform="translate(116 112)"></rect>\n</clipPath>\n</defs>\n</svg>',
      disposition: 'text_left',
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'Cloud computing market continues to grow',
          description:
            'Gartner analytical agency predicts the world cloud services market will grow 18,4% in 2021.',
          buttons: [
            {
              name: 'Gartner research',
              url: '/-/search',
              external: true,
              variant: 'outline',
            },
          ],
        },
      ],
      id: '45fc1ac2-f623-42df-a0fc-f71ea54c63cf',
      status: 'published',
      date_created: '2022-11-04T14:43:00.589Z',
    },
  },
];

export const DumpCards: ST_Card[] = [
  {
    id: '75',
    collection: 'ST_Cards',
    item: {
      image: {
        id: 'ece3b9ea-a35f-4cb2-afec-87e5a7cbaa3c',
        src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      },
      flexible_image: false,
      border_card: true,
      background_color: 'transparent',
      clickable_card: false,
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title:
            'How To Set Up and Configure an OpenVPN Server on Ubuntu 20.04',
          description:
            'OpenVPN is an open-source Virtual Private Network (VPN) application that lets you create and join a private network securely over the public Internet.',
          buttons: [],
        },
      ],
      id: '6cbb9e64-33b0-4c91-b536-801df3c2cfd3',
      status: 'published',
      date_created: '2022-11-05T10:00:22.204Z',
      date_updated: '2022-11-05T10:10:19.620Z',
    },
  },
  {
    id: '76',
    collection: 'ST_Cards',
    item: {
      image: {
        id: '1981cd81-449d-45ba-a292-d0044bbb7de2',
        src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
      },
      flexible_image: false,
      border_card: true,
      background_color: 'transparent',
      clickable_card: true,
      translations: [
        {
          id: '2',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'How To Set Up and Configure an OpenVPN Server on CentOS 8',
          description:
            'OpenVPN is an open-source Virtual Private Network (VPN) application that lets you create and join a private network securely over the public Internet.',
          buttons: [
            {
              name: 'Levels',
              url: '/levels',
              variant: 'primary',
              external: false,
            },
          ],
        },
      ],
      id: '97437f74-41e1-4c3b-814b-1d2712bcbabc',
      status: 'published',
      date_created: '2022-11-05T11:09:39.406Z',
      date_updated: '2022-11-05T12:03:36.581Z',
    },
  },
  {
    id: '77',
    collection: 'ST_Cards',
    item: {
      image: {
        id: '304d6515-5864-48f1-8d31-2b1db8c2bcac',
        src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
      },
      flexible_image: false,
      border_card: true,
      background_color: 'transparent',
      clickable_card: false,
      translations: [
        {
          id: '3',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          title: 'How To Set Up an OpenVPN Server on Debian 10',
          description:
            'OpenVPN is a full-featured, open-source Secure Socket Layer (SSL) VPN solution that accommodates a wide range of configurations.',
          buttons: [],
        },
      ],
      id: 'ae48cb6c-e5c2-446d-9b28-07f6876db326',
      status: 'published',
      date_created: '2022-11-05T11:09:39.490Z',
    },
  },
];
