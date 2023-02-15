const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{css}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `stylelint --fix`]
  },
}

module.exports = rules
