import { Component } from 'react'
import StackGrid from 'react-stack-grid'
import sizeMe from 'react-sizeme'
import SecondaryTitle from  './secondary-title'
import Link from './link'

import styles from '../styles/pages/photography'

class PhotographySection extends Component {
  constructor(props) {
    super(props);
    console.log(props.photos)
  }
  render() {
    return (
      <section className='photography-page'>
        <StackGrid columnWidth={ this.props.size.width <= 768 ? '100%' : '33.33%' }>
          { this.props.photos.map((photo, idx) => <Link key={ idx } href={ `https://500px.com/${photo.url}` } middleware={ this.props.startTransition }><img src={ photo.image_url } /></Link>) }
        </StackGrid>
        <style jsx>{ styles }</style>
      </section>
    )
  }
}

export default sizeMe()(PhotographySection)
