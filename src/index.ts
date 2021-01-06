import { watch } from 'chokidar'
import { last } from 'lodash'
import getFileName from './helpers/getFileName'
import getFolderName from './helpers/getFolderName'
import isVueFile from './helpers/isVueFile'
import writeComponentFolder from './writeFiles/writeComponentFolder'
import writeSassFile from './writeFiles/writeSassFile'
import writeVueTemplate from './writeFiles/writeVueTemplate'

watch('./src/views/**/*.vue', { persistent: true }).on('add', (path, stats) => {
  const viewCreated = last(path.split('views\\'))

  if (isVueFile(viewCreated)) {
    const folderName = getFolderName(viewCreated)
    const fileName = getFileName(folderName)

    writeVueTemplate(folderName, fileName)
    writeComponentFolder(folderName)
    writeSassFile(folderName)
  }
})
