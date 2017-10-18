import css from 'styled-jsx/css'

export default css`
.menu-button {
  position: relative;
  height: 50px;
  width: 50px;
  background: transparent;
  z-index: 3;
}

.menu-bar-1 {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 20px;
  height: 2px;
  background: #333;
  transition: transform .3s ease-out;
}

.menu-bar-2 {
  position: absolute;
  top: auto;
  bottom: 20px;
  left: 10px;
  width: 20px;
  height: 2px;
  background: #333;
  transition: transform .3s ease-out;
}

.menu-button input[type=checkbox] {
  position: relative;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

input[type=checkbox]:checked ~ .menu-bar-1 {
  transform: translateY(4px) rotate(135deg);
}

input[type=checkbox]:checked ~ .menu-bar-2 {
  transform: translateY(-4px) rotate(45deg);
}`
