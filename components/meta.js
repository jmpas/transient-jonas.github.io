import Head from 'next/head'

export default (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name='description' content={props.description} />
  </Head>
)
