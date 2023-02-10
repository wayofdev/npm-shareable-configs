declare module '@wayofdev/lint-staged-config' {
  export function concatFilesForPrettier(filenames: string[]): string

  export function concatFilesForStylelint(filenames: string[]): string

  export function getEslintFixCmd({}): string
}
