import Page from '../layouts/main'
import ExperimentItem from '../components/experiment-item'
import PrimaryTitle from '../components/primary-title'
import Grid from '../components/grid'

import styles from './experiments.styles'
import textEffect from '../styles/text-effect'

const metaData = {
  title: 'Nipher - Experiments',
  description: 'Creative coding experiments',
  url: 'https://nipher.io/experiments'
}

const ExperimentsPage = ({ experiments }) => (
  <Page meta={metaData}>
    <PrimaryTitle>
      <strong className='text-effect'>Feelings</strong> worth sharing
    </PrimaryTitle>
    {
      experiments.length > 1
        ? <Grid className='experiments-page' type={"experiments"}>{experiments.map((experiment, i) => <ExperimentItem key={i} {...experiment} />)}</Grid>
        : experiments.map((experiment, i) => <ExperimentItem key={i} {...experiment} type={'loner'} />)
    }
    <style jsx>{styles}</style>
    <style jsx>{textEffect}</style>
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
