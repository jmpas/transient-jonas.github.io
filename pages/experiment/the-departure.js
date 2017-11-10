import { Component } from 'react'
import Sound from 'react-sound'

import Mountains from '../../experiments/the-departure/components/mountains'
// import Clouds from './components/clouds'
import Rocket from '../../experiments/the-departure/components/rocket'
import Smoke from '../../experiments/the-departure/components/smoke'
import Person from '../../experiments/the-departure/components/person'
import Land from '../../experiments/the-departure/components/land'
import Page from '../../layouts/main'

import styles from '../../experiments/the-departure/styles'

const metaData = {
  title: 'Nipher - The Departure',
  description: ''
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { modifier: '' }
  }
  handleSongPlaying(data) {
    this.setState({
      ...this.state,
      modifier: 'active'
    })
  }
  render() {
    return <Page meta={ metaData }>
      <div className='experiment-container'>
        <Smoke modifier={this.state.modifier} />
        <Rocket modifier={this.state.modifier} /> 
        <Mountains modifier={this.state.modifier} />
        {/*<Clouds />*/}
        <Land />
        <Person />
        <Sound
          url='/static/we-lost-the-sea.mp3'
          playStatus={Sound.status.PLAYING}
          autoLoad={true}
          onPlaying={this.handleSongPlaying.bind(this)}
        />
        <style jsx>{ styles }</style>
        <style jsx global>{`
          .experiment-container .polygon {
            transition: clip-path 4s cubic-bezier(.7, .3, 0, 1), background-color 2s cubic-bezier(.7, .3, 0, 1);
          }
        `}</style>
      </div>
    </Page>
  }
}
