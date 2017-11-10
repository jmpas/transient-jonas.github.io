import Post from '../components/post'
import Page from '../layouts/main'

const PostPage = ({ post, metaData, date }) => (
  <Page meta={ metaData }>
    <Post title={ metaData.title}
          description={ metaData.description }
          date={ metaData.date }
          formattedDate={ date }
          body={ post }
          slug={ metaData.slug }
          tags={ metaData.tags } />
  </Page>
)

PostPage.getInitialProps = async ({ query, req }) => {
	if (query.build && typeof window === 'undefined') return query

  const postEndpoint = `/api/post/${query.slug}.json`
  const fetch = await import('isomorphic-fetch')
  let res = null

  if (req) {
    res = await fetch(`${req.protocol}://${req.get('host')}${postEndpoint}`)
  } else {
    res = await fetch(`${location.origin}${postEndpoint}`)
  }

  return await res.json()
}

export default PostPage

