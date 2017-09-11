const { getPostList, getMarkdownFrom } = require('./helpers/post')
const { createWriteStream } = require('fs')

async function getPostsData () {
  const postList = await getPostList()
  return postList.map(post => getMarkdownFrom(post))
}

async function exportPostApi () {
  const postsData = await getPostsData()

  const promises = postsData.map(async data => {
    const post = await data
    const ws = createWriteStream(`./out/api/post/${post.slug}.json`)
    ws.write(JSON.stringify(post))
    ws.end()
  })

  await Promise.all(promises)
}

async function exportPostsApi () {
  const ws = createWriteStream(`./out/api/posts.json`)
  const postsData = await getPostsData()

  ws.write('{ posts: [')

  const promises = postsData
    .map(async data => {
      const { slug, metaData } = await data
      return Object.assign({}, { slug }, metaData)
    })
    .map(async post => ws.write(`${JSON.stringify(await post)},`))

	await Promise.all(promises)

  ws.write('] }')
  ws.end()
}

exportPostApi().then(() => console.log('API endpoint exported: /api/post/<slug>.json'))
exportPostsApi().then(() => console.log('API endpoint exported: /api/posts.json'))

