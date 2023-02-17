const { concatFilesForPrettier } = require('../common')

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.md': filenames => {
    return [
      `prettier --write ${concatFilesForPrettier(filenames)}`,
      `markdownlint --fix --ignore '**/node_modules/**' --ignore '**/CHANGELOG.md'`,
    ]
  },
}

module.exports = rules
