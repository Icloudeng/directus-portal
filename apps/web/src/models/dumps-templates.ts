import {
  ST_CardCarousel,
  ST_CardImageCarousel,
  ST_CleanHero,
  ST_NavAccordion,
  ST_NavTab,
  ST_SidedContent,
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

export const DumpNavTab: ST_NavTab[] = [];
