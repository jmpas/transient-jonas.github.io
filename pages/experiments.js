import Page from '../layouts/main'
import ExperimentItem from  '../components/experiment-item'

const metaData = {
  title: 'Nipher - Experiments',
  description: 'My creative experiments'
}

const ExperimentsPage = ({ experiments }) => (
  <Page meta={metaData}>
    {
      experiments.map((experiment, i) => <ExperimentItem key= {i} {...experiment} />)
    }
  </Page>
)


ExperimentsPage.getInitialProps = async ({ query, req }) => {
  if (query.build && typeof window === 'undefined') return query

  const postEndpoint = `/api/experiments.json`
  const fetch = await import('isomorphic-fetch')
  let res = null

  if (req) {
    res = await fetch(`${req.protocol}://${req.get('host')}${postEndpoint}`)
  } else {
    res = await fetch(`${location.origin}${postEndpoint}`)
  }

  return await res.json()
}

export default ExperimentsPage
