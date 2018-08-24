import css from 'styled-jsx/css'

import { primary } from '../styles/variables/colors'
import font, { secondaryWeight } from '../styles/variables/font'

export default css`
.item-title {
  font-family: ${font};
  font-size: 20px;
  color: #fff;
  font-weight: ${secondaryWeight};
  margin: 0 0 15px 0;
}`
