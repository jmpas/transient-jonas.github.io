export default `
.menu-nav .menu-item {
  transform: translateX(-5%);
  opacity: 0;

  transition: transform 1s ease, opacity .3s ease;
}

.menu-nav.visible .menu-item {
  transform: translateX(0);
  opacity: 1;

  transition: transform 1s .9s ease, opacity 0.3s .9s ease;
}`
