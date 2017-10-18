import css from 'styled-jsx/css'
import { medium, big } from '../variables/layout-spacing'

export default css`
.index-page {
  padding: ${ medium }px ${ big }px;
}

@media (max-width: 500px) {
  .index-page {
    padding: ${ medium }px 30px;
  }
}

.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}`
