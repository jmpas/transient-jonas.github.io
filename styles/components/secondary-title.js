import font, { secondarySize, secondaryWeight } from '../variables/font'
import { secondary } from '../variables/colors'

export default `
.root {
  font-family: ${ font };
  color: ${ secondary };
  font-size: ${ secondarySize };
  font-weight: ${ secondaryWeight };
}`
