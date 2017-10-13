export default structure => (
  structure.reduce((acc, item, index) => {
    const i = index + 1
    const s = i * .04 + 0.3
    const t = i * .02 + 0.2
    const ct = i * .02

    return acc += `
.polygon-${ i } {
  transition: -webkit-clip-path ${ s }s ${ t }s cubic-bezier(.7, .3, 0, 1), background-color ${ s }s ${ ct }s;
}\r\n\r\n`
  }, ``)
)
