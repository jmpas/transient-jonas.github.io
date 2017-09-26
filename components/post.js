import SyntaxHighlighting from './syntax-highlighting'

const PostTitle = ({ title }) => (
  <h1 className='post-title' itemProp='name'>
    {title}
    <style jsx>{`
      .post-title {
        font-size: 62px;
        text-align: center;
        padding: 100px;
      }
    `}</style>
  </h1>
)

export default ({ title, body, description, date, formattedDate }) => (
  <section>
    <article className='post-container' itemProp='articleBody'>
      <PostTitle title={title} />
      <p itemProp='description'>{description || ''}</p>
      <time itemProp='datePublished' dateTime={date}>{formattedDate}</time>
      <div dangerouslySetInnerHTML={{ __html: body }} />

      <style jsx>{`
        .post-container {
          padding: 0 100px 100px 100px;
        }
      `}</style>

      <SyntaxHighlighting />
    </article>
  </section>
)
