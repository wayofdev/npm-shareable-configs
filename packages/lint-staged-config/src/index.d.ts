interface Params {
  cwd: string
  files: string[]
  fix: boolean
  fixType?: ('problem' | 'suggestion' | 'layout' | 'directive')[]
  cache: boolean
  rules?: string[]
  maxWarnings?: number
}

declare function getEslintFixCmd(params: Params): string

declare function concatFilesForPrettier(filenames: string[]): string

declare function concatFilesForStylelint(filenames: string[]): string

export { getEslintFixCmd, concatFilesForPrettier, concatFilesForStylelint }
