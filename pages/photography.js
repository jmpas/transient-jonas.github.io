import { Component } from 'react'

import Page from '../layouts/main'
import PhotographySection from '../components/photography-section'

const metaData = {
  title: 'Nipher - Photography',
  description: 'Photos from an amateur photographer',
  url: 'https://nipher.io/photography'
}

const photosEndpoint = 'https://api.unsplash.com/users/nipher/photos?client_id=3c59c9c5ca9ba0325d1073c42eb03de51b707fbb97f712670fb7a6996f04909e'

export default class extends Component {
  state = { photos: [] }

  async componentDidMount() {
    const fetch = await import('isomorphic-fetch')

    const res = await fetch(photosEndpoint)
    const photos = await res.json()
    this.setState({ photos })
  }

  render() {
    const { photos } = this.state

    return (
      <Page meta={metaData}>
        <PhotographySection photos={photos} />
      </Page>
    )
  }
}
