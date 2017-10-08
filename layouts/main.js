import Head from '../components/head'
import Logo from '../components/logo'
import Topbar from '../components/topbar'
import NormalizeCss from '../components/normalize-css'

export default ({ meta, children }) => (
  <div>
    <Head {...meta} />
    <Topbar>
      <Logo />
    </Topbar>
    { children }

    <style global jsx>{`
      a {
        text-decoration: none;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <NormalizeCss />
  </div>
)

