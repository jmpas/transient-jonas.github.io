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
    <div className='intro-text'>
      <div className='main-intro'>
        <PrimaryTitle>Hi, {`I'm Jonas`}</PrimaryTitle>
        <PrimaryTitle><span className='text-effect'>I unfold ideas into code</span></PrimaryTitle>
        <Paragraph>in case you like labels, I'm listing a few of them that would suit me well, like...</Paragraph>
        <br/>
        <Paragraph>- software engineer</Paragraph>
        <Paragraph>- web developer</Paragraph>
        <Paragraph>- amateur creative coder</Paragraph>
        <Paragraph>- traveller</Paragraph>
        <Paragraph>- amateur photographer</Paragraph>
        <Paragraph>- vegetarian</Paragraph>
        <Paragraph>- earther</Paragraph>
      </div>
      <div className='about-intro'>
        <PrimaryTitle>I like cold weather</PrimaryTitle>
        <PrimaryTitle>and...</PrimaryTitle>
        <Paragraph>I'm originally from Rio, Brazil, currently working remotely as a member of the Toptal core engineering team and travelling a lot in the meantime, mostly to cold places.</Paragraph>
        <br/>
        <Paragraph>My main focus throughout my career has been web technologies, both backend and front-end, working on software architecture development for custom needs and also collaborating with designers on the creative process.</Paragraph>
        <br/>
        <Paragraph> If you want to know more about me or get in touch:</Paragraph>
        <br/>
        <div className='links fade-in'>
          <Link href='https://twitter.com/nipher_jonas' middleware={ startTransition } delay={ 1000 }>twitter </Link>
          /
          <Link href='https://github.com/nipher' middleware={ startTransition } delay={ 1000 }> github </Link>
          /
          <Link href='https://500px.com/nipher' middleware={ startTransition } delay={ 1000 }> 500px </Link>
          /
          <Link href='https://instagram.com/nipher_jonas' middleware={ startTransition } delay={ 1000 }> instagram </Link>
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
