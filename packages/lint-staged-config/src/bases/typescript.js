const { concatFilesForPrettier } = require('../common')
const {getEslintFixCmd} = require("../common");

const rules = {
  '**/*.{ts,tsx,mts,cts}': filenames => [
    `prettier --write ${concatFilesForPrettier(filenames)}`,
    () => {
      return getEslintFixCmd({
        cwd: __dirname,
        fix: true,
        cache: true,
        rules: ['react-hooks/exhaustive-deps: off'],
        maxWarnings: 25,
        files: filenames,
      }),
    }
  ]
}

module.exports = rules
