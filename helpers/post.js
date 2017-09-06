const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const mdMeta = require('remarkable-meta')
const Remarkable = require('remarkable')

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const access = promisify(fs.access)

const md = new Remarkable()
md.use(mdMeta)

const postsPath = 'posts/'

exports.exists = async function exists (postName) {
  try {
    await access(path.resolve(postsPath, `${postName}.md`))
    return true
  } catch(err) {
    return false
  }
}

exports.getPostList = async function getPostList () {
  const posts = await readdir(postsPath)
  return posts.map(post => post.replace(/.md$/, ''))
}

exports.getPostListSync = function getPostListSync () {
  const posts = fs.readdirSync(postsPath)
  return posts.map(post => post.replace(/.md$/, ''))
}

exports.getMarkdownFromSync = function getMarkdownFromSync (postName) {
  const file = fs.readFileSync(path.resolve(postsPath, `${postName}.md`))
  const post = md.render(file.toString())
  return { post, metaData: md.meta, slug: postName }
}

exports.getMarkdownFrom = async function getMarkdownFrom (postName) {
  const file = await readFile(path.resolve(postsPath, `${postName}.md`))
  const post = md.render(file.toString())
  return { post, metaData: md.meta, slug: postName }
}
