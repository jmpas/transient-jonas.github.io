import css from 'styled-jsx/css'

export default css`
.profile-picture {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  height: 100vh;

  -webkit-mask-image: -webkit-gradient(linear, left top, right top, color-stop(0.7, rgba(0,0,0,1)), color-stop(0.95, rgba(0,0,0,0)));
}

.profile-picture img {
  height: 100vh;
  opacity: 0;

  transition: 2.5s opacity cubic-bezier(.7, .3, 0, 1);
}

.profile-picture img.visible {
  opacity: .8;

  transition: 2.5s opacity cubic-bezier(.7, .3, 0, 1);
}

@media (max-width: 500px) {
  .profile-picture img.visible {
    opacity: .4;
    transition: 2.5s opacity cubic-bezier(.7, .3, 0, 1);
  }
}`
