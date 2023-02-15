// @ts-check

/**
 * This files overrides the base lint-staged.config.js present in the root directory.
 * It allows to run eslint based the package specific requirements.
 * {@link https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo}
 * {@link https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-lint-staged.md}
 */

const { getEslintFixCmd } = require('@wayofdev/lint-staged-config')
const jsonRules = require('@wayofdev/lint-staged-config/src/bases/json')
const secretsRules = require('@wayofdev/lint-staged-config/src/bases/secrets')
const mdRules = require('@wayofdev/lint-staged-config/src/bases/md')
const yamlRules = require('@wayofdev/lint-staged-config/src/bases/yaml')
const htmlRules = require('@wayofdev/lint-staged-config/src/bases/html')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{js,jsx,ts,tsx}': filenames => {
    return getEslintFixCmd({
      cwd: __dirname,
      fix: true,
      cache: true,
      // when autofixing staged-files a good tip is to disable react-hooks/exhaustive-deps, cause
      // a change here can potentially break things without proper visibility.
      rules: ['react-hooks/exhaustive-deps: off'],
      maxWarnings: 25,
      files: filenames,
    })
  },
  ...jsonRules,
  ...secretsRules,
  ...mdRules,
  ...yamlRules,
  ...htmlRules,
}

module.exports = rules
