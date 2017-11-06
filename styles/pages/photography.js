import css from 'styled-jsx/css'
import { medium, big, small } from '../variables/layout-spacing'

export default css`
:global(.photography-page) {
  z-index: 0;
}

.photography-page {
  padding: 0 ${ big }px;
}

@media (max-width: 500px) {
  .photography-page {
    padding: 0 ${ small }px;
  }

  :global(.photo-list) {
    margin-left: -${ small }px;
    width: 100vw;
  }
}`
