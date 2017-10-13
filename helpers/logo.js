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
  photography() {
    return [
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

      // Clouds
      { pos: [[50, 34], [20, 37], [95, 37]], color: '#eaeaea', shrimmer: true, modifier: 'cloud' },
      { pos: [[50, 28], [20, 31], [95, 31]], color: '#eaeaea', shrimmer: true, modifier: 'cloud' },
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
