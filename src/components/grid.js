import styles from './grid.styles'

const Grid = ({ children }) => (
  <section className='grid'>
    {children}
    <style jsx>{styles}</style>
  </section>
)

export default Grid
