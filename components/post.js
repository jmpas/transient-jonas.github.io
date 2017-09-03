export default ({ title, body, description, date } = props) => (
  <section>
    <article itemProp='articleBody'>
      <h1 itemProp='name'>{title}</h1>
      <p itemProp='description'>{description}</p>
      <time itemProp='datePublished' datetime={date}>{date}</time>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  </section>
)
