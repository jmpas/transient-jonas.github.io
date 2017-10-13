export default (structure, shape) => (
  structure.reduce((acc, item, i) => {
    if (!item.shrimmer) return acc

    return acc += `
.${ shape }-piece.polygon-${ ++i }::before {
  animation-delay: ${ i * .035 + 0.2 }s;
  animation-duration: 4s;
  animation-name: shimmer;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}\r\n`
  }, ``)
)
