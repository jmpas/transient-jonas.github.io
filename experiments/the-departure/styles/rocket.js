import css from 'styled-jsx/css'

export default css`
.rocket.part-1 {
  clip-path: polygon(
    50% 95%,
    50.2% 94%,
    50.6% 93%,
    50.6% 88%,
    51.2% 85%,
    51.35% 84.5%,
    51.5% 85%,
    52.1% 88%,
    52.1% 93%,
    52.5% 94%,
    52.7% 95%,
    50% 95%
  );
}
.rocket.part-1.active {
 clip-path: polygon(
    50% 10.5%,
    50.2% 9.5%,
    50.6% 8.5%,
    50.6% 3.5%,
    51.2% 0.5%,
    51.35% 0%,
    51.5% 0.5%,
    52.1% 3.5%,
    52.1% 8.5%,
    52.5% 9.5%,
    52.7% 10.5%,
    50% 10.5%
  );
  
  transition: clip-path 120s linear, background-color 2s cubic-bezier(.7, .3, 0, 1);
}

.rocket.part-2 {
  clip-path: polygon(
    50.7% 95.5%,
    50.7% 90%,
    51.2% 89%,
    51.33% 88.8%,
    52% 90%,
    52% 95.5%
  );
}
.rocket.part-2.active {
  background: #444;
  clip-path: polygon(
    50.7% 11%,
    50.7% 5.5%,
    51.2% 4.5%,
    51.33% 4.3%,
    52% 5.5%,
    52% 11%
  );

  transition: clip-path 120s linear;
}`
