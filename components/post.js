import syntaxHighlighting from '../styles/syntax-highlighting'

const PostTitle = ({ title }) => (
  <h1 className='post-title' itemProp='name'>
    { title }
  </h1>
)

export default ({ title, body, description, date, formattedDate }) => (
  <section>
    <article className='post-container' itemProp='articleBody'>
      <PostTitle title={title} />
      <p itemProp='description'>{ description || '' }</p>
      <time itemProp='datePublished' dateTime={date}>{ formattedDate }</time>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <style global jsx>{ syntaxHighlighting }</style>
    </article>
  </section>
)
