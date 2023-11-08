import { useEffect } from 'react'
import { Chart } from '@antv/g2'

const AntVOne = () => {
  useEffect(() => {
    setTimeout(() => {
      const chart = new Chart({
        container: 'container',
        autoFit: true
      })

      chart
        .data({
          type: 'fetch',
          value: 'https://assets.antv.antgroup.com/g2/range-spline-area.json',
          transform: [
            {
              type: 'map',
              callback: ([x, low, high, v2, v3]) => ({ x, low, high, v2, v3 })
            }
          ]
        })
        .axis('y', { title: false })
        .scale('x', { type: 'linear', tickCount: 10 })

      chart
        .area()
        .encode('x', 'x')
        .encode('y', ['low', 'high'])
        .encode('shape', 'smooth')
        .style('fillOpacity', 0.65)
        .style('fill', '#64b5f6')
        .style('lineWidth', 1)

      chart
        .line()
        .encode('x', 'x')
        .encode('y', 'v3')
        .encode('color', '#FF6B3B')
        .encode('shape', 'smooth')

      chart.render()
    }, 100)
  }, [])

  return (
    <>
      <div style={{ width: 600, height: 300 }} id="container"></div>
    </>
  )
}

export default AntVOne
