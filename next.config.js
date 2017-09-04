const { getPostListSync, getMarkdownFromSync } = require('./helpers/post')

module.exports = {
  exportPathMap () {
    const postList = getPostListSync()

    const posts = postList.reduce((pages, post) => {
      const postData = getMarkdownFromSync(post)

      return Object.assign({}, pages, {
        [`/${post}`]: {
          page: '/post',
          query: postData
        }
      })
    }, {})

    const pages = {
      '/': { page: '/' }
    }

    // combine the map of post pages with landing pages
    return Object.assign({}, posts, pages)
  }
}
