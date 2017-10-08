import font from '../styles/font'
import { primary, secondary } from '../styles/colors'

export default ({ children }) => (
  <span className='root'>
    { children }
    <style jsx>{`
      .root {
        font-family: ${ font };
        font-size: 12px;
        font-weight: 200;
        color: ${ secondary };
        background: #e9e9e9;
        margin: 0 5px 5px 0;
        padding: 3px
      }
    `}</style>
  </span>
)
