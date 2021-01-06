import { ensureDirSync } from 'fs-extra'

export default (folderName: string) => ensureDirSync('./src/components/' + folderName)
