export default (structure, shape) => (
  structure.reduce((acc, item, i) => {
    const values = item.pos.reduce((acc, set) => [...acc, `${ set[0] }% ${ set[1] }%`], [])

    return acc += `.${ shape }-piece.polygon-${ ++i } {
  clip-path: polygon(${ values.join(', ') });
  background: ${ (item.color || 'inherit') };
}\r\n`
  }, ``)
)
