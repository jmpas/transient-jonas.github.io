import Meta from '../components/meta'

export default (props) => (
  <div>
    <Meta {...props.meta} />
    {props.children}
  </div>
)

