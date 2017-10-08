import font from '../styles/font'
import { primary } from '../styles/colors'

export default ({ children }) => (
  <div className='root'>
    { children }
    <style jsx>{`
      .root {
        font-family: ${ font };
        font-size: 14px;
        font-weight: 200;
        color: ${ primary }
        margin: 10px 0 5px 0;
      }
    `}</style>
  </div>
)
