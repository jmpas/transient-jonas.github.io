import css from 'styled-jsx/css'

export default css`
.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
}`

