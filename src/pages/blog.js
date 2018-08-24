import Page from '../layouts/main'
import Grid from '../components/grid'
import PostItem from '../components/post-item'
import PrimaryTitle from '../components/primary-title'

import textEffect from '../styles/text-effect'

const metaData = {
  title: 'Nipher - Blog',
  description: 'Articles about web development',
  url: 'https://nipher.io/blog'
}

const BlogPage = ({ posts }) => (
  <Page meta={metaData}>
    <PrimaryTitle>
      <strong className='text-effect'>Knowledge</strong> worth sharing
    </PrimaryTitle>
    <Grid className='blog-page' posts={posts}>
      {
        posts.map((post, i) => (
          <PostItem key={i} { ...post } />
        ))
      }
    </Grid>
    <style jsx>{textEffect}</style>
  </Page>
)

BlogPage.getInitialProps = async ({ query, req }) => {
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

export default BlogPage
