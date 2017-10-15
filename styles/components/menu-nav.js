export default `
.menu-nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateY(-100%);
  z-index: 2;
  transition: transform .3s 1s cubic-bezier(.7, .3, 0, 1);
}

.menu-nav.visible {
  transform: translateY(0);
  transition: transform .3s .8s cubic-bezier(.7, .3, 0, 1);
}

.menu-nav ul {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}`
