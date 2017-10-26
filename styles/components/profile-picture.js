import css from 'styled-jsx/css'

export default css`
.profile-picture {
  position: absolute;
  left: -570px;
  top: -400px;
  z-index: -1;
  
  -webkit-mask-image: -webkit-gradient(linear, left top, right top, color-stop(0.7, rgba(0,0,0,1)), color-stop(0.95, rgba(0,0,0,0)));
}

.profile-picture img {
  height: 200vh;
}`
