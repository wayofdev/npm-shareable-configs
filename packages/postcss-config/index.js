// module.exports = require('@wayofdev/postcss-config');

// https://nextjs.org/docs/advanced-features/customizing-postcss-config
const postcssNormalize = require('postcss-normalize')
const postcssReporter = require('postcss-reporter')
const postcssReporterFormatter = require('postcss-reporter/lib/formatter')

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',
    'postcss-flexbugs-fixes',
    'postcss-100vh-fix',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    postcssNormalize({
      forceImport: 'sanitize.css',
    }),
    postcssReporter({
      formatter: postcssReporterFormatter(),
    }),
  ],
}
