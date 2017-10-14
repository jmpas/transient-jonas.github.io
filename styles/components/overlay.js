export default `
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  transform: translateX(-100%);
}

.overlay.visible {
  transform: translateX(0); 
}`
