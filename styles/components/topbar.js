import css from 'styled-jsx/css'

import { medium, big, small } from '../variables/layout-spacing'

export default css`
.topbar {
  padding: ${ medium }px ${ big }px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 500px) {
  .topbar {
    padding: ${ medium }px ${ small }px;
  }
}`
