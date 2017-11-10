import styles from '../styles/smoke'

import { Component } from 'react'

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

    return <div className='smoke'>
      <div className={`polygon smoke smoke-1 ${modifier}`}></div>
      <div className={`polygon smoke smoke-2 ${modifier}`}></div>
      <div className={`polygon smoke smoke-3 ${modifier}`}></div>
      <div className={`polygon smoke smoke-4 ${modifier}`}></div>
      <div className={`polygon smoke smoke-5 ${modifier}`}></div>
      <style jsx>{ styles }</style>
    </div>
  }
}
