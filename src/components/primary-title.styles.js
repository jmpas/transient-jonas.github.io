import css from 'styled-jsx/css'

import font, { primarySize, primaryWeight } from '../styles/variables/font'
import { primary } from '../styles/variables/colors'
import { medium } from '../styles/variables/layout-spacing'

export default css`
.primary-title {
  font-family: ${ font};
  color: ${ primary};
  font-size: ${ primarySize};
  font-weight: ${ primaryWeight};
  margin: 0 0 ${ medium}px 0;
  overflow: hidden;
  line-height: 1.25;
}

@media (max-width: 780px) {
  .primary-title {
    font-weight: 300;
  }
}`
