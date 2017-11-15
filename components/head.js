import Head from 'next/head'
import { Component } from 'react'

const siteTitle = 'Nipher'
const siteUrl = 'http://nipher.io'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUrl: null
    }
  }

  componentDidMount() {
    this.setState({
      currentUrl: location.href
    })
  }

  render() {
    const { title, description } = this.props
    const pageImage = siteUrl + (this.props.pageImage || '/static/site.png')
    const { currentUrl } = this.state

    return <Head>
      <title>{ title }</title>
      <meta name='description' content={ description } />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nipher_jonas" />
      <meta name="twitter:title" content={ title } />
      <meta name="twitter:description" content={ description } />
      <meta property="twitter:image:src" content={ pageImage } />

      <meta property="fb:admins" content="100001388969005" />
      <meta property="og:url" content={ currentUrl } />
      <meta property="og:title" content={ title } />
      <meta property="og:image" content={ pageImage } />
      <meta property="og:description" content={ description } />
      <meta property="og:site_name" content={ siteTitle } />

      <meta name="google-site-verification" content="d9Yf-wvazE53l5r9utc7O68jw0ynDML0gaw38oBu6RI" />
      <meta itemProp="name" content={ title } />
      <meta itemProp="description" content={ description } />
      <meta itemProp="image" content={ pageImage } />

      <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
      <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/static/android-chrome-192x192.png" sizes="192x192" />
      <meta name="msapplication-square70x70logo" content="/static/smalltile.png" />
      <meta name="msapplication-square150x150logo" content="/static/mediumtile.png" />
      <meta name="msapplication-square310x310logo" content="/static/largetile.png" />
    </Head>
  }
}
