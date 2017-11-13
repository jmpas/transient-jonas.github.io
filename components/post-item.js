import Router from 'next/router'
import ItemTitle from './item-title'
import ItemSubtitle from './item-subtitle'
import ItemData from './item-data'
import PostTag from './post-tag'
import Link from './link'

import styles from '../styles/components/post-item'
import fadeIn from '../styles/fade-in'

const PostItem = ({ title, formattedDate, excerpt, slug, language, date, tags = [], startTransition }) => (
  <Link prefetch as={`/${slug}`} href={`/post?slug=${slug}`} middleware={ startTransition } delay={ 1000 }>
    <article className='post-item root' itemScope itemType='http://schema.org/BlogPosting' itemProp='blogPost'>
      <div className='post-extra'>
        <div>
          <ItemSubtitle>Published</ItemSubtitle>
          <ItemData><time itemProp='datePublished' dateTime={ date }>{ formattedDate }</time></ItemData>
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
    </article>
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </Link>
)

export default PostItem
