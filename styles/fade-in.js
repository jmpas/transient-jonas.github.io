import css from 'styled-jsx/css'

export default css`
.root, .fade-in {
  opacity: 0;

  animation: 2s fadeIn ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`
