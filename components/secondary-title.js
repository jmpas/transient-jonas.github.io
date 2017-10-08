import font, { secondarySize, secondaryWeight } from '../styles/font'
import { secondary } from '../styles/colors'

export default ({ children }) => (
  <h1 className='root'>
    { children }
    <style jsx>{`
      .root {
        font-family: ${ font };
        color: ${ secondary };
        font-size: ${ secondarySize };
        font-weight: ${ secondaryWeight }
      }
    `}</style>
  </h1>
)
