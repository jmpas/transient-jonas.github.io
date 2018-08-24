import css from 'styled-jsx/css'

import font from '../styles/variables/font'

export default css`
.menu-item {
  position: relative;
  color: #aaa;
  font-size: 21px;
  font-family: ${font};
  flex-basis: 25%;
  text-align: center;
  cursor: pointer;
  transition: .5s background, color ease-out;
}

.menu-item:hover {
  color: #555;
  transition: background .5s cubic-bezier(.7, .3, 0, 1), color .5s cubic-bezier(.7, .3, 0, 1);
}

.menu-item.wip:hover::before {
  opacity: 1;
  transition: opacity .5s cubic-bezier(.7, .3, 0, 1);
}

.menu-item.wip::before {
  content: 'Coming Soon';
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
  transition: opacity .5s cubic-bezier(.7, .3, 0, 1);
  background: #333;
}

.menu-item .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

.menu-item .title .line {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #555, #555) no-repeat 0 0;
  background-size: 0% 2px;
  transition: background-size 0.4s ease-out;
}

.menu-item:hover .title .line {
  background-size: 100% 2px;
  transition: background 1s cubic-bezier(.7, .3, 0, 1);
}

.menu-item:hover .title .line {
  background-size: 100% 2px;
  transition: background 1s cubic-bezier(.7, .3, 0, 1);
}`
