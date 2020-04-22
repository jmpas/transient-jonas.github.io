import css from "styled-jsx/css";
import { medium, big, small } from "../styles/variables/layout-spacing";

export default css`
  .about-page {
    display: flex;
  }

  .profile-picture {
    position: relative;
    overflow: hidden;
    height: calc(100vh - 30px);
    margin-top: -110px;
    bottom: -30px;
  }

  .intro-text {
    display: flex;
  }

  .about-intro {
    max-width: 600px;
  }


  @media (max-width: 900px) {
    .profile-picture {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      margin-top: 0;
      height: 100vh;
      opacity: .5;
      transition: 2.5s opacity cubic-bezier(.7, .3, 0, 1);
    }
  }

  @media (max-width: 500px) {
    .about-page {
      padding: ${medium}px 0px;
    }
  }
`;
