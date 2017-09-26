import Link from 'next/link'

const PostItem = ({ title, formattedDate, description, slug }) => (
  <Link prefetch as={`/${slug}`} href={`/post?slug=${slug}`}>
    <a>
      <li>
        <h3>{title}</h3>
        <span>{formattedDate}</span>
      </li>
    </a>
  </Link>
)

export default PostItem
