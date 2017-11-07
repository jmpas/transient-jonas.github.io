import css from 'styled-jsx/css'

import font, { secondarySize } from '../variables/font'
import { primary } from '../variables/colors'

export default css`
.paragraph {
  font-family: ${ font };
  font-size: ${ secondarySize }px;
  font-weight: 200;
  color: ${ primary };
  margin: 0;
  line-height: 1.4;
}`
