const Article = ({title, date, description} = props) => (
  <li>
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{date}</span>
  </li>
)

export default Article
