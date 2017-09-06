import Link from 'next/link'

const Article = ({ title, date, description, slug } = props) => (
  <Link as={`/${slug}`} href={`/post?slug=${slug}`}>
    <a>
      <li>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>
      </li>
    </a>
  </Link>
)

export default Article
