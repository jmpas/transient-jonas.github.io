import { Component } from 'react'
import Link from 'next/link'

import mainStyle from '../styles/logo/base'
import polygonsTransitions from '../styles/logo/polygons-transitions'
import shimmeringAnimation from '../styles/logo/shrimmering-animation'
import polygons from '../styles/logo/polygons'
import cloudSteps from  '../styles/logo/clouds'
import { structureManager } from '../helpers/logo'

const animatedShapes = ['photography']

export default class Logo extends Component {
  constructor(props) {
    super(props)

    const shape = props.shape || 'logo'

    this.state = {
      shape: shape
    }
  }

  componentWillMount() {
    this.setState({
      hasAnimation: animatedShapes.includes(this.state.shape)
    })
  }

  componentDidMount() {
    if (this.state.hasAnimation) this.setAnimationInterval()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasAnimation) {
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
    }, 1000))

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
      }, 3000))
    }, 6000)
  }

  clearAnimationInterval() {
    if (!this.timeouts && !this.interval) return

    clearInterval(this.interval)
    this.timeouts.forEach(item => clearTimeout(item))
    this.timeouts = null
    this.interval = null
  }

  transformLogo() {
    this.setState({
      ...this.state,
      shape: 'logo',
      step: null,
      hasAnimation: false
    })
  }

  transformPhotography() {
    this.setState({
      ...this.state,
      shape: 'photography',
      hasAnimation: true
    })
  }

  componentWillUnmount() {
    this.clearAnimationInterval()
  }

  render() {
    return (
      <Link href='/'>
        <a>
          <div className='logo'>
            {
              structureManager[this.state.shape]().map((item, i) => (
                <div key={ i } className={`${ this.state.shape }-piece polygon-${ ++i } polygon ${( item.modifier || '' )} step-${( this.state.step || '' )}`}></div>
              ))
            }
            <style global jsx>{ mainStyle }</style>
            <style global jsx>{`
              ${ polygons(structureManager.logo(), 'logo') }
              ${ shimmeringAnimation(structureManager.logo(), 'logo') }
              ${ polygonsTransitions(structureManager.logo(), 'logo') }

              ${ polygons(structureManager.photography(), 'photography') }
              ${ shimmeringAnimation(structureManager.photography(), 'photography') }
              ${ polygonsTransitions(structureManager.photography(), 'photography') }
              ${ cloudSteps }

              ${ polygons(structureManager.experiment(), 'experiment') }
              ${ shimmeringAnimation(structureManager.experiment(), 'experiment') }
              ${ polygonsTransitions(structureManager.experiment(), 'experiment') }

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
        </a>
      </Link>
    )
  }
}
