import { Component } from 'react'

function beat(value, intensity = 2, frequency = 2) {
  const v = Math.atan(Math.sin(value * Math.PI * frequency) * intensity);
  return (v + Math.PI / 2) / Math.PI;
}

export default class Loading extends Component {
  canvas = null
  animationFrameTaskId = null

  renderCanvas(context, width, height, frame = 0) {
    const scale = beat(frame)
    const lineWidth = 20 * Math.sin(Math.PI * scale)
    const radius = width / 8 * 0.25 + width / 14 * scale

    context.fillStyle = '#fff'
    context.fillRect(0, 0, width, height)
    context.lineWidth = lineWidth
    context.beginPath()
    context.arc(width / 4, height / 4, radius, 0, Math.PI * 2, false)
    context.strokeStyle = '#ddd'
    context.stroke()
  }


  animate = time => {
    if (!this.canvas) return

    const duration = 3000
    const frame = (time % duration) / duration
    const context = this.canvas.getContext('2d')
    const pixelRatio = window.devicePixelRatio

    this.animationFrameTaskId = window.requestAnimationFrame(this.animate)

    context.save()
    context.scale(pixelRatio, pixelRatio)

    this.renderCanvas(context, this.canvas.width, this.canvas.height, frame)
    context.restore()
  }

  componentDidMount() {
    this.animationFrameTaskId = window.requestAnimationFrame(this.animate)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameTaskId)
  }

  render() {
    return (
      <div className='loading'>
        <canvas ref={el => this.canvas = el}></canvas>
        <style jsx>{`
          canvas {
            width: 100%;
            height: 100%;
          }

          .loading {
            width: 100%;
            height: 100%
          }
        `}</style>
      </div>
    )
  }
}
