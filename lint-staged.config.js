// @ts-check

const jsonRules = require('@wayofdev/lint-staged-config/src/bases/json')
const secretsRules = require('@wayofdev/lint-staged-config/src/bases/secrets')
const mdRules = require('@wayofdev/lint-staged-config/src/bases/md')
const yamlRules = require('@wayofdev/lint-staged-config/src/bases/yaml')
const { concatFilesForPrettier } = require('@wayofdev/lint-staged-config')

const rules = {
  ...jsonRules,
  ...yamlRules,
  ...secretsRules,
  ...mdRules,
  '**/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`]
  },
}

module.exports = rules
