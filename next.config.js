const { getPostListSync, getMarkdownFromSync } = require('./helpers/post')

module.exports = {
  exportPathMap () {
    const postList = getPostListSync()
    const postsData = postList.map(post => getMarkdownFromSync(post))

    const posts = postsData.reduce((pages, postData) => {
      return Object.assign({}, pages, {
        [`/${postData.slug}`]: {
          page: '/post',
          query: Object.assign({}, postData, { build: true })
        }
      })
    }, {})

    const postsMetaData = postsData
      .map(({ metaData, slug } = postData) => Object.assign({}, { slug }, metaData))

    const pages = {
      '/': {
        page: '/',
        query: Object.assign({}, { posts: postsMetaData }, { build: true })
      }
    }

    // combine the map of post pages with landing pages
    return Object.assign({}, posts, pages)
  }
}
