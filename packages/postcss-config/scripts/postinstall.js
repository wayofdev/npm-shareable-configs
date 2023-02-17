const fs = require('node:fs')
const path = require('node:path')

const initCwd = process.env.INIT_CWD

if (initCwd) {
  const filePath = path.join(initCwd, 'postcss.config.js')

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `module.exports = require('@wayofdev/postcss-config');`)
  }
} else {
  console.error('INIT_CWD environment variable is not defined')
}
