import triangulate from 'delaunay-triangulate'
import randomFloat from 'random-float'

const BG_COLOR = '#FFF'
const POINTS_COUNT = 10
const POLYGONS_COUNT = POINTS_COUNT * 3
const nodes = [...Array(POINTS_COUNT).keys()]
  .map(i => ({
    coords: [50, 50],
    opacity: 0
  }))
const oldNodes = [...Array(POINTS_COUNT).keys()]
  .map(i => ({
    coords: [50, 50],
    opacity: 0
  }))
const nodesTimeChange = 700
const RENDER_TIME = 1000 / 25
const nodesHistory = []
let animationFrameTaskId

export function stop() {
  window.cancelAnimationFrame(animationFrameTaskId)
}

export function play() {
  /**
   * Styles
   */
  {
    const tag = document.createElement('style')
    tag.type = 'text/css'
    tag.innerHTML += `body { background: ${BG_COLOR}; } canvas.dark-crystal-experiment {}`
    document.body.appendChild(tag)
  }

  const canvas = document.querySelector('.dark-crystal-experiment')
  const context = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const stack = []

  function render() {
    stack.map(fn => fn())
    stack.splice(0, stack.length)
    animationFrameTaskId = window.requestAnimationFrame(render)
  }

  setInterval(() => {
    stack.push(() => {
      for (let i = 0, n = nodes.length; i < n; i++) {
        if (window.innerWidth > 1000) {
          const randomX = randomFloat(-20, 20) + 50
          const randomY = randomFloat(-40, 40) + 50

          nodes[i] = {
            coords: [randomX, randomY],
            opacity: randomFloat(.2, .33)
          }
        } else {
          const randomX = randomFloat(-40, 40) + 50
          const randomY = randomFloat(-30, 30) + 50

          nodes[i] = {
            coords: [randomX, randomY],
            opacity: randomFloat(.2, .33)
          }
        }
      }
    })
  }, nodesTimeChange)

  stack.push(() => {
    for (let i = 0, n = nodes.length; i < n; i++) {
      const randomX = randomFloat(-20, 20) + 50
      const randomY = randomFloat(-50, 50) + 50

      nodes[i] = {
        coords: [randomX, randomY],
        opacity: randomFloat(.2, .33)
      }
    }
  })

  setInterval(() => {
    stack.push(() => {
      clearCanvas()
      const nodes = getNodes()
      nodesHistory.push(nodes)

      for (let i = 0, n = nodesHistory.length; i < n; i++) {
        const nodes = nodesHistory[i]

        const coords = []
        for (let i = 0, n = nodes.length; i < n; i++) {
          coords.push(nodes[i].coords)
        }
        const triangulation = triangulate(coords)

        const triangles = []
        for (let i = 0, n = triangulation.length; i < n; i++) {
          const item = triangulation[i]
          triangles.push([nodes[item[0]].coords, nodes[item[1]].coords, nodes[item[2]].coords])
        }

        drawTriangles(triangles, 6)
        fillTriangles(triangles, 3, .1)
        fillTriangles(triangles, 0, 1)
      }

      if (window.innerWidth > 1000) {
        if (nodesHistory.length > 10) nodesHistory.shift()
      } else {
        if (nodesHistory.length > 2) nodesHistory.shift()
      }
    })
  }, RENDER_TIME)

  window.requestAnimationFrame(render)


  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  /**
   * Increases points based on their orientation on the screen
   * @param {Array} points Array of point coordinates
   *
   * @returns {Array} Array of point coordinates with its values increased based on their orientation
   */
  function increasePoints(points, value) {
    return points.map(point => point > 50 ? point + value : point - value)
  }

  function fillTriangles(points, value, opacity) {
    for (let i = 0, n = points.length; i < n; i++) {
      fillTriangle(points[i], value || 0, opacity)
    }
  }

  function fillTriangle(triangle, value, overrideOpacity) {
    const trianglePercentages = []
    for (let i = 0, n = triangle.length; i < n; i++) {
      const coords = increasePoints(triangle[i], value)

      trianglePercentages.push([
        coords[0] * window.innerWidth / 100,
        coords[1] * window.innerHeight / 100
      ])
    }

    context.beginPath()

    context.moveTo(trianglePercentages[0][0], trianglePercentages[0][1])
    context.lineTo(trianglePercentages[1][0], trianglePercentages[1][1])
    context.lineTo(trianglePercentages[2][0], trianglePercentages[2][1])
    context.lineTo(trianglePercentages[0][0], trianglePercentages[0][1])

    context.lineWidth = 0.3
    context.strokeStyle = BG_COLOR
    context.fillStyle = `rgba(0, 0, 0, ${overrideOpacity})`
    context.closePath()
    context.fill()
    context.stroke()
  }

  function drawTriangles(points, increaseValue) {
    const triangles = points

    for (let i = 0, n = triangles.length; i < n; i++) {
      const triangle = triangles[i]

      drawLine(
        increasePoints(triangle[0], increaseValue),
        increasePoints(triangle[1], increaseValue))
      drawLine(
        increasePoints(triangle[1], increaseValue),
        increasePoints(triangle[2], increaseValue))
      drawLine(
        increasePoints(triangle[2], increaseValue),
        increasePoints(triangle[0], increaseValue))
    }
  }

  /**
   * Draws a direct line from point 'a' to point 'b'
   * @param {Array} a Coordinates to point 'a'
   * @param {Array} b Coordinates to point 'b'
   */
  function drawLine(a, b) {
    a = [a[0] * window.innerWidth / 100, a[1] * window.innerHeight / 100]
    b = [b[0] * window.innerWidth / 100, b[1] * window.innerHeight / 100]

    context.beginPath()
    context.moveTo(a[0], a[1])
    context.lineTo(b[0], b[1])
    context.lineWidth = .1
    context.strokeStyle = '#000'
    context.stroke()
  }

  /**
   * Random nodes around an initial position
   * @param {Integer} x Starting 'x' coordinate for generating randomic points
   * @param {Integer} y Starting 'y' coordinate for generating randomic points
   *
   * @returns {Array} Array with random x and y coordinates
   */
  function getNodes() {
    const nodeSet = []

    for (let i = 0, n = nodes.length; i < n; i++) {
      let newX, newY, newOpacity

      const opacity = {
        initial: oldNodes[i].opacity,
        final: nodes[i].opacity,
        diff: nodes[i].opacity - oldNodes[i].opacity
      }

      const coords = {
        initial: oldNodes[i].coords,
        final: nodes[i].coords,
        diff: {
          x: nodes[i].coords[0] - oldNodes[i].coords[0],
          y: nodes[i].coords[1] - oldNodes[i].coords[1]
        }
      }

      let xPxPerFrame
      let yPxPerFrame
      let opacityPerFrame

      if (coords.diff.x !== 0) {
        xPxPerFrame = (coords.diff.x / (nodesTimeChange / RENDER_TIME))
        yPxPerFrame = (coords.diff.y / (nodesTimeChange / RENDER_TIME))
        opacityPerFrame = opacity.diff / (nodesTimeChange / RENDER_TIME) * 30

        newX = coords.initial[0] + xPxPerFrame
        newY = coords.initial[1] + yPxPerFrame
        newOpacity = opacity.initial + opacityPerFrame
      } else {
        newX = coords.final[0]
        newY = coords.final[1]
      }

      oldNodes[i].coords[0] = newX
      oldNodes[i].coords[1] = newY

      nodeSet.push({
        coords: [newX, newY],
        opacity: newOpacity
      })
    }

    return nodeSet
  }
}
