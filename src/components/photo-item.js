import { Component } from 'react'
import Link from './link'

import styles from './photo-item.styles'
import fadeIn from '../styles/fade-in'

import Loading from './loading'

export default class PhotoItem extends Component {
  state = {
    loaded: false,
    src: null
  }
  img = null

  componentDidMount() {
    const image = new Image()

    image.onload = () => {
      this.setState({
        loaded: true,
        src: image.src
      })

      this.props.onLoad()
    }

    image.src = this.props.imgUrl
  }

  render() {
    const { url } = this.props
    const { src, loaded } = this.state

    return (
      <div className='photo-item fade-in'>
        <div className='loading'></div>
        {loaded || <Loading />}
        <a href={url}>
          <img src={src} />
        </a>
        <style jsx>{styles}</style>
        <style jsx>{fadeIn}</style>
      </div>
    )
  }
}
