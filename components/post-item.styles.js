import css from 'styled-jsx/css'

import { primary } from '../styles/variables/colors'

export default css`
.post-item {
  display: flex;
  cursor: pointer;
  background: ${primary};
  padding: 20px;
}

.post-content {
  flex-basis: 65%;
  padding: 0 0 0 5px;
}

.post-extra {
  flex-basis: 35%;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
}`
