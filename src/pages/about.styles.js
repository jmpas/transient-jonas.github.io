import css from "styled-jsx/css";
import { medium, big, small } from "../styles/variables/layout-spacing";

export default css`
  .about-page {
    padding: 0 0 0 500px;
  }

  .intro-text {
    display: flex;
  }

  .main-intro {
    flex-basis: 50%;
    padding: 0 ${medium}px 0 0;
  }

  .about-intro {
    max-width: 600px;
  }

  @media (max-width: 650px) {
    .intro-text {
      flex-direction: column;
    }

    .main-intro {
      padding: 0 0 ${medium}px 0;
    }
  }

  @media (max-width: 500px) {
    .about-page {
      padding: ${medium}px 0px;
    }
  }
`;
