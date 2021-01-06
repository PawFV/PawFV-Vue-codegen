import { ensureFileSync } from 'fs-extra'

export default (path: string) => ensureFileSync('./src/sass/' + path + '.scss')