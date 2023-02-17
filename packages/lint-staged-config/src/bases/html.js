const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{htm,html}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `htmlhint --color`]
  },
}

module.exports = rules
