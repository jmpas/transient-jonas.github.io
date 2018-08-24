import css from 'styled-jsx/css'

export default css`
.menu-nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateY(-100%);
  z-index: 2;
  transition: transform .6s .8s cubic-bezier(.7, .3, 0, 1);
}

.menu-nav.visible {
  transform: translateY(0);
  transition: transform .6s cubic-bezier(.7, .3, 0, 1);
}

.menu-nav ul {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.menu-nav :global(.overlay) {
  transform: translateY(0);
}

.menu-nav :global(.logo.blog) {
  width: 700px;
  height: 700px;

  transition width 1s .2s cubic-bezier(.7, .3, 0, 1), height 1s .2s cubic-bezier(.7, .3, 0, 1);
}

.menu-nav :global(.logo.photography) {
  width: 450px;
  height: 450px;

  transition width 1s .2s cubic-bezier(.7, .3, 0, 1), height 1s .2s cubic-bezier(.7, .3, 0, 1);
}

.menu-nav :global(.logo.photography .polygon) {
  border-radius: 50%;
}

.menu-nav :global(.logo) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
  opacity: 0;

  transition: opacity .3s ease;
}

.menu-nav.visible :global(.logo) {
  opacity: 1;

  transition: opacity 2s 1.3s ease, width 1s .3s ease, height 1s .3s ease;
}

@media (max-width: 780px) {
  .menu-nav :global(.logo) {
    width: 200px;
    height: 200px;
  }

  .menu-nav :global(.logo.blog) {
    width: 300px;
    height: 300px;
  }

  .menu-nav :global(.logo.photography) {
    width: 150px;
    height: 150px;
  }

  .menu-nav ul {
    flex-direction: column;
  }
}`
