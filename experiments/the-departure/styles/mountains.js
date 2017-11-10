import css from 'styled-jsx/css'


export default css`
.mountain.big-left {
  clip-path: polygon(-10% 100%, 20% 100%, 30% 100%, 0% 100%);
}
.mountain.big-left.active {
  background: rgb(192, 159, 128);
  clip-path: polygon(-10% 0%, 20% 30%, 30% 100%, 0% 100%);
}

.mountain.big-left-2 {
  clip-path: polygon(0% 100%, 20% 100%, 30% 100%, 50% 100%);
}
.mountain.big-left-2.active {
  background: rgb(192, 159, 128);
  clip-path: polygon(0% 30%, 20% 28%, 30% 37%, 50% 100%);
}

.mountain.big-left-3 {
  clip-path: polygon(30% 100%, 38% 100%, 45% 100%, 60% 100%, 70% 100%, 0% 100%);
}
.mountain.big-left-3.active {
  background: rgb(192, 159, 128);
  clip-path: polygon(30% 38%, 38% 45%, 45% 48%, 60% 70%, 70% 100%, 0% 100%);
}

.mountain.big-left-4 {
  clip-path: polygon(
    4% 100%,
    8% 100%,
    10% 100%,
    11% 100%,
    13% 100%,
    15% 100%,
    15.2% 100%,
    16% 100%,
    18% 100%,
    20% 100%,
    30% 100%,
    60% 100%,
    10% 100%,
    0% 100%
  );
}
.mountain.big-left-4.active {
  background: rgb(192, 159, 128);
  clip-path: polygon(
    4% 20%,
    8% 10%,
    10% 13%,
    11% 12%,
    13% 15%,
    15% 15%,
    15.2% 15.5%,
    16% 15.5%,
    18% 19%,
    20% 21%,
    30% 30%,
    60% 100%,
    10% 100%,
    0% 100%
  );
}

.mountain-detail.big-left {
  clip-path: polygon(
    -10% 100%,
    2% 100%,
    3% 100%,
    4% 100%,
    4% 100%,
    8% 100%,
    8.5% 100%,
    8.5% 100%,
    9.5% 100%,
    22% 100%,
    19.5% 100%,
    17.5% 100%,
    15% 100%,
    25% 100%,
    20% 100%,
    18% 100%
  );
}
.mountain-detail.big-left.active {
  background: rgba(210, 187, 161, 0.2);
  clip-path: polygon(
    -10% 0%,
    2% 22%,
    3% 22%,
    4% 20%,
    4% 22%,
    8% 35%,
    8.5% 36%,
    8.5% 40%,
    9.5% 42%,
    22% 58%,
    19.5% 43%,
    17.5% 42%,
    15% 35%,
    25% 38%,
    20% 28%,
    18% 28%
  );
}

.mountain-detail.big-left-4 {
  clip-path: polygon(
    8% 100%,
    10% 100%,
    11% 100%,
    13% 100%,
    15% 100%,
    15.2% 100%,
    16% 100%,
    18% 100%,
    20% 100%,
    30% 100%,
    21% 100%,
    10% 100%
  );
}
.mountain-detail.big-left-4.active {
  background: rgba(210, 187 , 161, 0.2);
  clip-path: polygon(
    8% 10%,
    10% 13%,
    11% 12%,
    13% 15%,
    15% 15%,
    15.2% 15.5%,
    16% 15.5%,
    18% 19%,
    20% 21%,
    30% 30%,
    21% 25%,
    10% 16%
  );
}

.mountain.big-right {
  clip-path: polygon(
    43% 100%,
    50% 100%,
    65% 100%,
    70% 100%,
    73% 100%,
    74% 100%,
    77% 100%,
    78% 100%,
    79% 100%,
    79.5% 100%,
    80% 100%,
    81% 100%,
    85% 100%,
    86% 100%,
    90% 100%,
    90% 100%,
    93% 100%,
    94% 100%,
    95% 100%,
    97% 100%,
    100% 100%,
    100% 100%,
    43% 100%
  );
  transition: clip-path 4s 4s cubic-bezier(.7, .3, 0, 1), background-color 2s cubic-bezier(.7, .3, 0, 1);
}
.mountain.big-right.active {
  background: rgb(200, 173, 144);
  clip-path: polygon(
    43% 50%,
    50% 50%,
    65% 42%,
    70% 42%,
    73% 40%,
    74% 41%,
    77% 39%,
    78% 37.6%,
    79% 37.6%,
    79.5% 37.8%,
    80% 35%,
    81% 35.5%,
    85% 34.5%,
    86% 32%,
    90% 28%,
    90% 25%,
    93% 15%,
    94% 14%,
    95% 10%,
    97% 10.5%,
    100% 13%,
    100% 100%,
    43% 100%
  );
}

.mountain-detail.big-right {
  clip-path: polygon(
    94% 100%,
    95% 100%,
    97% 100%,
    110% 100%,
    98% 100%,
    97.5% 100%,
    95.5% 100%,
    96% 100%
  );
  transition: clip-path 4s 4s cubic-bezier(.7, .3, 0, 1), background-color 2s cubic-bezier(.7, .3, 0, 1);
}
.mountain-detail.big-right.active {
  background: rgba(255, 255, 255, 0.1);
  clip-path: polygon(
    94% 14%,
    95% 10%,
    97% 10.5%,
    110% 20%,
    98% 22%,
    97.5% 25%,
    95.5% 21%,
    96% 20%
  );
}

.mountain-detail.big-right-2 {
  clip-path: polygon(
    86% 100%,
    90% 100%,
    90% 100%,
    93% 100%,
    92% 100%,
    91% 100%,
    90.5% 100%
  );
  transition: clip-path 4s 4s cubic-bezier(.7, .3, 0, 1), background-color 2s cubic-bezier(.7, .3, 0, 1);
}
.mountain-detail.big-right-2.active {
  background: rgba(255, 255, 255, 0.1);
  clip-path: polygon(
    86% 32%,
    90% 28%,
    90% 25%,
    93% 30%,
    92% 32%,
    91% 37%,
    90.5% 34%
  );
}

.mountain.small-left {
  clip-path: polygon(
    -10% 100%,
    2% 100%,
    10% 100%,
    15% 100%,
    24% 100%,
    53% 100%,
    0% 100%
  );

  transition: clip-path 4s 10s cubic-bezier(.7, .3, 0, 1), background-color 2s cubic-bezier(.7, .3, 0, 1);
}
.mountain.small-left.active {
  background: rgb(109, 83, 75);
  clip-path: polygon(
    -10% 50%,
    2% 55%,
    10% 65%,
    15% 68%,
    24% 74%,
    53% 100%,
    0% 100%
  );
}

.mountain.small-right {
  clip-path: polygon(
    50% 100%,
    70% 100%,
    72% 100%,
    74% 100%,
    80% 100%,
    85% 100%,
    95% 100%,
    110% 100%,
    110% 100%
  );
  transition: clip-path 4s 15s cubic-bezier(.7, .3, 0, 1), background-color 2s cubic-bezier(.7, .3, 0, 1);
}
.mountain.small-right.active {
  background: rgb(109, 83, 75);
  clip-path: polygon(
    50% 100%,
    70% 70%,
    72% 68%,
    74% 68%,
    80% 67%,
    85% 67%,
    95% 65%,
    110% 40%,
    110% 100%
  );
}`
