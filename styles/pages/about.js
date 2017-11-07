import css from 'styled-jsx/css'
import { medium, big, small } from '../variables/layout-spacing'

export default css`
.about-page {
  padding: 0 ${ big }px 0 ${ big + 150 }px;
}

.intro-text {
  display: flex;
}

.main-intro {
  flex-basis: 50%;
  padding: 0 ${ medium }px 0 0;
}

.about-intro {
  flex-basis: 50%;
}

@media (max-width: 500px) {
  .intro-text {
    flex-direction: column;
  }

  .main-intro {
    padding: 0 0 ${ medium }px 0;
  }

  .about-page {
    padding: ${ medium }px ${ small }px;
  }
}`
