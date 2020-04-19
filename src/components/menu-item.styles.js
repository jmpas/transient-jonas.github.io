import css from "styled-jsx/css";

import font from "../styles/variables/font";

export default css`
  .menu-item {
    position: relative;
    color: #aaa;
    font-size: 21px;
    font-family: ${font};
    flex-basis: 25%;
    text-align: center;
    cursor: pointer;
  }

  .menu-item.wip:hover::before {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.7, 0.3, 0, 1);
  }

  .menu-item.wip::before {
    content: "Coming Soon";
    padding: 10px 10px;
    width: 60%;
    color: #fff;
    font-weight: bold;
    font-size: 21px;
    font-family: ${font};
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    z-index: 1;
    transition: opacity 0.5s cubic-bezier(0.7, 0.3, 0, 1);
    background: #333;
  }

  .menu-item .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    text-transform: uppercase;
  }
`;
