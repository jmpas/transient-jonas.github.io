import Page from '../layouts/main'
import PostItem from '../components/post-item'
import SecondaryTitle from  '../components/secondary-title'

import styles from '../styles/pages/index'

const metaData = {
  title: 'Nipher',
  description: 'Developer, Amateur photographer, dreamer'
}

const Index = ({ posts }) => (
  <Page meta={metaData}>
    <section className='index-page'>
      <SecondaryTitle>Articles</SecondaryTitle>
      <br/>
      <br/>
      <ul className='post-list'>{ posts.map((post, idx) => <PostItem {...post} key={idx} />) }</ul>
      <style jsx>{ styles }</style>
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
