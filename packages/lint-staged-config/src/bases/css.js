const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
module.exports = {
  '**/*.{css}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `stylelint --fix`]
  },
}
