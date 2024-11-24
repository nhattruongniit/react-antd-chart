import { Select } from 'antd'

import ChartRender from './components/chart-render'
import Variables from './components/variables';
import ControlCenter from './components/control-center';

function Chart() {
  return (
    <div className='h-[calc(100vh-64px)] flex justify-between'>
      <div className='w-[300px] h-full pt-4 border-r-[1px] border-[#ddd] shrink-0'>
        <ControlCenter />
      </div>

      <div className='grow w-1/2 max-w/1-2 text-center m-4'>
        <div className='flex items-center justify-end mb-4'>
          <div className='mr-2'>Chart type:</div>
          <Select
            defaultValue="bar"
            style={{ width: 120 }}
            options={[
              { value: 'bar', label: 'Bar chart' },
              { value: 'line', label: 'Line chart' },
              { value: 'pie', label: 'Pie chart' },
            ]}
          />
        </div>
        <div className='w-full h-[calc(100vh-130px)] flex items-center'>
          <div className='w-full'>
            <ChartRender  />
          </div>
        </div>
      </div>

      <Variables />
    </div>
  )
}

export default Chart