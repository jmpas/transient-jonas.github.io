import css from 'styled-jsx/css'

import { big, small } from '../styles/variables/layout-spacing'

export default css`
  .experiments-page {
    padding: 0 ${big}px;
  }

  @media (max-width: 500px) {
    .experiments-page {
      padding: 0 ${small}px;
    }
  }`
