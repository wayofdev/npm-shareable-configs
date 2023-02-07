const fs = require('node:fs')
const path = require('node:path')

const filePath = path.join(process.env.INIT_CWD, '.secretlintrc.js')

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, `module.exports = { ...require('@wayofdev/secretlint-config') };`)
}
