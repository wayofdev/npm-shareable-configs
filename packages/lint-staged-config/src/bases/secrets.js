/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
module.exports = {
  '*': [`secretlint`],
}
