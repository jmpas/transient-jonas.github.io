const { getPostList, getMarkdownFrom } = require('./helpers/post')
const fs = require('fs')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const promises = getPostList()
  .then(posts => Promise.all(posts.map(post => getMarkdownFrom(post))))
  .then(postsData => Promise.all(postsData.map(data => writeFile(`./out/api/post/${data.slug}.json`, JSON.stringify(data)))))
  .then(() => console.log('done'))
