import css from 'styled-jsx/css'
import { big, medium, small } from './variables/layout-spacing'

export default css`
a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.hidden {
  display: none;
}

body {
  height: 100%;
}

html {
  height: 100%;
}

.page-content {
  padding: 0 ${big}px ${medium}px ${big}px;
  position: relative;
}

@media (max-width: 500px) {
  .page-content {
    padding: 0 ${small}px ${medium}px ${small}px;
  }
}

.polygon {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 1;
  background: #333;
}

.polygon::before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0); top: 0; left: 0;
  position: absolute;
}`
