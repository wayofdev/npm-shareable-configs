const { concatFilesForPrettier } = require('../common')

const rules = {
  '**/*.{css}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `stylelint --fix`]
  },
}

module.exports = rules
