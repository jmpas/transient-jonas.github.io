import PostItem from './post-item'
import PrimaryTitle from  './primary-title'
import SecondaryTitle from  './secondary-title'
import ItemData from  './item-data'
import ProfilePicture from './profile-picture'
import Paragraph from './paragraph'
import Link from './link'

import styles from '../styles/pages/about'
import textEffect from '../styles/text-effect'
import fadeIn from '../styles/fade-in'

export default ({ startTransition }) => (
  <section className='about-page'>
    <PrimaryTitle>Hi, {`I'm Jonas`}</PrimaryTitle>
    <PrimaryTitle><span className='text-effect'>I unfold ideas into code</span></PrimaryTitle>
    <div className='intro-text'>
      <div className='main-intro'>
        <Paragraph>in case you like labels, {`I'm`} listing a few of them that would suit me well, like...</Paragraph>
        <br/>
        <Paragraph>- software engineer</Paragraph>
        <Paragraph>- web developer</Paragraph>
        <Paragraph>- creative coder</Paragraph>
        <Paragraph>- amateur photographer</Paragraph>
        <Paragraph>- traveller</Paragraph>
      </div>
      <div className='about-intro'>
        <Paragraph>Originally born in Rio, Brazil, currently working remotely as a member of the Toptal core engineering team.</Paragraph>
        <br/>
        <Paragraph>My main focus throughout my career has been web technologies, both backend and front-end, working on software architecture development for custom needs and also collaborating with designers on the creative process.</Paragraph>
        <br/>
        <Paragraph> If you want to know more about me, feel free to get in touch via email, linkedin or twitter, {`I'm`} always more than happy to chat.</Paragraph>
        <br/>
        <div className='links fade-in'>
          <Link href='https://twitter.com/nipher_jonas' middleware={ startTransition } delay={ 1000 }>twitter </Link>
          /
          <Link href='https://www.linkedin.com/in/jonasmendes' middleware={ startTransition } delay={ 1000 }> linkedin </Link>
          /
          <a href="mailto:jonas@nipher.io"> e-mail</a>
        </div>
      </div>
    </div>
    <ProfilePicture />
    <style jsx>{ styles }</style>
    <style jsx>{ textEffect }</style>
    <style jsx>{ fadeIn }</style>
  </section>
)
