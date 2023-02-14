// @ts-check

const jsonRules = require('@wayofdev/lint-staged-config/src/bases/json')
const secretsRules = require('@wayofdev/lint-staged-config/src/bases/secrets')
const jsRules = require('@wayofdev/lint-staged-config/src/bases/javascript')
const tsRules = require('@wayofdev/lint-staged-config/src/bases/typescript')

const rules = {
  ...jsRules,
  //...tsRules,
  ...jsonRules,
  ...secretsRules,
}

module.exports = rules
