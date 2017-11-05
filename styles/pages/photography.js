import css from 'styled-jsx/css'
import { medium, big } from '../variables/layout-spacing'

export default css`
:global(.photography-page) {
  z-index: 0;
}

.photography-page {
  padding: 0 ${ big }px;
}

@media (max-width: 500px) {
  .photography-page {
    padding: 0 30px;
  }
}

.photo-list {
  column-count: 2;
  column-gap: 1em;
}`
