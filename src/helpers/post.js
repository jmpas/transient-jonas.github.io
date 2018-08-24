const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const mdMeta = require('remarkable-meta')
const Remarkable = require('remarkable')
const hljs = require('highlight.js')

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const access = promisify(fs.access)

const format = require('date-fns/format')
const compareDesc = require('date-fns/compare_desc')

const md = new Remarkable({
  html: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) { }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) { }

    return ''; // use external default escaping
  }
})
md.use(mdMeta)

const postsPath = 'posts/'

exports.exists = async function exists(postName) {
  try {
    await access(path.resolve(postsPath, `${postName}.md`))
    return true
  } catch (err) {
    return false
  }
}

exports.sortPosts = function sortPosts(posts) {
  return posts.sort((post1, post2) => compareDesc(new Date(post1.date), new Date(post2.date)))
}

exports.formatDate = function formatDate(date) {
  return format(date, 'DD MMM YYYY')
}

exports.getPostList = async function getPostList() {
  const posts = await readdir(postsPath)
  return posts.map(post => post.replace(/.md$/, ''))
}

exports.getMarkdownFrom = async function getMarkdownFrom(postName) {
  const file = await readFile(path.resolve(postsPath, `${postName}.md`))
  const post = md.render(file.toString())
  return { post, metaData: md.meta, slug: postName }
}
