import { ResponsiveLine } from '@nivo/line'

export const ChartBox = () => {
  const data = [
    {
      id: 'Valor',
      color: 'hsl(251, 70%, 50%)',
      data: [
        { x: 'Jan', y: 400 },
        { x: 'Feb', y: 300 },
        { x: 'Mar', y: 100 },
        { x: 'Apr', y: 300 },
        { x: 'may', y: 1000 },
        { x: 'jun', y: 500 },
        { x: 'jul', y: 800 },
        { x: 'ago', y: 2000 },
        { x: 'set', y: 500 },
        { x: 'out', y: 1000 },
        { x: 'nov', y: 3000 },
        { x: 'dez', y: 2000 }
      ]
    }
  ]

  return (
    <div className="p-4 bg-white rounded shadow-md" style={{ height: 300 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 30, bottom: 50, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
        axisBottom={{ legend: 'Mês', legendOffset: 36, legendPosition: 'middle' }}
        axisLeft={{ legend: 'Valor', legendOffset: -30, legendPosition: 'middle' }}
        colors={{ scheme: 'category10' }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
      />
    </div>
  )
}