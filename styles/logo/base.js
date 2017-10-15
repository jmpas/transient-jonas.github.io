export default `
.logo {
  position: relative;
  height: 50px;
  width: 50px;
  z-index: 0;
  left: 0;
  top: 0;
  opacity: 1;
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
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`
