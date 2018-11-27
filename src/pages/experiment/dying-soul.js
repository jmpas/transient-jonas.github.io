import { Component } from 'react'

import Page from '../../layouts/main'

const metaData = {
  title: 'Nipher - Dying Soul',
  description: `A 3D sphere reacting realtime to one of Roly Porter's tracks, the experiment uses ThreeJs, GLSL, and Web Audio API`,
  url: 'https://nipher.io/experiments/dying-soul'
}

export default class extends Component {
  componentDidMount() {
    import('../../experiments/dying-soul')
  }

  render() {
    return (
      <Page meta={metaData}></Page>
    )
  }
}
