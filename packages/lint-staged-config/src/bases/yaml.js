const { concatFilesForPrettier } = require('../common')

const rules = {
  '*.{yml,yaml}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `yamllint --strict .`]
  },
  '.github/workflows/*.{yml,yaml}': [`actionlint`],
}

module.exports = rules
