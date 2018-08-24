import { Component } from 'react'

import Page from '../../layouts/main'
import { play, stop } from '../../experiments/dark-crystal'

const metaData = {
  title: 'Nipher - Dark Crystal',
  description: 'A generative animated crystal which is generated using the Delaunay triangulation algorithm.',
  url: 'https://nipher.io/experiments/dark-crystal'
}

export default class extends Component {
  componentDidMount() {
    play()
  }

  componentWillUnmount() {
    stop()
  }

  render() {
    return (
      <Page meta={metaData}>
        <div className='experiment-container'>
          <canvas className='dark-crystal-experiment'></canvas>
          <style jsx>{`
            .dark-crystal-experiment {
              height: 100%;
              width: 100%;
            }
          `}</style>
        </div>
      </Page>
    )
  }
}
