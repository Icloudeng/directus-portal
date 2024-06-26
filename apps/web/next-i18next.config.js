// used for SSR (getServerSideProps)
// const path = require('path')
// const localePath = path.resolve('./public/locales')

module.exports = {
  debug: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
