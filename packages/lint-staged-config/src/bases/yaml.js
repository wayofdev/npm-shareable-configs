const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
module.exports = {
  '*.{yml,yaml}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `yamllint --strict .`]
  },
  '.github/workflows/*.{yml,yaml}': () => [`actionlint`],
}
