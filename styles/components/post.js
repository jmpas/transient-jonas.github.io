import font from '../variables/font'
import { primary } from '../variables/colors'
import { big, medium } from '../variables/layout-spacing'

export default `
.post-container p {
  font-family: ${ font };
  font-size: 20px;
  font-weight: 200;
  color: ${ primary };
  line-height: 32px;
  font-weight: 300;
  padding: 0 ${ big }px;
}

.post-container h1 {
  font-family: ${ font };
  font-size: 40px;
  font-weight: 600;
  padding: 0 ${ big }px;
}

.post-container h2 {
  font-family: ${ font };
  font-size: 32px;
  font-weight: 600;
  padding: 0 ${ big }px;
}

.post-container h4 {
  font-family: ${ font };
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  color: #333;
  padding: 0 ${ big }px;
}

.post-container strong {
  font-weight: 600;
  font-family: ${ font };
}

.post-container time {
  font-family: ${ font };
  font-size: 15px;
  font-weight: 300;
  color: #515151;
  text-transform: uppercase;
  padding: 0 ${ big }px;
}

.post-container ul {
  list-style: inside circle !important;
  color: #666;
  font-size: 18px;
  font-weight: 200;
  padding: 0 ${ big }px !important;
}

.post-container ol {
  color: #666;
  font-size: 18px;
  font-weight: 200;
  padding: 0 ${ big }px !important;
  list-style: inside decimal;
}

.post-container blockquote {
  padding: 0 0 0 30px;
  color: #999;
  border-left: 10px solid #e5e5e5;
  margin: 0 70px;
}

.post-container blockquote p {
  padding: 0;
}

.post-container pre {
  padding: 50px ${ big }px;
}

.post-container pre code {
  padding: 0;
  font-size: 100%;
  color: inherit;
  background-color: transparent;
  color: #fff;
}

.post-container code {
  color: #fff;
  background-color: #7f7f7f;
  padding: 2px 3px;
  font-size: 13px;
}

.post-container a {
  font-family: ${ font };
  font-size: 20px;
  font-weight: 300;
  color: #268bd2;
}`
