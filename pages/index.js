import Page from '../layouts/main'
import ArticleItem from '../components/article-item'

const metaData = {
  title: 'Nipher',
  description: 'Developer, Amateur photographer, dreamer'
}

const Index = ({ posts } = props) => (
  <Page meta={metaData}>
    <h1>My name is Jonas</h1>
    <section>
      <h2>Articles</h2>
      <ul>{ posts.map((post, idx) => <ArticleItem {...post} key={idx} />) }</ul>
    </section>
  </Page>
)

Index.getInitialProps = async ({ query, req }) => {
	if (query.build) return query

  const postEndpoint = `/api/posts.json`
  const fetch = await import('isomorphic-fetch')
  let res = null

  if (req) {
    res = await fetch(`${req.protocol}://${req.get('host')}${postEndpoint}`)
  } else {
    res = await fetch(`${location.origin}${postEndpoint}`)
  }

  const { posts } = await res.json()
  return { posts }
}

export default Index
