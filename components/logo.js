import Link from 'next/link'

function shimmeringAnimation () {
  let animations = ``

  for (let i = 1, n = 12; i <= n; i++) {
    animations += `
.polygon-${ i }::before {
  animation-delay: ${ i * .05 + .025 }s;
  animation-duration: 1.7s;
  animation-name: shimmer;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}\r\n`
  }

  return animations
}

export default () => (
  <Link href='/'>
    <a>
      <div className='logo'>
        <div className='logo-piece polygon-1'></div>
        <div className='logo-piece polygon-2'></div>
        <div className='logo-piece polygon-3'></div>
        <div className='logo-piece polygon-4'></div>
        <div className='logo-piece polygon-5'></div>
        <div className='logo-piece polygon-6'></div>
        <div className='logo-piece polygon-7'></div>
        <div className='logo-piece polygon-8'></div>
        <div className='logo-piece polygon-9'></div>
        <div className='logo-piece polygon-10'></div>
        <div className='logo-piece polygon-11'></div>
        <div className='logo-piece polygon-12'></div>
        <style global jsx>{`
          .logo {
            position: relative;
            height: 50px;
            width: 50px;
          }

          .logo-piece {
            position: absolute;
            height: 100%;
            width: 100%;
            opacity: 1;
            background: #333;
          }

          .logo-piece::before {
            content: "";
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0); top: 0; left: 0;
            position: absolute;
          }

          @keyframes shimmer {
            0% { background-color: rgba(255,255,255,0); }
            35% { background-color: rgba(255,255,255,.3); }
            100% { background-color: rgba(255,255,255,0); }
          }

          ${ shimmeringAnimation() }

          .polygon-1 {
            -webkit-clip-path: polygon( 0% 0% ,33.3% 33.3% ,33.3% 0% );
          }

          .polygon-2 {
            -webkit-clip-path: polygon( 0% 0% ,0% 33.3% ,33.3% 33.3% );
          }

          .polygon-3 {
            -webkit-clip-path: polygon( 0% 33.3% ,33.3% 33.3% ,33.3% 66.6% );
          }

          .polygon-4 {
            -webkit-clip-path: polygon( 33.3% 0% ,66.6% 33.3% ,33.3% 33.3% );
          }

          .polygon-5 {
            -webkit-clip-path: polygon( 33.3% 33.3% ,66.6% 66.6% ,33.3% 66.6% );
          }

          .polygon-6 {
            -webkit-clip-path: polygon( 33.3% 33.3% ,66.6% 66.6% ,66.6% 33.3% );
          }

          .polygon-7 {
            -webkit-clip-path: polygon( 33.3% 66.6% ,66.6% 66.6% ,66.6% 100% );
          }

          .polygon-8 {
            -webkit-clip-path: polygon( 66.6% 33.3% ,66.6% 66.6% , 100% 66.6%);
          }

          .polygon-9 {
            -webkit-clip-path: polygon( 66.6% 66.6% ,66.6% 100%, 100% 100%);
          }

          .polygon-10 {
            -webkit-clip-path: polygon( 66.6% 66.6% ,100% 66.6% , 100% 100%);
          }

          .polygon-11 {
            -webkit-clip-path: polygon( 66.6% 0% ,100% 0%, 100% 33.3% );
          }

          .polygon-12 {
            -webkit-clip-path: polygon( 0% 66.6% ,33.3% 100% , 0 100%);
          }
        `}</style>
      </div>
    </a>
  </Link>
)
