import dynamic from 'next/dynamic'

import Page from '../layouts/main'
import PrimaryTitle from '../components/primary-title'
import Paragraph from '../components/paragraph'

import styles from './about.styles'
import textEffect from '../styles/text-effect'
import fadeIn from '../styles/fade-in'

const metaData = {
  title: 'Nipher - Contact',
  description: 'Web developer, amateur photographer, dreaming man',
  url: 'https://nipher.io/about'
}

export default () => {
  return (
    <Page meta={metaData} logoModifier='big'>
      <div className='about-page'>
        <div className='intro-text'>
          <div className='main-intro'>
            <PrimaryTitle>Hi, I'm Jonas</PrimaryTitle>
            <PrimaryTitle><span className='text-effect'>I unfold ideas into code</span></PrimaryTitle>
            <Paragraph>in case you like labels, I'm listing a few of them that would suit me well, like&hellip;</Paragraph>
            <br />
            <Paragraph>- software engineer</Paragraph>
            <Paragraph>- web developer</Paragraph>
            <Paragraph>- amateur creative coder</Paragraph>
            <Paragraph>- traveller</Paragraph>
            <Paragraph>- amateur photographer</Paragraph>
            <Paragraph>- vegan</Paragraph>
            <Paragraph>- earthling</Paragraph>
          </div>
          <div className='about-intro'>
            <PrimaryTitle>I like cold weather</PrimaryTitle>
            <PrimaryTitle>and&hellip;</PrimaryTitle>
            <Paragraph>I work as a Senior Front-end developer at <a href='https://www.0x.se/'><code>0+X</code></a>, a technology company offering expert consultancy to companies in Scandinavia.</Paragraph>
            <br />
            <Paragraph>My main focus throughout my career has been web technologies, software architecture development for custom needs and also collaborating with designers on the creative process.</Paragraph>
            <br />
            <Paragraph> If you want to know more about me or get in touch:</Paragraph>
            <br />
            <div className='links fade-in'>
              <a href='https://twitter.com/nipher_jonas'>twitter </a>
              /
              <a href='https://github.com/nipher'> github </a>
              /
              <a href='https://unsplash.com/@nipher'> unsplash </a>
              /
              <a href='https://instagram.com/nipher_jonas'> instagram </a>
              /
              <a href='https://www.linkedin.com/in/jonasmendes'> linkedin </a>
              /
              <a href='mailto:jonas@nipher.io'> e-mail</a>
            </div>
            <br />
            <Paragraph>GPG Public Key:</Paragraph>
            <br />
            <Paragraph><a href='/static/nipher-public-key.asc'><code>get_key</code></a></Paragraph>
            <br />
            <Paragraph>Fingerprint:</Paragraph>
            <br />
            <Paragraph><code>3055 2FFF 8CE5 A81B 84E4  D436 36D6 ADCB A7FE 1C8F</code></Paragraph>
          </div>
        </div>
        <style jsx>{styles}</style>
        <style jsx>{textEffect}</style>
        <style jsx>{fadeIn}</style>
      </div>
    </Page>
  )
}
