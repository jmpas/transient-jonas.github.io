import Page from '../layouts/main'

const metaData = {
  title: 'Nipher',
  description: 'Web Development, amateur photography & code experiments'
}

const Index = ({ posts }) => (
  <Page meta={ metaData } isMenuOpen={ true } menuPageMode={ true }>
    <style jsx>{`
      :global(.overlay) {
        transform: translateY(0) !important;
      }
    `}</style>
  </Page>
)
export default Index
