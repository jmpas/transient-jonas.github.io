import dynamic from 'next/dynamic'

import syntaxHighlighting from '../styles/syntax-highlighting'
import styles from './post.styles'
import fadeIn from '../styles/fade-in'

const SocialShare = dynamic(import('./social-share'))
const ReactDisqusComments = dynamic(import('react-disqus-comments'))

export default ({ title, body, description, date, formattedDate, slug, tags }) => (
  <section>
    <article className='post-container fade-in' itemProp='articleBody'>
      <h1 className='post-title' itemProp='name'>
        {title}
      </h1>
      <p itemProp='description'>{description || ''}</p>
      <time itemProp='datePublished' dateTime={date}>{formattedDate}</time>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <style global jsx>{styles}</style>
      <style jsx>{fadeIn}</style>
      <style global jsx>{syntaxHighlighting}</style>
    </article>
    <SocialShare { ...{ description, slug, tags } } />
    <ReactDisqusComments identifier={`/${slug}`} url={`http://nipher.io/${slug}`} shortname='nipher' />
  </section>
)
