import styles from './post-tag.styles'

const PostTag = ({ children }) => (
  <span className='post-tag'>
    {children}
    <style jsx>{styles}</style>
  </span>
)

export default PostTag
