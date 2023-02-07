const fs = require('node:fs')
const path = require('node:path')

const filePath = path.join(process.env.INIT_CWD, '.browserslistrc')

const fileConfigObject = 'extends @wayofdev/browserslist-config'

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, fileConfigObject)
}
