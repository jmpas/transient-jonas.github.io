export default ({ coords, color, opacity, duration, delay }) => (
  <div
    className='polygon'
    style={{
      clipPath: `polygon(${coords})`,
      WebkitClipPath: `polygon(${coords})`,
      background: `rgba(${color}, ${opacity})`,
      transition: `-webkit-clip-path ${duration}s ${delay}s cubic-bezier(.7, .3, 0, 1), clip-path ${duration}s ${delay}s cubic-bezier(.7, .3, 0, 1), background-color ${duration}s ${delay}s cubic-bezier(.7, .3, 0, 1)`
    }}>
  </div>
)
