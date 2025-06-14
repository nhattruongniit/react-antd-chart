import { Button, Checkbox, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import ChartRender from '../../components/chart-render'

function Chart() {
  return (
    <div className='h-[calc(100vh-64px)] flex justify-between'>
      <div className='w-[300px] h-full pt-4 border-r-[1px] border-[#ddd] shrink-0'>
        <div className='flex flex-col h-full justify-start'>
          <h3 className="uppercase text-center text-[14px]">Control Center</h3>
          <hr className='my-2'/>
          <div className='flex items-center justify-end mx-3'>
            <Button type="primary">Apply</Button>
          </div>
          <div className='mx-3'>
            <div className='h-[calc(100vh-250px)]'>
              <div className="font-bold text-[12px] mt-5">Selected Members / Sections</div>
              <div className='mt-4 h-[calc(100vh-287px)] overflow-auto'>
                <div className="p-2 mb-2 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
                  <span className="font-medium">Tony Nguyen</span>
                </div>
                <div className="p-2 mb-2 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
                  <span className="font-medium">Minh Nguyen</span>
                </div>
                <div className="p-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                  <span className="font-medium">Antony John</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grow w-1/2 max-w/1-2 text-center m-4'>
        <div className='flex items-center justify-end mb-4'>
          <div className='mr-2'>Chart type:</div>
          <Select
            defaultValue="line"
            style={{ width: 120 }}
            options={[
              { value: 'line', label: 'Line chart' },
              { value: 'bar', label: 'Bar chart' },
              { value: 'table', label: 'Table' },
            ]}
          />
        </div>
        <div className='w-full h-[calc(100vh-130px)] flex items-center'>
          <div className='w-full'>
            <ChartRender  />
          </div>
        </div>
      </div>

      <div className='w-[300px] h-full pt-4 border-l-[1px] border-[#ddd] shrink-0'>
        <div className='flex flex-col h-full justify-between'>
          <h3 className="uppercase text-center text-[14px]">VARIABLES</h3>
          <hr className='my-2'/>
          <div className='px-3'>
            <Select
              defaultValue="all"
              className='w-full border-b-[1px] border-[#ddd]'
              variant="borderless"
              options={[
                { value: 'all', label: 'All' },
                { value: 'meat', label: 'Meat' },
                { value: 'vegetables', label: 'Vegetables' },
              ]}
            />
            <div className='mt-4'>
              <Input 
                className='w-full border-b-[1px] border-[#ddd]'
                variant="borderless" 
                addonBefore={<SearchOutlined />} 
                placeholder="Search ..." 
              />
            </div>
          </div>
          <div className='h-[calc(100vh-60px)] px-3'>
            <div className='mt-4 pb-4 h-[calc(100vh-220px)] overflow-auto'>
              <div>
                <Checkbox>Tony Nguyen</Checkbox>
              </div>
              <div>
                <Checkbox>Minh Nguyen</Checkbox>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Chart