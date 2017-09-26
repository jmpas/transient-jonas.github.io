const { getPostListSync, getMarkdownFromSync, formatDate, sortPosts } = require('./helpers/post')

module.exports = {
  exportPathMap () {
    const postList = getPostListSync()
    const postsData = postList.map(post => getMarkdownFromSync(post))

    const posts = postsData.reduce((pages, postData) => {
      return {
        ...pages,
        [`/${postData.slug}`]: {
          page: '/post',
          query: { ...postData, date: formatDate(postData.metaData.date), build: true }
        }
      }
    }, {})

    const postsMetaData = postsData
      .map(({ metaData, slug }) => (
        { formattedDate: formatDate(metaData.date), slug, ...metaData }
      ))

    const pages = {
      '/': {
        page: '/',
        query: { posts: sortPosts(postsMetaData), build: true }
      }
    }

    // combine the map of post pages with landing pages
    return { ...posts, ...pages }
  }
}
