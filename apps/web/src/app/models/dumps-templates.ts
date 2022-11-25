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
  ST_GuestQuestion,
  ST_HoverableMediaMenu,
  ST_LatestBlog,
  ST_LatestNew,
  ST_Markdown,
  ST_MediaTab,
  ST_NavAccordion,
  ST_NavTab,
  ST_PageAsideMenu,
  ST_PlansPricing,
  ST_Platform,
  ST_SidedContent,
  ST_SideTextMedia,
  ST_SimpleCardLink,
  ST_StreamableCard,
  ST_Testimonial,
  ST_TimelineRange,
  ST_TransformedImageCarousel,
  ST_Value,
} from '@apps/contracts';
import type { DRTStatus } from '@apps/contracts';

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
        '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path></svg>',
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
        '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"></path><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"></path></svg>',
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
        '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path></svg>',
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
        '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" class="text-primary-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"></path></svg>',
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
              '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z"></path></svg>',
            cost_hour: 0.001,
            default: false,
            id: 'bb16febd-d35d-4a7c-b700-a3d0a4e54601',
            status: 'published',
            date_created: '2022-10-19T18:32:55.497Z',
          },
          {
            name: 'CentOS 8.3 X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.076.066L8.883 3.28H3.348v5.434L0 12.01l3.349 3.298v5.39h5.374l3.285 3.236 3.285-3.236h5.43v-5.374L24 12.026l-3.232-3.252V3.321H15.31zm0 .749l2.49 2.506h-1.69v6.441l-.8.805-.81-.815V3.28H9.627zm-8.2 2.991h4.483L6.485 5.692l4.253 4.279v.654H9.94L5.674 6.423l-1.798 1.77zm5.227 0h1.635v5.415l-3.509-3.53zm4.302.043h1.687l1.83 1.842-3.517 3.539zm2.431 0h4.404v4.394l-1.83-1.842-4.241 4.267h-.764v-.69l4.261-4.287zm2.574 3.3l1.83 1.843v1.676h-5.327zm-12.735.013l3.515 3.462H3.876v-1.69zM3.348 9.454v1.697h6.377l.871.858-.782.77H3.35v1.786L.753 12.01zm17.42.068l2.488 2.503-2.533 2.55v-1.796h-6.41l-.75-.754.825-.83h6.38zm-9.502.978l.81.815.186-.188.614-.618v.686h.768l-.825.83.75.754h-.719v.808l-.842-.83-.741.73v-.707h-.7l.781-.77-.188-.186-.682-.672h.788zm-7.39 2.807h5.402l-3.603 3.55-1.798-1.772zm6.154 0h.708v.7l-4.404 4.338 1.852 1.824h-4.31v-4.342l1.798 1.77zm3.348 0h.715l4.317 4.343.186-.187 1.599-1.61v4.316h-4.366l1.853-1.825-.188-.185-4.116-4.054zm1.46 0h5.357v1.798l-1.785 1.796zm-2.83.191l.842.829v6.37h1.691l-2.532 2.495-2.533-2.495h1.79V14.23zm-1.27 1.251v5.42H8.939l-1.852-1.823zm2.64.097l3.552 3.499-1.853 1.825h-1.7z"></path></svg>',
            cost_hour: 0.001,
            default: false,
            id: '485b3d94-4827-437c-b1d9-18c98b880d71',
            status: 'published',
            date_created: '2022-10-19T18:34:49.351Z',
          },
          {
            name: 'FreeBSD 12.2 X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M303.7 96.2c11.1-11.1 115.5-77 139.2-53.2 23.7 23.7-42.1 128.1-53.2 139.2-11.1 11.1-39.4.9-63.1-22.9-23.8-23.7-34.1-52-22.9-63.1zM109.9 68.1C73.6 47.5 22 24.6 5.6 41.1c-16.6 16.6 7.1 69.4 27.9 105.7 18.5-32.2 44.8-59.3 76.4-78.7zM406.7 174c3.3 11.3 2.7 20.7-2.7 26.1-20.3 20.3-87.5-27-109.3-70.1-18-32.3-11.1-53.4 14.9-48.7 5.7-3.6 12.3-7.6 19.6-11.6-29.8-15.5-63.6-24.3-99.5-24.3-119.1 0-215.6 96.5-215.6 215.6 0 119 96.5 215.6 215.6 215.6S445.3 380.1 445.3 261c0-38.4-10.1-74.5-27.7-105.8-3.9 7-7.6 13.3-10.9 18.8z"></path></svg>',
            cost_hour: 0.001,
            default: false,
            id: '9891a974-fae8-4f6b-ae68-3b7373e278a9',
            status: 'published',
            date_created: '2022-10-19T18:37:57.643Z',
          },
          {
            name: 'Ubuntu 20.04 X64',
            icon_svg:
              '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4.973c-6.248 0-11.313 5.065-11.313 11.313s5.065 11.313 11.313 11.313c6.248 0 11.313-5.065 11.313-11.313s-5.065-11.313-11.313-11.313zM18.538 8.869c0.417-0.722 1.341-0.97 2.063-0.553s0.97 1.341 0.552 2.063c-0.417 0.722-1.34 0.97-2.063 0.552s-0.97-1.34-0.553-2.062zM16 9.724c0.608 0 1.195 0.084 1.753 0.238 0.098 0.607 0.459 1.166 1.033 1.498s1.237 0.364 1.811 0.147c1.117 1.098 1.844 2.592 1.95 4.256l-2.152 0.032c-0.198-2.254-2.090-4.021-4.394-4.021-0.664 0-1.294 0.148-1.858 0.41l-1.050-1.881c0.877-0.434 1.864-0.679 2.908-0.679zM8.307 17.796c-0.835 0-1.511-0.676-1.511-1.51s0.676-1.511 1.511-1.511c0.834 0 1.51 0.676 1.51 1.511s-0.676 1.51-1.51 1.51zM9.646 17.931c0.477-0.389 0.782-0.981 0.782-1.645s-0.305-1.256-0.782-1.645c0.409-1.581 1.392-2.931 2.713-3.814l1.104 1.85c-1.135 0.799-1.876 2.117-1.876 3.61s0.741 2.811 1.876 3.609l-1.104 1.85c-1.322-0.883-2.305-2.233-2.713-3.815zM20.602 24.255c-0.723 0.417-1.646 0.17-2.063-0.553s-0.17-1.645 0.553-2.063c0.722-0.417 1.646-0.169 2.062 0.553s0.17 1.646-0.553 2.063zM20.597 20.964c-0.574-0.217-1.237-0.184-1.811 0.147-0.574 0.332-0.934 0.891-1.033 1.498-0.558 0.155-1.146 0.239-1.753 0.239-1.044 0-2.031-0.245-2.908-0.68l1.050-1.881c0.565 0.263 1.194 0.41 1.858 0.41 2.305 0 4.196-1.767 4.394-4.021l2.153 0.032c-0.106 1.664-0.833 3.158-1.95 4.256z"></path></svg>',
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
              '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.885 17.41c0.167-0.13 0.319-0.262 0.454-0.391-0.377 0.092-0.76 0.094-1.146 0.059-0.463 0.006 0.088 0.239 0.692 0.332zM20.679 16.458c0.276-0.381 0.477-0.798 0.548-1.229-0.062 0.307-0.229 0.572-0.386 0.852-0.866 0.545-0.081-0.324-0-0.654-0.931 1.172-0.128 0.703-0.162 1.030zM21.597 14.070c0.056-0.834-0.164-0.571-0.238-0.252 0.086 0.045 0.155 0.588 0.238 0.252zM16.436 2.667c0.247 0.044 0.534 0.078 0.494 0.137 0.27-0.059 0.332-0.114-0.494-0.137zM16.918 2.826l0.012-0.022-0.175 0.036zM16.287 20.066c-0.667-0.312-1.277-0.784-1.779-1.361 0.266 0.39 0.554 0.769 0.925 1.067-0.629-0.213-1.468-1.523-1.713-1.576 1.084 1.94 4.396 3.402 6.131 2.677-0.803 0.029-1.822 0.016-2.724-0.317-0.347-0.179-0.807-0.532-0.811-0.648-0.017 0.045-0.046 0.090-0.028 0.158zM16.322 19.885c-0.005 0.006-0.007 0.013-0.007 0.022 0.003-0.007 0.005-0.015 0.007-0.022zM26.274 12.297c0.008-0.425 0.118-0.223 0.161-0.328-0.084-0.048-0.303-0.374-0.436-0.999 0.097-0.147 0.258 0.381 0.39 0.403-0.085-0.497-0.23-0.876-0.236-1.258-0.384-0.803-0.136 0.107-0.448-0.345-0.409-1.276 0.339-0.296 0.39-0.875 0.62 0.898 0.973 2.289 1.135 2.866-0.124-0.703-0.324-1.383-0.568-2.042 0.188 0.079-0.303-1.446 0.245-0.436-0.585-2.153-2.504-4.165-4.27-5.109 0.216 0.198 0.489 0.446 0.391 0.485-0.878-0.523-0.724-0.564-0.849-0.784-0.716-0.291-0.762 0.023-1.236 0.001-1.348-0.715-1.608-0.639-2.849-1.087l0.057 0.264c-0.893-0.297-1.041 0.113-2.006 0.001-0.059-0.046 0.309-0.166 0.612-0.21-0.864 0.114-0.823-0.17-1.668 0.031 0.208-0.146 0.428-0.243 0.651-0.367-0.704 0.043-1.681 0.41-1.38 0.076-1.149 0.513-3.189 1.232-4.334 2.306l-0.036-0.241c-0.525 0.63-2.288 1.881-2.428 2.697l-0.14 0.033c-0.273 0.462-0.45 0.986-0.666 1.462-0.357 0.608-0.524 0.234-0.473 0.329-0.702 1.424-1.051 2.62-1.352 3.601 0.215 0.321 0.005 1.932 0.086 3.222-0.353 6.369 4.47 12.552 9.741 13.98 0.773 0.276 1.922 0.266 2.899 0.294-1.153-0.33-1.302-0.175-2.425-0.566-0.81-0.382-0.988-0.817-1.562-1.315l0.227 0.401c-1.126-0.398-0.655-0.493-1.571-0.783l0.243-0.317c-0.365-0.028-0.966-0.615-1.131-0.94l-0.399 0.016c-0.48-0.592-0.735-1.018-0.716-1.348l-0.129 0.23c-0.146-0.251-1.764-2.219-0.925-1.761-0.156-0.143-0.363-0.232-0.588-0.64l0.171-0.195c-0.404-0.52-0.743-1.186-0.718-1.408 0.216 0.291 0.365 0.345 0.513 0.395-1.020-2.531-1.077-0.139-1.85-2.576l0.163-0.013c-0.125-0.189-0.201-0.394-0.302-0.595l0.071-0.709c-0.734-0.849-0.205-3.611-0.099-5.125 0.073-0.616 0.613-1.272 1.023-2.3l-0.25-0.043c0.478-0.834 2.729-3.348 3.772-3.219 0.505-0.634-0.1-0.002-0.199-0.162 1.109-1.148 1.458-0.811 2.207-1.018 0.807-0.479-0.693 0.187-0.31-0.183 1.396-0.356 0.989-0.81 2.81-0.991 0.192 0.109-0.446 0.169-0.606 0.311 1.163-0.569 3.68-0.44 5.315 0.316 1.897 0.887 4.029 3.507 4.113 5.973l0.096 0.026c-0.048 0.98 0.15 2.114-0.194 3.155l0.234-0.493c0.027 0.749-0.219 1.113-0.442 1.756l-0.401 0.2c-0.328 0.636 0.032 0.404-0.203 0.91-0.512 0.455-1.552 1.423-1.885 1.511-0.243-0.005 0.165-0.287 0.218-0.397-0.684 0.47-0.549 0.706-1.596 0.992l-0.031-0.068c-2.583 1.215-6.17-1.193-6.123-4.478-0.028 0.209-0.078 0.156-0.136 0.241-0.133-1.691 0.781-3.388 2.322-4.081 1.508-0.746 3.275-0.44 4.355 0.566-0.593-0.777-1.774-1.601-3.173-1.524-1.371 0.022-2.653 0.893-3.081 1.838-0.702 0.442-0.784 1.704-1.090 1.935-0.412 3.026 0.774 4.333 2.781 5.871 0.162 0.109 0.181 0.171 0.167 0.227 0.001-0.001 0.001-0.003 0.003-0.004 2.367 0.884 4.812 0.67 6.86-0.972 0.521-0.406 1.090-1.096 1.255-1.106-0.248 0.373 0.042 0.179-0.148 0.508 0.519-0.837-0.226-0.341 0.537-1.446l0.282 0.388c-0.105-0.695 0.863-1.539 0.765-2.638 0.222-0.336 0.248 0.362 0.012 1.135 0.327-0.858 0.086-0.996 0.17-1.704 0.091 0.238 0.21 0.491 0.271 0.742-0.213-0.829 0.218-1.396 0.325-1.878-0.105-0.047-0.329 0.366-0.38-0.613zM13.071 18.038c0.304 0.414 0.546 0.862 0.935 1.185-0.28-0.546-0.487-0.772-0.87-1.51l-0.065 0.325zM13.856 17.685c-0.161-0.178-0.257-0.393-0.363-0.607 0.102 0.376 0.311 0.698 0.506 1.027l-0.143-0.42zM25.717 17.664c0.456-0.858 0.752-1.796 0.875-2.747l-0.068 0.171c-0.125 0.886-0.394 1.763-0.807 2.576zM17.63 2.307c-0.433 0.036-0.864 0.058-1.29 0.113l0.188 0.026c0.313-0.115 0.77-0.063 1.102-0.138zM5.659 8.779c0.322-0.724-0.089-0.26-0.125-0.453 0.050 0.643-0.495 0.886 0.125 0.453zM5.018 10.414c-0.401 0.513-0.185 0.622-0.227 0.971 0.145-0.446 0.171-0.713 0.227-0.971z"></path></svg>',
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

export const DumpGuestQuestions: ST_GuestQuestion[] = [
  {
    id: '79',
    collection: 'ST_GuestQuestions',
    item: {
      id: '8341740e-0e4e-4559-9e14-c4d7a6f19ed6',
      status: 'published',
      date_created: '2022-11-05T16:39:03.810Z',
    },
  },
];

export const DumpSideTextMedias: ST_SideTextMedia[] = [
  {
    id: '80',
    collection: 'ST_SideTextMedias',
    item: {
      media: undefined,
      media_url: 'https://youtu.be/mxT233EdY5c',
      disposition: 'text_left',
      sided: true,
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
              url: '/research',
              external: false,
              variant: 'primary',
            },
          ],
        },
      ],
      id: '5a4e0ea2-4c78-4494-9f0a-7a89982fcc3e',
      status: 'published',
      date_created: '2022-11-05T18:31:36.167Z',
      date_updated: '2022-11-05T20:28:22.869Z',
    },
  },
];

export const DumpMarkdown: ST_Markdown[] = [
  {
    id: '84',
    collection: 'ST_Markdown',
    item: {
      translations: [
        {
          id: '1',
          languages_code: {
            code: 'en',
            name: 'English',
          },
          markdown_content:
            "### What's a Layout?#\n\nData models vary drastically in shape and purpose, from eCommerce platforms to IoT fleets and everything in between. While your Directus Project data may be stored in Collections (i.e. SQL data tables), this table representation is not always the most human-friendly way to interact with information. Layouts provide more human-friendly, intuitive displays to view and interact with Items in a Collection.\n\nThe following sections detail the Layouts managed and supported by the Directus Team. Keep in mind that Directus is open-source, modular and extensible. You are free to create any Layout you need on self-hosted and Enterprise Cloud Projects. Additionally, Directus Cloud is always adding more Layouts to its Cloud Exclusive Extensions, so check back often to stay up-to-date with the latest and greatest. Additionally, you can join the community on Discord and GitHub to find thousands of engineers guiding development of the Directus platform.",
        },
      ],
      id: '69d38545-9b7c-40b2-8d14-5612ec00df4d',
      status: 'published',
      date_created: '2022-11-09T16:10:20.778Z',
      date_updated: '2022-11-09T16:11:12.515Z',
    },
  },
];

export const DumpPlatforms: ST_Platform[] = [
  {
    id: '85',
    collection: 'ST_Platforms',
    item: {
      include_platforms: true,
      id: 'bbea3762-0a06-46d3-9323-af23cb5e2b46',
      status: 'published',
      date_created: '2022-11-13T12:20:18.622Z',
      categories: [
        {
          name: 'Commerce',
          icon_svg:
            '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path></svg>',
          platforms: [
            {
              name: 'Nextcloud',
              slug: 'nextcloud',
              icon: {
                id: '339e124e-0df2-43cc-84ba-f5df51d90ad5',
                width: 512,
                height: 512,
              },
              icon_svg:
                '<svg stroke="currentColor" fill="blue" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.018 6.537c-2.5 0-4.6 1.712-5.241 4.015-.56-1.232-1.793-2.105-3.225-2.105A3.569 3.569 0 0 0 0 12a3.569 3.569 0 0 0 3.552 3.553c1.432 0 2.664-.874 3.224-2.106.641 2.304 2.742 4.016 5.242 4.016 2.487 0 4.576-1.693 5.231-3.977.569 1.21 1.783 2.067 3.198 2.067A3.568 3.568 0 0 0 24 12a3.569 3.569 0 0 0-3.553-3.553c-1.416 0-2.63.858-3.199 2.067-.654-2.284-2.743-3.978-5.23-3.977zm0 2.085c1.878 0 3.378 1.5 3.378 3.378 0 1.878-1.5 3.378-3.378 3.378A3.362 3.362 0 0 1 8.641 12c0-1.878 1.5-3.378 3.377-3.378zm-8.466 1.91c.822 0 1.467.645 1.467 1.468s-.644 1.467-1.467 1.468A1.452 1.452 0 0 1 2.085 12c0-.823.644-1.467 1.467-1.467zm16.895 0c.823 0 1.468.645 1.468 1.468s-.645 1.468-1.468 1.468A1.452 1.452 0 0 1 18.98 12c0-.823.644-1.467 1.467-1.467z"></path></svg>',
              ram: 3,
              cpu: 2,
              ssd: 25,
              link: '/platforms',
              external_link: false,
              translations: [
                {
                  id: '2',
                  languages_code: {
                    code: 'en',
                    name: 'English',
                  },
                  description:
                    'The default loader does not optimize SVG images for a few reasons. First, SVG is a vector format meaning it can be resized losslessly. Second, SVG has many of the same features as HTML/CSS, which can lead to vulnerabilities without',
                },
              ],
              id: '100925d7-7c94-45af-8558-f9c2a2c023ab',
              status: 'published',
              date_created: '2022-10-19T13:08:04.357Z',
              date_updated: '2022-11-15T04:33:14.241Z',
            },
            {
              name: 'Metabase',
              slug: 'metabase',
              icon: {
                id: 'cbb689db-b488-4032-90d3-6a713a7bea80',
                width: 512,
                height: 512,
              },
              icon_svg:
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 0 0-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 0 0-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"></path></svg>',
              ram: 2,
              cpu: 1,
              ssd: 25,
              link: '/platforms',
              external_link: false,
              translations: [
                {
                  id: '3',
                  languages_code: {
                    code: 'en',
                    name: 'English',
                  },
                  description:
                    'Parabolic usually refers to something in a shape of a parabola, but may also refer to a parable. Parabolic may refer to: In mathematics:.',
                },
              ],
              id: '87f312c2-7e8b-4bcc-af44-eb985a087020',
              status: 'published',
              date_created: '2022-10-19T13:08:41.318Z',
              date_updated: '2022-11-15T04:45:35.147Z',
            },
            {
              name: 'Matomo',
              slug: 'matomo',
              icon: {
                id: '38c8f1d6-5b7b-4ba3-98c2-060d1a096179',
              },
              icon_svg:
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M6.664 15.37a3.336 3.336 0 0 1-3.332 3.332C1.495 18.702 0 17.208 0 15.37s1.495-3.333 3.332-3.333a3.338 3.338 0 0 1 3.332 3.333zm11.565-3.644a3.658 3.658 0 0 1-1.987.591 3.642 3.642 0 0 1-1.872-.529l.008.012a3.728 3.728 0 0 1-1.235-1.19l-2.612-3.693a.17.17 0 0 1-.027-.033A3.312 3.312 0 0 0 7.67 5.298a3.318 3.318 0 0 0-2.848 1.586.146.146 0 0 1-.021.028l-3.428 5.343a3.663 3.663 0 0 1 5.094 1.18.13.13 0 0 1 .015.018l2.756 3.869a3.305 3.305 0 0 0 2.699 1.38 3.31 3.31 0 0 0 2.711-1.379l.009-.013c.073-.103.137-.202.195-.305l1.442-2.255 1.935-3.024zm5.275 1.902l-.014-.028-.044-.066a1.109 1.109 0 0 0-.029-.044l-3.525-5.37c.024.168.052.335.052.51 0 .741-.219 1.457-.634 2.068l-2.803 4.38 1.416 2.179-.002.002a.131.131 0 0 1 .024.028 3.338 3.338 0 0 0 2.723 1.415A3.335 3.335 0 0 0 24 15.37c0-.613-.171-1.216-.496-1.742zm-7.262-1.666a3.336 3.336 0 0 0 3.332-3.333 3.336 3.336 0 0 0-3.332-3.332 3.336 3.336 0 0 0-3.332 3.332 3.338 3.338 0 0 0 3.332 3.333z"></path></svg>',
              ram: 2,
              cpu: 1,
              ssd: 25,
              link: '/platforms',
              external_link: false,
              translations: [
                {
                  id: '4',
                  languages_code: {
                    code: 'en',
                    name: 'English',
                  },
                  description:
                    'Slack is a messaging program designed specifically for the office, but has also been adopted for personal use.',
                },
              ],
              id: 'afceb5c0-6c8f-415f-a9cc-c9f1b264e6c8',
              status: 'published',
              date_created: '2022-10-19T13:08:57.872Z',
              date_updated: '2022-11-15T04:40:50.570Z',
            },
          ],
          id: 'c0033436-3d4e-418e-8ab3-3972bbaa2643',
          status: 'published',
          date_created: '2022-10-19T13:54:14.818Z',
          date_updated: '2022-11-13T20:00:10.710Z',
          translations: [],
        },
        {
          name: 'ERP',
          platforms: [
            {
              name: 'Oddo',
              slug: 'oddo',
              icon: {
                id: 'db55ef6a-741f-4a32-84ae-3a8aadc90885',
                width: 512,
                height: 512,
                src: 'http://127.0.0.1:8055/assets/db55ef6a-741f-4a32-84ae-3a8aadc90885?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyM2RhYzkzLTcwMDgtNGZlYS1iNzg2LWU5NzhlZWI1NjMyMCIsInJvbGUiOiJiZmQwZTJkOC0zZWI0LTQwZTAtYTY1Ni04MjUzMGUwZDhjYmQiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTY2ODQ4Njc0OCwiZXhwIjoxNjY4NDkwMzQ4LCJpc3MiOiJkaXJlY3R1cyJ9.ygekIq9xtk_AkN3XsOmLl50aeB8lDA9HIF9cc2P1wFg',
              },
              icon_svg:
                '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"></path><path d="M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"></path></svg>',
              ram: 2,
              cpu: 1,
              ssd: 25,
              link: '/platforms',
              external_link: false,
              translations: [
                {
                  id: '1',
                  languages_code: {
                    code: 'en',
                    name: 'English',
                  },
                  description:
                    'Shorten development cycles and innovate faster with reliability through DevOps automation.',
                },
              ],
              id: 'bc97194a-9ec3-440c-b465-12fa5ec1615d',
              status: 'published',
              date_created: '2022-10-19T13:07:29.315Z',
              date_updated: '2022-11-15T04:43:07.519Z',
            },
          ],
          id: 'ee9bf544-8afc-41d7-8bfd-4e6647b0a648',
          status: 'published',
          date_created: '2022-10-19T13:55:41.767Z',
          date_updated: '2022-11-13T12:30:12.779Z',
          translations: [],
        },
      ],
    },
  },
];

export const DumpLatestNews: ST_LatestNew[] = [
  {
    id: '87',
    collection: 'ST_LatestNews',
    item: {
      limit: 3,
      id: '0c25c908-2481-45ae-b488-4d7c5cc408df',
      status: 'published',
      date_created: '2022-11-20T12:51:39.713Z',
      news: [
        {
          label: 'A year with a 30% discount on migration to the Serverspace',
          tags: [],
          slug: 'a-year-with-a-30-discount-on-migration-to-the-serverspace',
          translations: [
            {
              id: '4',
              languages_code: {
                code: 'en',
                name: 'English',
              },
              markdown_content: '',
              title:
                'A year with a 30% discount on migration to the Serverspace',
              summary:
                'Cloud provider Serverspace has implemented a migration service virtual infrastructure to its cloud.',
            },
          ],
          id: '35ad1c18-d64f-442d-95e9-a84bfcddb7d3',
          status: 'published',
          date_created: '2022-11-20T13:01:04.738Z',
        },
        {
          label: 'Deploying',
          tags: ['Cloud', 'Compute'],
          slug: 'deploying',
          translations: [
            {
              id: '3',
              languages_code: {
                code: 'en',
                name: 'English',
              },
              title: 'Deploying',
              markdown_content: '',
              summary:
                'This guide will help you to install Chatwoot on Ubuntu 20.04 LTS. We have prepared a deployment script for you to run. Refer to the script and feel free to make changes accordingly to the operating system if you are on a non-Ubuntu system.',
            },
          ],
          id: 'a1ef0661-a6f6-4ff6-9d4d-5eeadbebbd13',
          status: 'published',
          date_created: '2022-11-19T15:47:20.829Z',
          date_updated: '2022-11-20T12:21:32.932Z',
        },
        {
          label: 'Introducing new platform for data analysis',
          tags: [],
          slug: 'introducing-new-platform-for-data-analysis',
          translations: [
            {
              id: '1',
              languages_code: {
                code: 'en',
                name: 'English',
              },
              title: 'Introducing new platform for data analysis',
              summary: 'Introducing new platform for data analysis',
              markdown_content: '',
            },
          ],
          id: '0c18524c-a6e6-4ab1-9481-6f6057500650',
          status: 'published',
          date_created: '2022-09-20T15:56:20.388Z',
          date_updated: '2022-09-29T05:43:00.239Z',
        },
      ],
    },
  },
];

export const DumpLatestBlog: ST_LatestBlog[] = [
  {
    id: '88',
    collection: 'ST_LatestBlog',
    item: {
      limit: 3,
      id: 'fa542b54-3ebc-4575-9775-3324c9b49501',
      status: 'published',
      date_created: '2022-11-21T05:35:21.678Z',
      blogs: [
        {
          label: 'Top YouTube Channels for Developers from Icloudeng cloud',
          tags: [],
          slug: 'top-you-tube-channels-for-developers-from-serverspace-cloud',
          image: {
            id: '6cde7f02-4d95-4be3-b2d7-a6bd9266c6e7',
            width: 1593,
            height: 671,
            src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
          },
          translations: [
            {
              id: '3',
              languages_code: {
                code: 'en',
                name: 'English',
              },
              markdown_content: '',
              title: 'Top YouTube Channels for Developers from Icloudeng cloud',
              summary:
                'Recently, our team made a survey among top developers from the U.S. and Europe. One of the questions was about YouTube bloggers they subscribed to. We put together the answers and select IT Influencers who share video programming tutorials and thoughts on technology trends',
            },
          ],
          id: '40fc89b6-af4a-42b9-a988-c2cd979902e3',
          status: 'published',
          date_created: '2022-11-21T05:17:37.132Z',
          date_updated: '2022-11-21T05:30:50.489Z',
        },
        {
          label: 'OpenVPN vs WireGuard: which VPN is better?',
          tags: [],
          slug: 'open-vpn-vs-wire-guard-which-vpn-is-better',
          image: {
            id: '2bf44a86-1a3d-4bb7-b053-ef422131cfe2',
            width: 1591,
            height: 670,
            src: 'https://flowbite.com/docs/images/blog/image-2.jpg',
          },
          translations: [
            {
              id: '2',
              languages_code: {
                code: 'en',
                name: 'English',
              },
              title: 'OpenVPN vs WireGuard: which VPN is better?',
              markdown_content: '',
              summary:
                'We compared two popular VPN protocols for you according to four criteria: encryption, performance, privacy and compatibility. At the end of the article you will find guides on how to set it up',
            },
          ],
          id: 'e71a9725-d8c1-4731-bd6f-6491519eb4be',
          status: 'published',
          date_created: '2022-11-21T05:15:52.662Z',
        },
        {
          label: 'HostAdvice interview with Icloudeng',
          tags: [],
          slug: 'host-advice-interview-with-serverspace',
          image: {
            id: 'd033f099-7302-473c-87f7-bd17f6dc656d',
            width: 1593,
            height: 671,
            src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
          },
          translations: [
            {
              id: '1',
              languages_code: {
                code: 'en',
                name: 'English',
              },
              title: 'HostAdvice interview with Icloudeng',
              markdown_content: '',
              summary:
                'Hostadvice talk with Mr. Vitaliy Gritsay from Serverspace and learn more about our company.Grab your preferred drink and enjoy this interview.',
            },
          ],
          id: '4187567a-58e6-4714-b91e-23b27045e4bc',
          status: 'published',
          date_created: '2022-11-21T05:14:10.396Z',
          date_updated: '2022-11-21T05:31:08.738Z',
        },
      ],
    },
  },
];
