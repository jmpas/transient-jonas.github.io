import Link from 'next/link'

const structureManager = {
  logo() {
    return [
      { pos: [[0, 0], [33.3, 33.3], [33.3, 0]], color: '#333', shrimmer: true },
      { pos: [[0, 0], [0, 33.3], [33.3, 33.3]], color: '#333', shrimmer: true },
      { pos: [[0, 33.3], [33.3, 33.3], [33.3, 66.6]], color: '#333', shrimmer: true },
      { pos: [[33.3, 0], [66.6, 33.3], [33.3, 33.3]], color: '#333', shrimmer: true },
      { pos: [[33.3, 33.3], [66.6, 66.6], [33.3, 66.6]], color: '#333', shrimmer: true },
      { pos: [[33.3, 33.3], [66.6, 66.6], [66.6, 33.3]], color: '#333', shrimmer: true },
      { pos: [[33.3, 66.6], [66.6, 66.6], [66.6, 100]], color: '#333', shrimmer: true },
      { pos: [[66.6, 33.3], [66.6, 66.6], [100, 66.6]], color: '#333', shrimmer: true },
      { pos: [[66.6, 66.6], [66.6, 100], [100, 100]], color: '#333', shrimmer: true },
      { pos: [[66.6, 66.6], [100, 66.6], [100, 100]], color: '#333', shrimmer: true },
      { pos: [[66.6, 0], [100, 0], [100, 33.3]], color: '#333', shrimmer: true },
      { pos: [[0, 66.6], [33.3, 100], [0, 100]], color: '#333', shrimmer: true }
    ]
  },
  photography() {
    return [
      // Clouds
      { pos: [[18, 30], [60, 35], [70, 25]], color: '#eaeaea', shrimmer: true },
      { pos: [[50, 20], [85, 25], [95, 20]], color: '#eaeaea', shrimmer: true },

      // Distant mountains
      { pos: [[-22, 70], [18, 40], [110, 90]], color: '#eaeaea', shrimmer: true },
      { pos: [[-15, 100], [60, 38], [140, 90]], color: '#eaeaea', shrimmer: true },

      // high mountain 1
      { pos: [[8, 100], [30, 30], [60, 100]], color: '#111' },
      { pos: [[23.5, 50], [30, 30], [42.8, 60]], color: '#aaa', shrimmer: true },
      // high mountain 2
      { pos: [[60, 100], [80, 35], [110, 100]], color: '#111' },
      { pos: [[76.7, 45], [80, 35], [88, 52]], color: '#aaa', shrimmer: true },

      // Small mountain 1
      { pos: [[-15, 100], [10, 50], [25, 100]], color: '#333' },
      { pos: [[4.8, 60], [10, 50], [16, 70]], color: '#aaa', shrimmer: true },
      // Small mountain 2
      { pos: [[40, 100], [60, 60], [80, 100]], color: '#333' },
      { pos: [[52.4, 75], [60, 60], [72.6, 85]], color: '#aaa', shrimmer: true },
    ]
  },
  experiment() {
    return [
      { pos: [[50, 50], [50, 50], [50, 50]], color: '#333' },
      { pos: [[50, 50], [50, 50], [50, 50]], color: '#333' },

      // top
      { pos: [[30, 30], [38, 40], [50, 25]], color: '#333', shrimmer: true },
      { pos: [[50, 25], [38, 40], [62, 40]], color: '#777', shrimmer: true },
      { pos: [[50, 25], [62, 40], [70, 30]], color: '#333', shrimmer: true },

      // middle
      { pos: [[38, 40], [50, 53], [62, 40]], color: '#aaa', shrimmer: true },
      { pos: [[30, 53], [38, 40], [50, 53]], color: '#333', shrimmer: true },
      { pos: [[70, 53], [62, 40], [50, 53]], color: '#333', shrimmer: true },
      { pos: [[30, 30], [30, 53], [38, 40]], color: '#777', shrimmer: true },
      { pos: [[70, 30], [62, 40], [70, 53]], color: '#777', shrimmer: true },

      // bottom
      { pos: [[30, 53], [50, 70], [50, 53]], color: '#333', shrimmer: true },
      { pos: [[70, 53], [50, 70], [50, 53]], color: '#333', shrimmer: true },
    ]
  }
}

function polygons (shape) {
  return structureManager[shape]().reduce((acc, item, i) => {
    const values = item.pos.reduce((acc, set) => [...acc, `${ set[0] }% ${ set[1] }%`], [])
    return acc += `.${ shape }-piece.polygon-${ ++i } {
  -webkit-clip-path: polygon(${ values.join(', ') });
  background: ${ (item.color || 'inherit') };
}\r\n`
  }, '')
}

function polygonAnimation () {
  let animations = ''

  for (let i = 1, n = 12; i <= n; i++) {
    const s = i * .04 + 0.3
    const t = i * .02 + 0.2
    const ct = i * .02

    animations += `
.polygon-${ i } {
  transition: -webkit-clip-path ${ s }s ${ t }s cubic-bezier(.7, .3, 0, 1), background-color ${ s }s ${ ct }s;
}\r\n\r\n`
  }

  return animations
}

function shimmeringAnimation (shape) {
  return structureManager[shape]()
    .reduce((acc, item, i) => {
      if (!item.shrimmer) return acc

      return acc += `.${ shape }-piece.polygon-${ ++i }::before {
  animation-delay: ${ i * .035 + 0.2 }s;
  animation-duration: 5s;
  animation-name: shimmer;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}\r\n`
  }, '')
}

function unstableAnimation (shape) {
 return structureManager[shape]()
    .reduce((acc, item, i) => {
      if (!item.shrimmer) return acc

      return acc += `.${ shape }-piece.polygon-${ ++i }::before {
  animation-delay: ${ i * .02 + 0.2 }s;
  animation-duration: 2s;
  animation-name: unstable-${ i };
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}\r\n
@keyframes unstable-${ i } {
  0% { background-color: rgba(255,255,255,0); }
  30% { background-color: rgba(255,255,255, 1); }
  100% { background-color: rgba(255,255,255,0); }
}\r\n`
  }, '')
}

export default ({ shape = 'logo' }) => {
  return <Link href='/'>
    <a>
      <div className='logo'>
        {
          structureManager[shape]().map((_, i) => (
            <div key={ i } className={`${ shape }-piece polygon-${ ++i } polygon`}></div>
          ))
        }
        <style global jsx>{`
          ${ polygons('logo') }
          ${ polygons('photography') }
          ${ polygons('experiment') }
          ${ shimmeringAnimation('logo') }
          ${ shimmeringAnimation('photography') }
          ${ unstableAnimation('experiment') }
          ${ polygonAnimation() }

          .logo {
            position: relative;
            height: 50px;
            width: 50px;
          }

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
            60% { background-color: rgba(255,255,255,.2); }
            100% { background-color: rgba(255,255,255,0); }
          }
        `}</style>
      </div>
    </a>
  </Link>
}
