import Link from 'next/link'
import ItemTitle from './item-title'
import ItemSubtitle from './item-subtitle'
import ItemData from './item-data'
import PostTag from './post-tag'

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
      <style jsx>{`
        .post-item {
          height: 200px;
          width: 350px;
          display: flex;
          margin-bottom: 10px;
        }

        .post-content {
          flex-basis: 65%;
          padding: 0 0 0 5px;
        }

        .post-extra {
          flex-basis: 35%;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </a>
  </Link>
)

export default PostItem
