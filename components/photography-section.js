import { Component } from 'react'
import StackGrid from 'react-stack-grid'
import sizeMe from 'react-sizeme'
import SecondaryTitle from  './secondary-title'
import PhotoItem from  './photo-item'
import PrimaryTitle from  '../components/primary-title'

import styles from '../styles/pages/photography'
import fadeIn from '../styles/fade-in'
import textEffect from '../styles/text-effect'

class PhotographySection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='photography-page'>
        <PrimaryTitle><strong className='text-effect'>Memories</strong> worth sharing</PrimaryTitle>
        <StackGrid
          className='photo-list'
          columnWidth={ this.props.size.width <= 768 ? '100%' : '33.33%' }
          monitorImagesLoaded={ true }
          duration={ 1500 }
        >
          {
            this.props.photos.map((photo, idx) => (
              <PhotoItem key={ idx } url={ photo.url } imgUrl={ photo.image_url } startTransition={ this.props.startTransition } />
            ))
          }
        </StackGrid>
        <style jsx>{ styles }</style>
        <style jsx>{ textEffect }</style>
      </section>
    )
  }
}

export default sizeMe()(PhotographySection)
