const { concatFilesForPrettier } = require('../common')

const rules = {
  '**/*.json': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`]
  },
  'package.json,{packages,apps}/*/package.json': () => [`sort-package-json`],
}

module.exports = rules
