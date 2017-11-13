import { Component } from 'react'
import Link from './link'

import mainStyle from '../styles/logo/base'
import polygonsTransitions from '../styles/logo/polygons-transitions'
import polygons from '../styles/logo/polygons'
import cloudSteps from  '../styles/logo/clouds'
import fadeIn from '../styles/fade-in'

import { structureManager } from '../helpers/logo'

const animatedShapes = ['photography']

export default class extends Component {
  constructor(props) {
    super(props)

    const shape = props.shape || 'logo'

    this.state = {
      shape: shape
    }
  }

  componentWillMount() {
    this.setState({
      hasAnimation: animatedShapes.includes(this.props.shape)
    })
  }

  componentDidMount() {
    if (this.state.hasAnimation) this.setAnimationInterval()
  }

  componentDidUpdate(prevProps, prevState) {
    if (animatedShapes.includes(this.props.shape)) {
      this.setAnimationInterval()
    } else {
      this.clearAnimationInterval()
    }
  }

  setAnimationInterval() {
    if (!!this.timeouts && !!this.interval) return

    this.timeouts = []

    this.timeouts.push(setTimeout(() => {
      this.setState({
        ...this.state,
        step: 2
      })
    }, 2000))

    this.interval = setInterval(() => {
      this.setState({
        ...this.state,
        step: 1
      })

      this.timeouts.push(setTimeout(() => {
        this.setState({
          ...this.state,
          step: 2
        })
      }, 4000))
    }, 6000)
  }

  clearAnimationInterval() {
    if (!this.timeouts && !this.interval) return

    clearInterval(this.interval)
    this.timeouts.forEach(item => clearTimeout(item))
    this.timeouts = null
    this.interval = null

    this.setState({
      ...this.state,
      step: null
    })
  }

  componentWillUnmount() {
    this.clearAnimationInterval()
  }

  render() {
    const structure = (structureManager[this.props.shape] || structureManager.logo)()
    const shape = structureManager[this.props.shape] ? this.props.shape : 'logo'
    const modifier = this.props.navMode ? '' : this.props.modifier

    return (
      <Link href='/blog' middleware={ this.props.startTransition } delay={ 1000 }>
        <div className={ `logo ${ this.props.navMode ? 'nav-mode' : '' } root ${ modifier } ${ shape }`}>
          {
            structure.map((item, i) => (
              <div key={ i } className={`${ shape }-piece polygon-${ ++i } polygon ${( item.modifier || '' )} step-${( this.state.step || '' )}`}></div>
            ))
          }
          <style jsx>{ fadeIn }</style>
          <style global jsx>{ mainStyle }</style>
          <style global jsx>{`
            ${ polygons(structureManager.logo(), 'logo') }
            ${ polygonsTransitions(structureManager.logo(), 'logo') }

            ${ polygons(structureManager.photography(), 'photography') }
            ${ cloudSteps }

            ${ polygons(structureManager.experiment(), 'experiment') }
            ${ polygons(structureManager.blog(), 'blog') }

            .polygon {
              position: absolute;
              height: 100%;
              width: 100%;
              opacity: 1;
              background: #333;
            }

            .polygon::before {
              content: "";
              width: 100%;
              height: 100%;
              background: rgba(255,255,255,0); top: 0; left: 0;
              position: absolute;
            }

            @keyframes shimmer {
              0% { background-color: rgba(255,255,255,0); }
              50% { background-color: rgba(255,255,255,0); }
              60% { background-color: rgba(255,255,255,.3); }
              100% { background-color: rgba(255,255,255,0); }
            }`}</style>
        </div>
      </Link>
    )
  }
}
