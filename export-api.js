const { getPostList, getMarkdownFrom } = require('./helpers/post')
const fs = require('fs')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const postsDataPromise = getPostList().then(posts => Promise.all(posts.map(post => getMarkdownFrom(post))))

function exportPostApi () {
  const promises = postsDataPromise
    .then(postsData => Promise.all(postsData.map(data => writeFile(`./out/api/post/${data.slug}.json`, JSON.stringify(data)))))
    .then(() => console.log('API endpoint exported: /api/post/<slug>.json'))
}

function exportPostsApi () {
  const promises = postsDataPromise
    .then(postsData => Promise.all(postsData.map(({ metaData, slug } = data) => Object.assign({}, { slug }, metaData))))
    .then(postsData => writeFile('./out/api/posts.json', JSON.stringify({ posts: postsData })))
    .then(() => console.log('API endpoint exported: /api/posts.json'))
}

exportPostApi()
exportPostsApi()

