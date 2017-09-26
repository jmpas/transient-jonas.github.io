import Head from 'next/head'

export default (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name='description' content={props.description} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
)
