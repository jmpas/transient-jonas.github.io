import Link from './link'

import styles from '../styles/components/photo-item'
import fadeIn from '../styles/fade-in'

export default ({ title, slug, description, date, startTransition }) => (
  <div className='experiment-item root'>
    <Link href={ `/experiment/${ slug }` } middleware={ startTransition }>
      { title }
      { description }
      { date }
    </Link>
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </div>
)
