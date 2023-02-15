declare module '@wayofdev/lint-staged-config' {
  export interface LintRule {
    [key: string]: Record<
      string,
      (filenames: string[]) => string | string[] | Promise<string | string[]>
    >
  }

  export interface Params {
    cwd: string
    files: string[]
    fix: boolean
    fixType?: ('problem' | 'suggestion' | 'layout' | 'directive')[]
    cache: boolean
    rules?: string[]
    maxWarnings?: number
  }

  export function getEslintFixCmd(params: Params): string

  export function concatFilesForPrettier(filenames: string[]): string

  export function concatFilesForStylelint(filenames: string[]): string

  export const jsonRules: string[]
  export const secretsRules: LintRule
  export const mdRules: LintRule
  export const yamlRules: string[]
  export const htmlRules: string[]
}
