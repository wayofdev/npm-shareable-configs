/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(process.env.INIT_CWD, 'postcss.config.js');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(
        filePath,
        `module.exports = require('@wayofdev/postcss-config');`
    );
}
