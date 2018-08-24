import { Component } from 'react'
import Masonry from 'react-masonry-component'
import sizeMe from 'react-sizeme'
import SecondaryTitle from './secondary-title'
import PhotoItem from './photo-item'
import PrimaryTitle from './primary-title'

import styles from './photography-section.styles'
import fadeIn from '../styles/fade-in'
import textEffect from '../styles/text-effect'

class PhotographySection extends Component {
  state = { show: false }

  show = () => this.setState({ show: true })

  render() {
    const { photos } = this.props

    return (
      <section className='photography-page'>
        <PrimaryTitle><strong className='text-effect'>Memories</strong> worth sharing</PrimaryTitle>
        <Masonry
          className={`photo-list`}
          options={{
            columnWidth: '.grid-sizer',
            percentPosition: true,
            transitionDuration: '0.2s'
          }}>
          <div className='grid-sizer'></div>
          {
            photos.map((photo, idx) => (
              <PhotoItem
                key={idx}
                url={photo.links.html}
                imgUrl={photo.urls.regular}
                onLoad={this.show} />
            ))
          }
        </Masonry>
        <style jsx>{styles}</style>
        <style jsx>{textEffect}</style>
      </section>
    )
  }
}

export default PhotographySection
