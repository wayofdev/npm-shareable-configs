const { concatFilesForPrettier } = require('../common')

const rules = {
  '**/*.md': filenames => {
    return [
      `prettier --write ${concatFilesForPrettier(filenames)}`,
      `markdownlint --fix --ignore '**/node_modules/**' --ignore '**/CHANGELOG.md'`,
    ]
  },
}

module.exports = rules
