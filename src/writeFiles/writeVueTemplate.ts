import { statSync, writeFileSync } from 'fs-extra'
import VueTemplate from '../helpers/VueTemplate'

export default (folderName: string, fileName: string) => {

  const dateCreated = statSync(`./src/views/${folderName}.vue`).birthtimeMs
  const dateNow = new Date().getTime()
  const dateDif = dateNow - dateCreated
  // Verifies that the file was created more than 2.5s ago to write the template 
  // and avoid overwriting.
  if (dateDif < 2500) {
    writeFileSync(`./src/views/${folderName}.vue`, VueTemplate(fileName))
  }
}
