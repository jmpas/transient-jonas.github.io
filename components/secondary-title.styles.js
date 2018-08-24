import css from 'styled-jsx/css'

import font, { secondarySize, secondaryWeight } from '../styles/variables/font'
import { secondary } from '../styles/variables/colors'

export default css`
.secondary-title {
  font-family: ${ font};
  color: ${ secondary};
  font-size: ${ secondarySize};
  font-weight: ${ secondaryWeight};
}`
