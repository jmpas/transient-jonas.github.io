import { medium, big } from '../variables/layout-spacing'

export default `
.index-page {
  padding: ${ medium }px ${ big }px;
}

.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}`
