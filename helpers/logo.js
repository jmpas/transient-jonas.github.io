export const structureManager = {
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
  blog() {
    return [
      { pos: [[78.125, 21.875], [78.125, 40.625], [59.375, 40.625]], color: '#333', shrimmer: true },
      { pos: [[78.125, 21.875], [59.375, 21.875], [59.375, 40.625]], color: '#333', shrimmer: true },
      { pos: [[78.125, 40.625], [59.375, 40.625], [59.375, 59.375]], color: '#333', shrimmer: true },
      { pos: [[59.375, 21.875], [59.375, 40.625], [40.625, 40.625]], color: '#333', shrimmer: true },
      { pos: [[59.375, 40.625], [59.375, 59.375], [40.625, 59.375]], color: '#333', shrimmer: true },
      { pos: [[59.375, 40.625], [40.625, 40.625], [40.625, 59.375]], color: '#333', shrimmer: true },
      { pos: [[40.625, 59.375], [59.375, 59.375], [40.625, 78.125]], color: '#333', shrimmer: true },
      { pos: [[40.625, 59.375], [40.625, 40.625], [21.875, 59.375]], color: '#333', shrimmer: true },
      { pos: [[40.625, 59.375], [40.625, 78.125], [21.875, 78.125]], color: '#333', shrimmer: true },
      { pos: [[21.875, 59.375], [40.625, 59.375], [21.875, 78.125]], color: '#333', shrimmer: true },

      { pos: [[0, 50], [12.5, 37.5], [12.5, 62.5]], color: '#333', shrimmer: true },
      { pos: [[100, 50], [87.5, 62.5], [87.5, 37.5]], color: '#333', shrimmer: true }
    ]
  },
  photography() {
    return [
      { pos: [[30, 0], [45, 56], [63, 0]], color: '#333' },
      { pos: [[0, 0], [44, 56], [29, 0]], color: '#333' },

      { pos: [[64, 0], [47, 52], [99, 0]], color: '#333' },
      { pos: [[47, 54], [100, 32], [100, 0]], color: '#333' },

      { pos: [[100, 34], [50, 54], [100, 60]], color: '#333' },
      { pos: [[100, 62], [52, 55], [100, 99]], color: '#333' },

      { pos: [[99, 100], [51, 55], [80, 100]], color: '#333' },
      { pos: [[79, 100], [52, 58], [39, 100]], color: '#333' },

      { pos: [[0, 100], [50, 60], [38, 100]], color: '#333' },
      { pos: [[48, 60.5], [0, 63], [0, 99]], color: '#333' },

      { pos: [[0, 62], [45, 60], [0, 35]], color: '#333' },
      { pos: [[0, 34], [45, 59], [0, 2]], color: '#333' },
    ]
  },
  experiment() {
    return [
      { pos: [[20, 20], [50, 95], [80, 20]], color: '#333' },
      { pos: [[20, 20], [50, 95], [80, 20]], color: '#333' },
      { pos: [[0, 62], [50, 20], [100, 62]], color: '#333' },
      { pos: [[80, 20], [88, 0], [50, 20]], color: '#333' },
      { pos: [[20, 20], [12, 0], [50, 20]], color: '#333' },
      { pos: [[29, 44], [45, 47], [35, 46.5]], color: '#fff' },
      { pos: [[71, 44], [55, 47], [65, 46.5]], color: '#fff' },
      { pos: [[48, 66], [50, 67], [52, 66]], color: '#fff' },
      { pos: [[40, 55], [44.2, 63], [46, 65]], color: '#fff' },
      { pos: [[43, 55], [45.8, 63], [46, 65]], color: '#fff' },
      { pos: [[60, 55], [55.8, 63], [54, 65]], color: '#fff' },
      { pos: [[57, 55], [54.1, 63], [54, 65]], color: '#fff' }
    ]
  }
}

export const polygonsTransitions = n => (
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // 12 pieces
    .reduce((acc, n) => {
      const s = n * .09 + 0.3
      const t = n * .02 + 0.2
      const ct = n * .02

      return acc += `
        .polygon-${ n} {
          transition: -webkit-clip-path ${ s}s ${t}s cubic-bezier(.7, .3, 0, 1), clip-path ${s}s ${t}s cubic-bezier(.7, .3, 0, 1), background-color ${s}s ${t}s cubic-bezier(.7, .3, 0, 1), border-radius ${s}s ${t}s cubic-bezier(.7, .3, 0, 1);
        }\r\n`
    }, '')
)


export const polygons = (structure, shape) => (
  structure.reduce((acc, item, i) => {
    const values = item.pos.reduce((acc, set) => [...acc, `${set[0]}% ${set[1]}%`], [])

    return acc += `.${shape}-piece.polygon-${++i} {
      clip-path: polygon(${ values.join(', ')});
      -webkit-clip-path: polygon(${ values.join(', ')});
      background: ${ (item.color || 'inherit')};
    }\r\n`
  }, ``)
)
