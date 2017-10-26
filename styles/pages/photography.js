import css from 'styled-jsx/css'
import { medium, big } from '../variables/layout-spacing'

export default css`
:global(.photography-page) {
  z-index: 0;
}

.photography-page {
  padding: ${ medium }px ${ big }px;
}

@media (max-width: 500px) {
  .photography-page {
    padding: ${ medium }px 30px;
  }
}

.photo-list {
  column-count: 2;
  column-gap: 1em;
}`
