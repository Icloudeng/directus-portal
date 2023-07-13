// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',

  reactStrictMode: true,

  i18n,

  eslint: {
    dirs: ['src'],
  },

  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.smatflow.com',
      },
      {
        protocol: 'https',
        hostname: '**.smatflow.xyz',
      },
      {
        protocol: 'https',
        hostname: '**.smatflow.net',
      },
      {
        protocol: 'http',
        hostname: '**.smatflow.smfl',
      },
    ],
    domains: [
      'localhost',
      '127.0.0.1',
      'flowbite.com',
      'images.unsplash.com',
      'dummyimage.com',
      'cms', // docker
      'kroki.io',
      'kroki.smatflow.net',
    ],
  },

  experimental: {
    appDir: false,
    esmExternals: 'loose',
  },
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
