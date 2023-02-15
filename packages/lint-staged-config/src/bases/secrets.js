/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*': [`secretlint`],
}

module.exports = rules
