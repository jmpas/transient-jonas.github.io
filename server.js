const express = require('express')
const next = require('next')
const { promisify } = require('util')
const fs = require('fs')
const path = require('path')

const readFile = promisify(fs.readFile)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { getMarkdownFrom, exists } = require('./helpers/post')

app.prepare()
  .then(() => {
    const server = express()

    server.get('/api/post/:slug', async (req, res) => {
      const { slug: fileName } = req.params
      const slug = fileName.replace('.json', '')

      if (!(await exists(slug))) return handle(req, res)

      const postData = await getMarkdownFrom(slug)

      return res.json(postData)
    })

    server.get('/:slug', async (req, res) => {
      const { slug } = req.params

      if (!(await exists(slug))) return handle(req, res)

      const actualPage = '/post'
      const postData = await getMarkdownFrom(slug)

      return app.render(req, res, actualPage, postData)
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
