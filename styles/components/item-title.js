import css from 'styled-jsx/css'

import { primary } from '../variables/colors'
import font, { secondaryWeight } from '../variables/font'

export default css`
.root {
  font-family: ${ font };
  font-size: 20px;
  color: ${ primary };
  font-weight: ${ secondaryWeight };
  margin: 0 0 15px 0;
}`
