const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.json': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`]
  },
  'package.json,{packages,apps}/*/package.json': () => [`sort-package-json`],
}

module.exports = rules
