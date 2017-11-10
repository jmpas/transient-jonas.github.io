import css from 'styled-jsx/css'

export default css`
.cloud {
  opacity: 0.7;
}

.photography-piece.polygon.cloud.step-1:nth-child(11) {
  clip-path: polygon(50% 34%, 20% 37%, 95% 37%);
  transition: clip-path 4s linear;
}

.photography-piece.polygon.cloud.step-2:nth-child(11) {
  clip-path: polygon(70% 34%, 40% 37%, 115% 37%);
  transition: clip-path 4s linear;
}

.photography-piece.polygon.cloud.step-1:nth-child(12) {
  clip-path: polygon(50% 28%, 20% 31%, 95% 31%);
  transition: clip-path 3s linear;
}

.photography-piece.polygon.cloud.step-2:nth-child(12) {
  clip-path: polygon(30% 28%, 0% 31%, 75% 31%);
  transition: clip-path 3s linear;
}`
