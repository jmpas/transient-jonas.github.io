import { big } from '../variables/layout-spacing'

import css from 'styled-jsx/css'

export default css`
.logo {
  position: relative;
  height: 50px;
  width: 50px;
  left: 0;
  top: 0;
  opacity: 1;
}

.logo.nav-mode.blog {
  width: 700px;
  height: 700px;

  transition width 1s .2s cubic-bezier(.7, .3, 0, 1), height 1s .2s cubic-bezier(.7, .3, 0, 1);
}

.logo.nav-mode.photography {
  width: 450px;
  height: 450px;

  transition width 1s .2s cubic-bezier(.7, .3, 0, 1), height 1s .2s cubic-bezier(.7, .3, 0, 1);
}

.logo.nav-mode.photography .polygon {
  border-radius: 50%;
}

.logo.nav-mode {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
  z-index: 1;
  opacity: 0;

  animation: 2s fadeIn ease forwards 1.6s;
  transition width 1s .5s ease, height 1s .5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 780px) {
  .logo.nav-mode {
    width: 200px;
    height: 200px;
  }

  .logo.nav-mode.blog {
    width: 300px;
    height: 300px;
  }

  .logo.nav-mode.photography {
    width: 150px;
    height: 150px;
  }
}`
