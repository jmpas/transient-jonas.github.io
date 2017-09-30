const { getPostList, getMarkdownFrom, formatDate, sortPosts } = require('./helpers/post')

module.exports = {
  async exportPathMap () {
    const postList = await getPostList()
    const postsData = await Promise.all(postList.map(post => getMarkdownFrom(post)))

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
