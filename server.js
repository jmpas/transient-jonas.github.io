const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { getMarkdownFrom, exists } = require('./helpers/post')

app.prepare()
  .then(() => {
    const server = express()

    server.get('/api/post/:slug', async (req, res) => {
      const { slug } = req.params
      const postData = await getMarkdownFrom(slug)

      res.json(postData)
    })

    server.get('/:slug', async (req, res) => {
      const { slug } = req.params

      if (!(await exists(slug))) return handle(req, res)

      const actualPage = '/post'
      const postData = await getMarkdownFrom(slug)

      app.render(req, res, actualPage, postData)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
