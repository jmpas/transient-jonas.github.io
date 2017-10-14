export default `
.menu-nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  z-index: 2;
}

.menu-nav.visible {
  transform: translateX(0); 
}

.menu-nav ul {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}`
