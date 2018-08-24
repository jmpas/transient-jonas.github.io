import Link from 'next/link'

import ItemTitle from './item-title'
import ItemSubtitle from './item-subtitle'
import ItemData from './item-data'
import PostTag from './post-tag'

import styles from './post-item.styles'
import fadeIn from '../styles/fade-in'

const PostItem = ({ title, formattedDate, excerpt, slug, language, date, tags = [] }) => (
  <Link prefetch as={`/${slug}`} href={`/post?slug=${slug}`}>
    <article className='post-item fade-in' itemScope itemType='http://schema.org/BlogPosting' itemProp='blogPost'>
      <div className='post-extra'>
        <div>
          <ItemSubtitle>Published</ItemSubtitle>
          <ItemData><time itemProp='datePublished' dateTime={date}>{formattedDate}</time></ItemData>
        </div>
        <div>
          <ItemSubtitle>Language</ItemSubtitle>
          <ItemData>{language}</ItemData>
        </div>
        <div>
          <ItemSubtitle>Tags</ItemSubtitle>
          <div className='tag-list'>
            {tags.map((tag, i) => <PostTag key={i}>{tag}</PostTag>)}
          </div>
        </div>
      </div>
      <div className='post-content'>
        <ItemTitle>{title}</ItemTitle>
        <ItemData>{excerpt} ...</ItemData>
      </div>
      <style jsx>{styles}</style>
      <style jsx>{fadeIn}</style>
    </article>
  </Link>
)

export default PostItem
