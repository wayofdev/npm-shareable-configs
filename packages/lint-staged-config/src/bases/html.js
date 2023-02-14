const { concatFilesForPrettier } = require('../common')

const rules = {
  '**/*.{htm,html}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`, `htmlhint --color`]
  },
}

module.exports = rules
