import Link from 'next/link'

const PostItem = ({ title, date, description, slug } = props) => (
  <Link prefetch as={`/${slug}`} href={`/post?slug=${slug}`}>
    <a>
      <li>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>
      </li>
    </a>
  </Link>
)

export default PostItem
