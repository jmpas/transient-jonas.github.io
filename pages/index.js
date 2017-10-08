import Page from '../layouts/main'
import PostItem from '../components/post-item'
import SecondaryTitle from  '../components/secondary-title'

import { medium, big } from '../styles/layout-spacing'

const metaData = {
  title: 'Nipher',
  description: 'Developer, Amateur photographer, dreamer'
}

const Index = ({ posts }) => (
  <Page meta={metaData}>
    <section className='root'>
      <SecondaryTitle>Blog posts</SecondaryTitle>
      <ul className='post-list'>{ posts.map((post, idx) => <PostItem {...post} key={idx} />) }</ul>
      <style jsx>{`
        .root {
          padding: ${ medium }px ${ big }px
        }

        .post-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
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
