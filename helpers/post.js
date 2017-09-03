const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const mdMeta = require('remarkable-meta')
const Remarkable = require('remarkable')

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)

const md = new Remarkable()
md.use(mdMeta)

const postsPath = 'posts/'

exports.getPostList = async function getPostList () {
  const posts = await readdir(postsPath)
  return posts.map(post => post.replace(/.md$/, ''))
}

exports.getPostListSync = function getPostListSync () {
  const posts = s.readdirSync(postsPath)
  console.log(posts)
  return posts.map(post => post.replace(/.md$/, ''))
}

exports.getMarkdownFromSync = function getMarkdownFromSync (postName) {
  const file = fs.readFileSync(path.resolve(postsPath, `${postName}.md`))
  const post = md.render(file.toString())
  return { post, metaData: md.meta }
}

exports.getMarkdownFrom = async function getMarkdownFrom (postName) {
  const file = await readFile(path.resolve(postsPath, `${postName}.md`))
  const post = md.render(file.toString())
  return { post, metaData: md.meta }
}
