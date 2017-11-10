import css from 'styled-jsx/css'

export default css`
.smoke.polygon {
  transition: clip-path 120s linear, background-color 2s cubic-bezier(.7, .3, 0, 1);
}

.smoke-1 {
  clip-path: polygon(
    51.1% 95%,
    51.5% 95%,
    51.1% 100%,
    51.5% 100%
  );
}

.smoke-1.active {
  background: rgba(228, 221, 210, 0.6);
  clip-path: polygon(
    51.1% 10.5%,
    51.5% 10.5%,
    60% 100%,
    40% 100%
  );
}

.smoke-2 {
  clip-path: polygon(
    51.3% 96%,
    51.3% 100%,
    51.3% 100%
  );
}

.smoke-2.active {
  background: rgba(218, 211, 200, 0.6);
  clip-path: polygon(
    51.3% 10.8%,
    35.75% 100%,
    49% 100%
  );
}

.smoke-3 {
  clip-path: polygon(
    51.3% 96%,
    51.3% 100%,
    51.3% 100%
  );
}

.smoke-3.active {
  background: rgba(218, 211, 200, 0.6);
  clip-path: polygon(
    51.3% 10.8%,
    65% 100%,
    51% 100%
  );
}

.smoke-4 {
  background: rgba(228, 221, 210, 0.6);
  clip-path: polygon(
    0% 100%,
    35.5% 85%,
    37% 85%,
    42% 84%,
    43% 83%,
    44% 83%,
    45% 83.3%,
    46% 84%,
    48% 86%,
    49% 86%,
    50% 88%,
    55% 88%,
    100% 100%
  );
}

.smoke-4.active {
  background: rgba(228, 221, 210, 0.6);
  clip-path: polygon(
    0% 50%,
    35.5% 35%,
    37% 35%,
    42% 34%,
    43% 33%,
    44% 33%,
    45% 33.3%,
    46% 34%,
    48% 36%,
    49% 36%,
    50% 38%,
    55% 38%,
    100% 50%
  );
  animation: 20s motionMovement2 linear infinite alternate;
}

.smoke-5 {
  background: rgba(228, 221, 210, 0.6);
  clip-path: polygon(
    0% 100%,
    35.5% 95%,
    45.5% 95%,
    55.5% 85%,
    57% 85%,
    62% 84%,
    63% 83%,
    64% 83%,
    65% 83.3%,
    66% 84%,
    68% 86%,
    69% 86%,
    70% 88%,
    75% 88%,
    100% 100%
  );
}

.smoke-5.active {
  background: rgba(228, 221, 210, 0.6);
  clip-path: polygon(
    0% 50%,
    35.5% 45%,
    45.5% 45%,
    55.5% 35%,
    57% 35%,
    62% 34%,
    63% 33%,
    64% 33%,
    65% 33.3%,
    66% 34%,
    68% 36%,
    69% 36%,
    70% 38%,
    75% 38%,
    100% 50%
  );

  animation: 20s motionMovement linear infinite alternate;
}

@keyframes motionMovement {
  0% {
    transform: translateX(-5%)
  }
  100% {
    transform: translateX(5%)
  }
}

@keyframes motionMovement2 {
  0% {
    transform: translateX(5%)
  }
  100% {
    transform: translateX(-5%)
  }
}`
