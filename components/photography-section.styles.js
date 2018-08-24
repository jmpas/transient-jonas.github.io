import css from 'styled-jsx/css'
import { small } from '../styles/variables/layout-spacing'

export default css`
.photography-page {
  z-index: 0;
}

.grid-sizer, :global(.photo-item) {
  width: 33.33%
}

@media (max-width: 1200px) {
  .grid-sizer, :global(.photo-item) {
    width: 50%;
  }
}

@media (max-width: 780px) {
  .grid-sizer, :global(.photo-item) {
    width: 100%;
  }
}

@media (max-width: 500px) {
  :global(.photo-list) {
    margin-left: -${small}px;
    width: 100vw;
  }

  .grid-sizer, :global(.photo-item) {
    width: 100vw;
  }
}`
