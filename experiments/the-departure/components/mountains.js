import { Component } from 'react'

import styles from '../styles/mountains'

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { modifier } = this.props
    return <div className='mountains'>
      <div className={`polygon mountain big-right ${ modifier }`}></div>
      <div className={`polygon mountain-detail big-right ${ modifier }`}></div>
      <div className={`polygon mountain-detail big-right-2 ${ modifier }`}></div>

      <div className={`polygon mountain big-left-4 ${ modifier }`}></div>
      <div className={`polygon mountain big-left ${ modifier }`}></div>
      <div className={`polygon mountain big-left-2 ${ modifier }`}></div>
      <div className={`polygon mountain big-left-3 ${ modifier }`}></div>
      <div className={`polygon mountain-detail big-left ${ modifier }`}></div>
      <div className={`polygon mountain-detail big-left-4 ${ modifier }`}></div>
      
      <div className={`polygon mountain small-left ${ modifier }`}></div>
      <div className={`polygon mountain small-right ${ modifier }`}></div>
      <style jsx>{ styles }</style>
    </div>
  }
}
