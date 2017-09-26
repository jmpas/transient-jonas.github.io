import Page from '../layouts/main'
import PostItem from '../components/post-item'

const metaData = {
  title: 'Nipher',
  description: 'Developer, Amateur photographer, dreamer'
}

const Index = ({ posts }) => (
  <Page meta={metaData}>
    <h1>My name is Jonas</h1>
    <section>
      <h2>Blog posts</h2>
      <ul>{ posts.map((post, idx) => <PostItem {...post} key={idx} />) }</ul>
    </section>
  </Page>
)

Index.getInitialProps = async ({ query, req }) => {
	if (query.build && typeof window === 'undefined') return query

  const postEndpoint = `/api/posts.json`
  const fetch = await import('isomorphic-fetch')
  let res = null

  if (req) {
    res = await fetch(`${req.protocol}://${req.get('host')}${postEndpoint}`)
  } else {
    res = await fetch(`${location.origin}${postEndpoint}`)
  }

  return await res.json()
}

export default Index
