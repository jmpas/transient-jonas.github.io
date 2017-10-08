import { primary } from '../styles/colors'
import font, { secondaryWeight } from '../styles/font'

export default ({ children }) => (
  <h3 className='root'>
    { children }
    <style jsx>{`
      .root {
        font-family: ${ font };
        font-size: 20px;
        color: ${ primary };
        font-weight: ${ secondaryWeight }
        margin: 0 0 15px 0;
      }
    `}</style>
  </h3>
)
