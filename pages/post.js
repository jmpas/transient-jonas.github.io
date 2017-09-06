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
  if (req) {
    return query
  } else {
    const fetch = await import('isomorphic-fetch')
    const postEndpoint = `${location.origin}/api/post/${query.slug}.json`
    const res = await fetch(postEndpoint)
    const { post, metaData } = await res.json()
    return { post , metaData }
  }
}

export default PostPage

