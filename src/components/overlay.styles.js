import css from 'styled-jsx/css'

export default css`
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #333;
  transform: translateY(-100%);

  transition: transform 0.6s .9s cubic-bezier(.7, .3, 0, 1), background .5s cubic-bezier(.7, .3, 0, 1);
}

.overlay.visible {
  transform: translateY(0);

  transition: background .6s 1.2s cubic-bezier(.7, .3, 0, 1);
}

.polygon {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 1;
  background: #fff;

  transition: clip-path .6s .3s cubic-bezier(.7, .3, 0, 1), -webkit-clip-path .6s .3s cubic-bezier(.7, .3, 0, 1);
}

.overlay.visible .polygon {
  transition: clip-path .6s .5s cubic-bezier(.7, .3, 0, 1), -webkit-clip-path .6s .5s cubic-bezier(.7, .3, 0, 1);
}

.overlay .polygon:nth-child(1) {
  clip-path: polygon(0% 0%, 50% 0, 50% 0%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}
.overlay.visible .polygon:nth-child(1) {
  clip-path: polygon(0% 0%, 50% 100%, 50% 0%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}

.overlay .polygon:nth-child(2) {
  clip-path: polygon(0% 100%, 0% 100%, 50% 100%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}
.overlay.visible .polygon:nth-child(2) {
  clip-path: polygon(0% 100%, 0% 0%, 50% 100%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}

.overlay .polygon:nth-child(3) {
  clip-path: polygon(100% 0%, 50% 0%, 50% 0%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}
.overlay.visible .polygon:nth-child(3) {
  clip-path: polygon(100% 0%, 50% 100%, 50% 0%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}

.overlay .polygon:nth-child(4) {
  clip-path: polygon(100% 100%, 100% 100%, 50% 100%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}
.overlay.visible .polygon:nth-child(4) {
  clip-path: polygon(100% 100%, 100% 0%, 50% 100%);
  -webkit-clip-path 4s cubic-bezier(.7, .3, 0, 1)
}`
