const fs = require('fs')
const { getMarkdownFromSync } = require('./helpers/post')

module.exports = {
  exportPathMap () {
    const postList = fs.readdirSync('./posts').map(name => name.replace(/\.md$/, ''))

    const pages = postList.reduce((pages, post) => {
      const { post: body , metaData } = getMarkdownFromSync(post)
      const queryParams = { post, post: body, metaData }

      return Object.assign({}, pages, {
        [`/${post}`]: {
          page: '/post',
          query: queryParams
        }
      })
    }, {})

    console.log(pages, postList)
    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' }
    })
  }
}
