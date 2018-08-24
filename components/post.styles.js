import css from 'styled-jsx/css'

import font from '../styles/variables/font'
import { primary } from '../styles/variables/colors'
import { big, medium, small } from '../styles/variables/layout-spacing'

export default css`
.post-container p {
  font-family: ${font};
  font-size: 20px;
  font-weight: 200;
  color: ${primary};
  line-height: 32px;
  font-weight: 300;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container h1 {
  font-family: ${font};
  font-size: 40px;
  font-weight: 600;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container h2 {
  font-family: ${font};
  font-size: 32px;
  font-weight: 600;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container h4 {
  font-family: ${font};
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  color: #333;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container strong {
  font-weight: 600;
  font-family: ${font};
}

.post-container time {
  display: block;
  font-family: ${font};
  font-size: 15px;
  font-weight: 300;
  color: #515151;
  text-transform: uppercase;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container ul {
  list-style: inside circle !important;
  color: #666;
  font-size: 18px;
  font-weight: 200;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto
}

.post-container ol {
  color: #666;
  font-size: 18px;
  font-weight: 200;
  list-style: inside decimal;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
}

.post-container ol, .post-container li {
  margin-bottom: .5rem;
}

.post-container blockquote {
  padding: 0 0 0 10px;
  color: #999;
  border-left: 10px solid #e5e5e5;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container blockquote p {
  color: #999;
  padding: 0;
}

.post-container pre {
  margin-left: -${small}px;
  padding: 50px ${small}px;
  width: 100vw;
  box-sizing: border-box;
}

.post-container pre code {
  display: block;
  padding: 0;
  font-size: 16px;
  color: inherit;
  background-color: transparent;
  color: #fff;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container code {
  color: #fff;
  background-color: #7f7f7f;
  padding: 2px 3px;
  font-size: 13px;
}

.post-container a {
  font-family: ${font};
  font-size: 20px;
  font-weight: 300;
  color: #268bd2;
}

#disqus_thread {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.share {
  text-align: center;
  border-top: 1px solid #e5e5e5;
  margin-top: 55px;
}

.share svg {
  margin: 2rem .938rem;
  width: 35px;
  height: 35px;
}

@media (min-width: 500px) {
  .post-container pre {
    padding: 50px ${big}px;
    margin-left: -${big}px;
  }

  .post-container blockquote {
    transform: translateX(10px);
  }
}`

