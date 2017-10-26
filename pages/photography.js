import Page from '../layouts/main'
import PhotographySection from  '../components/photography-section'

const metaData = {
  title: 'Nipher - Photography',
  description: 'Photos from an amateur photographer'
}

const Photography = ({ photos, startTransition }) => (
  <Page meta={ metaData }>
    <PhotographySection photos={ photos } startTransition={ startTransition } />
  </Page>
)

Photography.getInitialProps = async ({ query, req }) => {
  const photosEndpoint = `https://api.500px.com/v1/photos?feature=user&username=nipher&consumer_key=sWnHI6Hz3EGzcvvf3pPNLMtPHy5uCJ6GY3mV1M11&image_size=4`
  const fetch = await import('isomorphic-fetch')

  const res = await fetch(photosEndpoint)
  return await res.json()
}

export default Photography
