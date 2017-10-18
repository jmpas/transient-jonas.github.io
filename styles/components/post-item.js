import css from 'styled-jsx/css'

export default css`
.post-item {
  height: 200px;
  width: 350px;
  display: flex;
  margin-bottom: 10px;
}

@media (min-width: 1100px) and (max-width: 1190px) {
  .post-item {
    width: 450px;
  }
}

@media (min-width: 1000px) and (max-width: 1100px) {
  .post-item {
    width: 400px;
  }
}

@media (min-width: 900px) and (max-width: 1000px) {
  .post-item {
    width: 350px;
  }
}

@media (min-width: 780px) and (max-width: 840px) {
  .post-item {
    width: 300px;
  }
}

@media (max-width: 780px) {
  .post-item {
    width: 100%;
  }
}

.post-content {
  flex-basis: 65%;
  padding: 0 0 0 5px;
}

.post-extra {
  flex-basis: 35%;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
}`
