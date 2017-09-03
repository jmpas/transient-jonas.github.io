const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { getMarkdownFrom } = require('./helpers/post')

app.prepare()
  .then(() => {
    const server = express()

    server.get('/:slug', async (req, res) => {
      const actualPage = '/post'
      const { slug } = req.params
      const { post, metaData } = await getMarkdownFrom(slug)
      const queryParams = { slug, post, metaData }
      app.render(req, res, actualPage, queryParams)
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
