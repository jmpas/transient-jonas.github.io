import PostItem from '../components/post-item'
import SecondaryTitle from  '../components/secondary-title'

import styles from '../styles/pages/index'

export default ({ posts, startTransition }) => (
  <section className='index-page'>
    <SecondaryTitle>Articles</SecondaryTitle>
    <br/>
    <br/>
    <ul className='post-list'>{ posts.map((post, idx) => <PostItem { ...post } key={ idx } startTransition={ startTransition } />) }</ul>
    <style jsx>{ styles }</style>
  </section>
)
