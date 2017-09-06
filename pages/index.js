import Page from '../layouts/main'
import ArticleItem from '../components/article-item'

const metaData = {
  title: 'Nipher',
  description: 'Developer, Amateur photographer, dreamer'
}

const articles = [{
  slug: 'test-post',
  title: 'Test',
  date: '08/03/1994',
  description: 'A fake post for testing purpose.',
  key: 1
}].map((post) => <ArticleItem {...post} />)

const Index = () => (
  <Page meta={metaData}>
    <h1>My name is Jonas</h1>
    <section>
      <h2>Articles</h2>
      <ul>{articles}</ul>
    </section>
  </Page>
)

export default Index
