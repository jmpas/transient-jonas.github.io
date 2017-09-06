import Post from '../components/post'
import Page from '../layouts/main'

const PostPage = ({ post, metaData } = props) => (
  <Page meta={metaData}>
    <Post title={metaData.title} description={metaData.description || ''}
          date={metaData.date}
          body={post} />
  </Page>
)

PostPage.getInitialProps = async ({ query, req }) => {
	if (query.build) return query

  const postEndpoint = `/api/post/${query.slug}.json`
  const fetch = await import('isomorphic-fetch')
  let res = null

  if (req) {
    res = await fetch(`${req.protocol}://${req.get('host')}${postEndpoint}`)
  } else {
    res = await fetch(`${location.origin}${postEndpoint}`)
  }

  const { post, metaData } = await res.json()
  return { post , metaData }
}

export default PostPage

