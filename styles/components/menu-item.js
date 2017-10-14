import font from '../variables/font'

export default `
.menu-item {
  position: relative;
  color: #aaa;
  font-size: 21px;
  padding: 30px;
  font-family: ${ font };
  flex-basis: 25%;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: .5s background, color ease-out; 
}

.menu-item:hover {
  background: rgba(200, 200, 200, 0.3);
  color: #333;
  transition: background .5s cubic-bezier(.7, .3, 0, 1), color .5s cubic-bezier(.7, .3, 0, 1);
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
  background: linear-gradient(to right, #333, #333) no-repeat 0 0;
  background-size: 0% 2px;
  transition: background-size 0.4s ease-out;
}

.menu-item:hover .title .line {
  background-size: 100% 2px;
  transition: background 1s cubic-bezier(.7, .3, 0, 1);
}`
