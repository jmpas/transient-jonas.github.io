const { getPostList, getMarkdownFrom, formatDate, sortPosts } = require('./helpers/post')

module.exports = {
  async exportPathMap () {
    await require('./export-api')
    const { posts: postsList } = require('./out/api/posts')

    const posts = postsList.reduce((pages, data) => {
      const post = require(`./out/api/post/${data.slug}`)

      return {
        ...pages,
        [`/${data.slug}`]: {
          page: '/post',
          query: { ...post, build: true }
        }
      }
    }, {})

    const pages = {
      '/': {
        page: '/',
        query: { posts: postsList, build: true }
      }
    }

    // combine the map of post pages with landing pages
    return { ...posts, ...pages }
  }
}
