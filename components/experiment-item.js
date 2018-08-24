import Link from 'next/link'

import ItemTitle from './item-title'
import ItemSubtitle from './item-subtitle'
import ItemData from './item-data'
import PostTag from './post-tag'

import styles from './experiment-item.styles'
import fadeIn from '../styles/fade-in'

const ExperimentItem = ({ title, slug, description, date, tags = [], dateFormatted, pageImage, type }) => (
  <Link href={`/experiment/${slug}`}>
    <article className='experiment-item fade-in' style={type === 'loner' ? { maxWidth: 350 } : {}} itemType='http://schema.org/CreativeWork'>
      <div className='experiment-image'>
        <img itemProp='image' src={pageImage} alt='Dark Crystal visual experiment'></img>
      </div>
      <div className='experiment-content-wrapper'>
        <div className='experiment-extra'>
          <div>
            <ItemSubtitle>Published</ItemSubtitle>
            <ItemData><time itemProp='datePublished' dateTime={date}>{dateFormatted}</time></ItemData>
          </div>
          <div>
            <ItemSubtitle>Tags</ItemSubtitle>
            <div className='tag-list'>
              {tags.map((tag, i) => <PostTag key={i}>{tag}</PostTag>)}
            </div>
          </div>
        </div>
        <div className='experiment-content'>
          <ItemTitle>{title}</ItemTitle>
          <ItemData>{description} ...</ItemData>
        </div>
      </div>
      <style jsx>{styles}</style>
      <style jsx>{fadeIn}</style>
    </article>
  </Link>
)

export default ExperimentItem
