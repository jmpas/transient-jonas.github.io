import PostItem from '../components/post-item'
import PrimaryTitle from  '../components/primary-title'

import styles from '../styles/pages/blog'
import textEffect from '../styles/text-effect'

export default ({ posts, startTransition }) => (
  <section className='blog-page'>
    <PrimaryTitle>
      <strong className='text-effect'>Knowledge</strong> worth sharing
    </PrimaryTitle>
    <section className='post-list'>{ posts.map((post, idx) => <PostItem { ...post } key={ idx } startTransition={ startTransition } />) }</section>
    <style jsx>{ styles }</style>
    <style jsx>{ textEffect }</style>
  </section>
)
