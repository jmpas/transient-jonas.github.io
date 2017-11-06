import css from 'styled-jsx/css'
import { medium, big, small } from '../variables/layout-spacing'

export default css`
.index-page {
  padding: 0 ${ big }px;
}

@media (max-width: 500px) {
  .index-page {
    padding: 0 ${ small }px;
  }
}

.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}`
