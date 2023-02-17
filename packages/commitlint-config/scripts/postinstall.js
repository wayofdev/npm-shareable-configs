const fs = require('node:fs')
const path = require('node:path')

const initCwd = process.env.INIT_CWD

if (initCwd) {
  const filePath = path.join(initCwd, 'commitlint.config.js')

  const fileConfigObject = {
    extends: '@wayofdev/commitlint-config',
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`)
  }
} else {
  console.error('INIT_CWD environment variable is not defined')
}
