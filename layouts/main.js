import Head from '../components/head'
import Logo from '../components/logo'

export default ({meta, children}) => (
  <div>
    <Head {...meta} />
    <Logo />
    {children}
  </div>
)

