import css from 'styled-jsx/css'

export default css`
.text-effect {
  transform: translateX(-50%);
  display: inline-block;
  position: relative;
  transition: transform 0.4s ease-out;

  animation-delay: .5s;
  animation-duration: 1s;
  animation-name: textEffect;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(.7, .3, 0, 1);
}

@keyframes textEffect {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.text-effect::after {
  content: "";
  width: 100%;
  background: linear-gradient(to right, #333, #333) no-repeat 0 0;
  height: 100%;
  background-size: 100% 100%;
  position: absolute;
  display: inline;
  transform: translateX(-50%);
  transition: background-size 0.4s ease-out, transform 0.4s ease-out;

  animation: 1s cubic-bezier(.7, .3, 0, 1) .5s forwards blockEffect, .8s ease-out 2s infinite alternate blinkEffect;
}

@keyframes blockEffect {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-199.9%);
  }
}

@keyframes blinkEffect {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}`
