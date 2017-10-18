import css from 'styled-jsx/css'

import font, { secondarySize, secondaryWeight } from '../variables/font'
import { secondary } from '../variables/colors'

export default css`
.root {
  font-family: ${ font };
  color: ${ secondary };
  font-size: ${ secondarySize };
  font-weight: ${ secondaryWeight };
}`
