import css from 'styled-jsx/css'

import font, { primarySize, primaryWeight } from '../variables/font'
import { primary } from '../variables/colors'
import { medium } from '../variables/layout-spacing'

export default css`
.primary-title {
  font-family: ${ font };
  color: ${ primary };
  font-size: ${ primarySize };
  font-weight: ${ primaryWeight };
  margin: 0 0 ${ medium }px 0;
  overflow: hidden;
}`
