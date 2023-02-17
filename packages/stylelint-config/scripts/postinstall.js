const fs = require('node:fs')
const path = require('node:path')

const initCwd = process.env.INIT_CWD

if (initCwd) {
  const filePath = path.join(initCwd, '.stylelintrc.js')

  const fileConfigObject = {
    extends: '@wayofdev/stylelint-config',
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`)
  }
} else {
  console.error('INIT_CWD environment variable is not defined')
}
