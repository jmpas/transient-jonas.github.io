import PostItem from '../components/post-item'
import PrimaryTitle from  '../components/primary-title'

import styles from '../styles/pages/index'
import textEffect from '../styles/text-effect'

export default ({ posts, startTransition }) => (
  <section className='index-page'>
    <PrimaryTitle>
      <strong className='text-effect'>Knowledge</strong> worth sharing
    </PrimaryTitle>
    <ul className='post-list'>{ posts.map((post, idx) => <PostItem { ...post } key={ idx } startTransition={ startTransition } />) }</ul>
    <style jsx>{ styles }</style>
    <style jsx>{ textEffect }</style>
  </section>
)
