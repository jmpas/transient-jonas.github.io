import css from 'styled-jsx/css'

export default css`
.page-container {
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  overflow-y:scroll;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.page-content.hidden {
  display: none;
}`
