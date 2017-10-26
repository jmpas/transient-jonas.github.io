import css from 'styled-jsx/css'

import font, { primarySize, primaryWeight } from '../variables/font'
import { primary } from '../variables/colors'

export default css`
.primary-title {
  font-family: ${ font };
  color: ${ primary };
  font-size: ${ primarySize };
  font-weight: ${ primaryWeight };
}`
