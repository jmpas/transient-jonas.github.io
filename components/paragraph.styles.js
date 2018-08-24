import css from 'styled-jsx/css'

import font, { secondarySize } from '../styles/variables/font'
import { primary } from '../styles/variables/colors'

export default css`
.paragraph {
  font-family: ${font};
  font-size: ${secondarySize}px;
  font-weight: 200;
  color: ${primary};
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 780px) {
  .paragraph {
    font-weight: 300;
  }
}`
