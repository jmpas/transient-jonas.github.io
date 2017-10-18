import css from 'styled-jsx/css'

import font from '../variables/font'
import { secondary } from '../variables/colors'

export default css`
.root {
  font-family: ${ font };
  font-size: 12px;
  font-weight: 200;
  color: ${ secondary };
  margin-bottom: 5px;
}
`
