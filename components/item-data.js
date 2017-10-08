import font from '../styles/font'
import { secondary } from '../styles/colors'

export default ({ children }) => (
  <span className='root'>
    { children }
    <style jsx>{`
      .root {
        font-family: ${ font };
        font-size: 12px;
        font-weight: 200;
        color: ${ secondary };
        margin-bottom: 5px;
      }
    `}</style>
  </span>
)
