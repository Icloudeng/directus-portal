// used for SSR (getServerSideProps)
// const path = require('path')
// const localePath = path.resolve('./public/locales')

module.exports = {
  debug: process.env.NODE_ENV === 'development',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
