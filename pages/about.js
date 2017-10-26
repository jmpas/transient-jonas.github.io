import Page from '../layouts/main'
import AboutSection from '../components/about-section'

const metaData = {
  title: 'Nipher - Contact',
  description: 'Web developer, amateur photographer, dreaming man'
}

const About = props => (
  <Page meta={ metaData } logoModifier='big'>
    <AboutSection />
  </Page>
)

export default About
