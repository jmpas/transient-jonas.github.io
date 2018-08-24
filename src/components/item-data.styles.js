import css from 'styled-jsx/css'

import font from '../styles/variables/font'
import { secondary } from '../styles/variables/colors'

export default css`
.item-data {
  font-family: ${font};
  font-size: 12px;
  font-weight: 200;
  color: #eee;
  margin-bottom: 5px;
}

@media (max-width: 780px) {
  .item-data {
    font-weight: 300;
  }
}`
