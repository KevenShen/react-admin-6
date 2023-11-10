import { Chart } from '@antv/g2'
import { useEffect } from 'react'

const AntVTwo = () => {
  useEffect(() => {
    const chart = new Chart({
      container: 'AntTwoChant',
      autoFit: true
    })

    chart.options({
      type: 'interval',
      data: [
        { id: '产品A', value: 526 },
        { id: '产品B', value: 220 },
        { id: '产品C', value: 325 },
        { id: '产品D', value: 561 },
        { id: '产品E', value: 54 }
      ],
      encode: { y: 'value', color: 'id' },
      transform: [{ type: 'stackY' }],
      scale: {
        color: { range: ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb'] }
      },
      coordinate: { type: 'theta', innerRadius: 0.25, outerRadius: 0.8 },
      style: { radius: 4, stroke: '#fff', lineWidth: 2 },
      animate: { enter: { type: 'waveIn' } },
      legend: false,
      labels: [
        { text: 'value', fontWeight: 'bold', offset: 14 },
        {
          text: 'id',
          position: 'spider',
          connectorDistance: 0,
          fontWeight: 'bold',
          textBaseline: 'bottom',
          textAlign: (d) => (['c', 'sass'].includes(d.id) ? 'end' : 'start'),
          dy: -4
        }
      ]
    })

    chart.render()
  }, [])

  return (
    <>
      <div id="AntTwoChant"></div>
    </>
  )
}

export default AntVTwo
