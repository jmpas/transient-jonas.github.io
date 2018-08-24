import css from 'styled-jsx/css'

import { primary } from '../styles/variables/colors'

export default css`
.experiment-item {
  display: flex;
  cursor: pointer;
  flex-direction: column;
  background: ${primary};
  padding: 20px;
}

.experiment-image img {
  width: 100%;
  margin-bottom: 20px;
}

.experiment-content-wrapper {
  display: flex;
}

.experiment-content {
  flex-basis: 65%;
  padding: 0 0 0 5px;
}

.experiment-extra {
  flex-basis: 35%;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
}`
