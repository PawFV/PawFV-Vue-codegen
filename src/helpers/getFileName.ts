import { last } from 'lodash'
export default (path: string) => last(path.split('\\'))
