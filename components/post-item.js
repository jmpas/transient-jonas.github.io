import Link from 'next/link'
import ItemTitle from './item-title'
import ItemSubtitle from './item-subtitle'
import ItemData from './item-data'
import PostTag from './post-tag'

import styles from '../styles/components/post-item'

const PostItem = ({ title, formattedDate, excerpt, slug, language, tags = [] }) => (
  <Link prefetch as={`/${slug}`} href={`/post?slug=${slug}`}>
    <a className='root'>
      <li className='post-item'>
        <div className='post-extra'>
          <div>
            <ItemSubtitle>Published</ItemSubtitle>
            <ItemData>{ formattedDate }</ItemData>
          </div>
          <div>
            <ItemSubtitle>Language</ItemSubtitle>
            <ItemData>{ language }</ItemData>
          </div>
          <div>
            <ItemSubtitle>Tags</ItemSubtitle>
            <div className='tag-list'>
              { tags.map((tag, i ) => <PostTag key={ i }>{ tag }</PostTag>) }
            </div>
          </div>
        </div>
        <div className='post-content'>
          <ItemTitle>{ title }</ItemTitle>
          <ItemData>{ excerpt } ...</ItemData>
        </div>
      </li>
      <style jsx>{ styles }</style>
    </a>
  </Link>
)

export default PostItem
