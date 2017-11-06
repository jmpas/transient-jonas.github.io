import css from 'styled-jsx/css'

import font from '../variables/font'
import { primary } from '../variables/colors'
import { big, medium, small } from '../variables/layout-spacing'

export default css`
@media (min-width: 500px) {
  .post-container pre {
    padding: 50px 0px;
  }
}

@media (max-width: 500px) {
  .post-container {
    padding: 0 ${ small }px;
  }

  .post-container pre {
    margin-left: -${ small }px;
    padding: 50px ${ small }px;
    width: 100vw;
  }
}

.post-container p {
  font-family: ${ font };
  font-size: 20px;
  font-weight: 200;
  color: ${ primary };
  line-height: 32px;
  font-weight: 300;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container h1 {
  font-family: ${ font };
  font-size: 40px;
  font-weight: 600;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container h2 {
  font-family: ${ font };
  font-size: 32px;
  font-weight: 600;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.post-container h4 {
  font-family: ${ font };
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
  font-family: ${ font };
}

.post-container time {
  display: block;
  font-family: ${ font };
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
  margin-right: auto
  padding-left: 0;
}

.post-container ol li {
  margin-bottom: .25rem;
}

.post-container blockquote {
  padding: 0 0 0 10px;
  color: #999;
  border-left: 10px solid #e5e5e5;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  transform: translateX(10px);
}

.post-container blockquote p {
  padding: 0;
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
  font-family: ${ font };
  font-size: 20px;
  font-weight: 300;
  color: #268bd2;
}

#disqus_thread {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}`
