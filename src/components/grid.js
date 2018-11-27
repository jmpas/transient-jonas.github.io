import styles from './grid.styles'

const Grid = ({ children, type = ''}) => (
  <section className={'grid ' + type}>
    {children}
    <style jsx>{styles}</style>
  </section>
)

export default Grid
