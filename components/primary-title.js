import font, { primarySize, primaryWeight } from '../styles/font'
import { primary } from '../styles/colors'

export default ({ children }) => (
  <h1 className='root'>
    { children }
    <style jsx>{`
      .root {
        font-family: ${ font };
        color: ${ primary };
        font-size: ${ primarySize };
        font-weight: ${ primaryWeight }
      }
    `}</style>
  </h1>
)
