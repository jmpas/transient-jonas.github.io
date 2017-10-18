import css from 'styled-jsx/css'

import { medium, big } from '../variables/layout-spacing'

export default css`
.topbar {
  padding: ${ medium }px ${ big }px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 500px) {
  .topbar {
    padding: ${ medium }px 30px;
  }
}`
