import { Component } from 'react'

import styles from '../styles/land'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { modifier: '' }
  }
  componentDidMount() {
    if (this.state.modifier) return

    setTimeout(() => {
      this.setState({
        ...this.state,
        modifier: 'active'
      })
    }, 500)
  }
  render() {
    const { modifier } = this.state
    return <div className='land'>
      <div className={`polygon land active`}></div>
      <style jsx>{ styles }</style>
    </div>
  }
}
