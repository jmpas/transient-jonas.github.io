import Head from '../components/head'
import Logo from '../components/logo'
import Topbar from '../components/topbar'
import global from '../styles/global'
import normalize from '../styles/normalize'

export default ({ meta, children }) => (
  <div>
    <Head {...meta} />
    <Topbar>
      <Logo />
    </Topbar>
    { children }

    <style global jsx>{ global }</style>
    <style global jsx>{ normalize }</style>
  </div>
)

