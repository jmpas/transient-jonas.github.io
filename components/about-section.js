import PostItem from './post-item'
import PrimaryTitle from  './primary-title'
import SecondaryTitle from  './secondary-title'
import ItemData from  './item-data'
import ProfilePicture from './profile-picture'

import styles from '../styles/pages/about'

export default ({ startTransition }) => (
  <section className='about-page'>
    <div className='intro-text'>
      <PrimaryTitle>Hi, {`I'm Jonas`}</PrimaryTitle>
      <PrimaryTitle>I unfold ideas into code</PrimaryTitle>
      <SecondaryTitle>in case you like labels, {`I'm`} listing a few of them that would suit me well, like</SecondaryTitle>
      <ItemData>- software engineer</ItemData><br/>
      <ItemData>- web developer</ItemData><br/>
      <ItemData>- creative coder</ItemData><br/>
      <ItemData>- amateur photographer</ItemData><br/>
      <ItemData>- dreamer</ItemData>
      <br/>
      <br/>
      <ItemData>{`I'm a Brazilian with a strong software development background currently working at Toptal.`}</ItemData><br/><br/>
      <ItemData>My main focus throughout my career has been web technologies, both backend and front-end, working on software architecture development for custom needs and also working closely with designers, bringing ideas to life.</ItemData><br/><br/>
      <ItemData> If you want to know more about me, feel free to get in touch via email or twitter, {`I'm`} always more than happy to chat.</ItemData>
    </div>
    <ProfilePicture />
    <style jsx>{ styles }</style>
  </section>
)
