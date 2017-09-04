import { Component } from 'react'

import Post from '../components/post'
import Page from '../layouts/main'

export default class extends Component {
  static async getInitialProps ({ query }) {
    return query
  }

  render () {
    const { post, metaData } = this.props
    const { title, description, date } = metaData

    return (
      <Page meta={metaData}>
        <Post title={metaData.title} description={description || ''} date={date} body={post} />
      </Page>
    )
  }
}

