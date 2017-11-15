import Link from './link'

import styles from '../styles/components/photo-item'
import fadeIn from '../styles/fade-in'

export default ({ containerSize, height, width, imgUrl, url, startTransition }) => {
  const newWidth = containerSize / 3
  const newHeight = height - (height * ((width - newWidth) / width))

  return <div className='photo-item root' style={{height: newHeight, width: newWidth}}>
    <Link href={ `https://500px.com/${ url }` } middleware={ startTransition }>
      <img src={ imgUrl } />
    </Link>
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </div>
}
