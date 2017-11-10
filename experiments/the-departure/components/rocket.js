import { Component } from 'react'

import styles from '../styles/rocket'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { modifier: '' }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        modifier: 'active'
      })
    }, 0)
  }
  render() {
    const { modifier } = this.state
    return <div className='rocket'>
      <div className={`polygon rocket part-1 ${modifier}`}></div>
      <div className={`polygon rocket part-2 ${modifier}`}></div>
      <style jsx>{ styles }</style>
    </div>
  }
}
