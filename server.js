const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { getMarkdownFrom, getPostList, exists, sortPosts, formatDate } = require('./helpers/post')

module.exports = app.prepare()
  .then(() => {
    const server = express()

    server.get('/api/posts.json', async (req, res) => {
      const posts = await getPostList()

      const promises = posts
        .map(async post => {
          const { metaData, slug } = await getMarkdownFrom(post)

          return {
            slug,
            formattedDate: formatDate(metaData.date),
            ...metaData
          }
        })

      const postsData = await Promise.all(promises)
      res.json({ posts: sortPosts(postsData) })
    })

    server.get('/api/post/:slug', async (req, res) => {
      const { slug: fileName } = req.params
      const slug = fileName.replace('.json', '')

      if (!(await exists(slug))) return handle(req, res)

      const postData = await getMarkdownFrom(slug)
      return res.json({
        date: formatDate(postData.metaData.date),
        ...postData
      })
    })

    server.get('/:slug', async (req, res) => {
      const { slug } = req.params

      if (!(await exists(slug))) return handle(req, res)

      const actualPage = '/post'
      return app.render(req, res, actualPage, { slug })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })

    return server
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

