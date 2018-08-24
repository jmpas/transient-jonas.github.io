import css from 'styled-jsx/css'

import font from '../styles/variables/font'
import { primary, secondary } from '../styles/variables/colors'

export default css`
.post-tag {
  font-family: ${font};
  font-size: 12px;
  font-weight: 200;
  color: #eee;
  border: 1px #e9e9e9 solid;
  margin: 0 5px 5px 0;
  padding: 3px;
}

@media (max-width: 780px) {
  .post-tag {
    font-weight: 300;
  }
}`
