const { writeFile } = require('fs')
const { promisify } = require('util');
const fetch = require('isomorphic-fetch')
const { spawn } = require('child_process')
spawn('mkdir', ['-p', 'out/api/post'])

const { getPostList, getMarkdownFrom, formatDate, sortPosts } = require('./helpers/post')
const { getExperimentsList } = require('./helpers/experiment')
const write = promisify(writeFile)

let postsList = null
let server = null

async function getPostsList() {
  if (postsList) return postsList

  try {
    const res = await fetch('http://localhost:3000/api/posts.json')
    return postsList = (await res.json()).posts
  } catch (err) {
    console.error('Make sure to have the backend running on localhost:3000')
    process.exit(1)
  }
}

async function exportPostApi() {
  const postsList = await getPostsList()

  const promises = postsList.map(async ({ slug }) => {
    const res = await fetch(`http://localhost:3000/api/post/${slug.toLowerCase()}`)
    const post = await res.text()

    await write(`./out/api/post/${slug}.json`, post)
  })

  return Promise.all(promises)
}

async function exportPostsApi() {
  const postsList = await getPostsList()
  await write(`./out/api/posts.json`, JSON.stringify({ posts: postsList }))
}

async function exportExperimentsApi() {
  const experiments = await getExperimentsList()
  await write(`./out/api/experiments.json`, JSON.stringify({ experiments }))
}

module.exports = Promise.all([
  exportPostApi().then(() => console.log('API endpoint exported: /api/post/<slug>.json')),
  exportPostsApi().then(() => console.log('API endpoint exported: /api/posts.json')),
  exportExperimentsApi().then(() => console.log('API endpoint exported: /api/experiments.json'))
])

