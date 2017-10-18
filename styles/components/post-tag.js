import css from 'styled-jsx/css'

import font from '../variables/font'
import { primary, secondary } from '../variables/colors'

export default css`
.root {
  font-family: ${ font };
  font-size: 12px;
  font-weight: 200;
  color: ${ secondary };
  border: 1px #e9e9e9 solid;
  margin: 0 5px 5px 0;
  padding: 3px;
}`
