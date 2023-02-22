const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
module.exports = {
  '**/*.{htm,html}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `htmlhint --color`]
  },
}
