const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.mdx': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`]
  },
}

module.exports = rules
