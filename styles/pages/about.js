import css from 'styled-jsx/css'
import { medium, big } from '../variables/layout-spacing'

export default css`
:global(.page-container) {
  overflow-y: hidden !important;
}

:global(.logo) {
  margin-left: 400px;
}

.about-page {
  padding: 0 0 0 ${ big + 400 }px;
}

.intro-text {
  width: 400px;
}

@media (max-width: 500px) {
  .about-page {
    padding: ${ medium }px 30px;
  }
}`
