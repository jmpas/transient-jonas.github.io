import { Component } from 'react'

import Page from '../layouts/main'
import PhotographySection from  '../components/photography-section'

const metaData = {
  title: 'Nipher - Photography',
  description: 'Photos from an amateur photographer'
}

const photosEndpoint = `https://api.500px.com/v1/photos?feature=user&username=nipher&consumer_key=sWnHI6Hz3EGzcvvf3pPNLMtPHy5uCJ6GY3mV1M11&image_size=4`

const Photography = class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  async componentDidMount() {
    const fetch = await import('isomorphic-fetch')

    const res = await fetch(photosEndpoint)
    this.setState({
      ...this.state,
      photos: (await res.json()).photos
    })
  }

  render() {
    const { startTransition } = this.props
    const { photos } = this.state

    return <Page meta={ metaData }>
      <PhotographySection photos={ photos } startTransition={ startTransition } />
    </Page>
  }
}

export default Photography
