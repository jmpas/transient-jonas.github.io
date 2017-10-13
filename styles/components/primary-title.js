import font, { primarySize, primaryWeight } from '../variables/font'
import { primary } from '../variables/colors'

export default `
.root {
  font-family: ${ font };
  color: ${ primary };
  font-size: ${ primarySize };
  font-weight: ${ primaryWeight };
}`
