import { Component } from 'react'
import StackGrid from 'react-stack-grid'
import sizeMe from 'react-sizeme'
import SecondaryTitle from  './secondary-title'
import PhotoItem from  './photo-item'
import PrimaryTitle from  '../components/primary-title'

import styles from '../styles/pages/photography'
import fadeIn from '../styles/fade-in'

class PhotographySection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='photography-page'>
        <PrimaryTitle>Memories</PrimaryTitle>
        <StackGrid columnWidth={ this.props.size.width <= 768 ? '100%' : '33.33%' } monitorImagesLoaded={ true }>
          {
            this.props.photos.map((photo, idx) => (
              <PhotoItem key={ idx } url={ photo.url } imgUrl={ photo.image_url } startTransition={ this.props.startTransition } />
            ))
          }
        </StackGrid>
        <style jsx>{ styles }</style>
      </section>
    )
  }
}

export default sizeMe()(PhotographySection)
