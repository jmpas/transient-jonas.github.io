import css from 'styled-jsx/css'

export default css`
.profile-picture {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  
  -webkit-mask-image: -webkit-gradient(linear, left top, right top, color-stop(0.7, rgba(0,0,0,1)), color-stop(0.95, rgba(0,0,0,0)));
}

.profile-picture img {
  height: 100vh;
  opacity: 0.4;
}

@media (max-width: 500px) {
  .profile-picture {
    position: fixed;
  }

  .profile-picture img {
    opacity: 0.2;
  }
}`
