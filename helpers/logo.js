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
      { pos: [[25, 75], [50, 25], [75, 75]], color: '#333' },
      { pos: [[20, 80], [50, 20], [80, 80]], color: 'rgba(50, 50, 50, 0.4)', shrimmer: true },
      { pos: [[15, 85], [50, 30], [85, 85]], color: 'rgba(100, 100, 100, 0.4)', shrimmer: true },
      { pos: [[10, 95], [50, 15], [90, 95]], color: 'rgba(150, 150, 150, 0.4)', shrimmer: true },
      { pos: [[7, 90], [50, 10], [93, 90]], color: 'rgba(200, 200, 200, 0.4)', shrimmer: true },
      { pos: [[5, 85], [50, 0], [95, 85]], color: 'rgba(0, 0, 0, 0.4)' },

      { pos: [[25, 25], [50, 75], [75, 25]], color: 'rgba(200, 200, 200, 0.4)', shrimmer: true  },
      { pos: [[20, 20], [50, 80], [80, 20]], color: 'rgba(150, 150, 150, 0.4)', shrimmer: true  },
      { pos: [[15, 15], [50, 70], [85, 15]], color: 'rgba(100, 100, 100, 0.4)', shrimmer: true  },
      { pos: [[10, 10], [50, 80], [90, 10]], color: 'rgba(50, 50, 50, 0.4)', shrimmer: true  },
      { pos: [[7, 17], [50, 90], [93, 17]], color: 'rgba(25, 25, 25, 0.4)' },
      { pos: [[5, 25], [50, 100], [95, 25]], color: 'rgba(0, 0, 0, 0.4)'  }
    ]
  }
}
