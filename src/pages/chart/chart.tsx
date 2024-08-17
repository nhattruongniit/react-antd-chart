import { Button, Checkbox, Input, Select, DatePicker } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import ChartRender from '../../components/chart-render'

const { RangePicker } = DatePicker;

function Chart() {
  return (
    <div className='h-[calc(100vh-64px)] flex justify-between'>
      <div className='w-[300px] h-full pt-4 border-r-[1px] border-[#ddd] shrink-0'>
        <div className='flex flex-col h-full justify-between'>
          <h3 className="uppercase text-center text-[14px]">Control Center</h3>
          <hr className='my-2'/>
          <div className='mx-3'>
            <div>
              <div className='font-bold text-[12px] mb-2'>Select date:</div>
              <RangePicker />
            </div>
            <div className='h-[calc(100vh-250px)]'>
              <div className="font-bold text-[12px] mt-5">Selected Variables / Sections</div>
              <div className='mt-4 h-[calc(100vh-287px)] overflow-auto'>
                <div>
                  <Checkbox>Bacon</Checkbox>
                </div>
                <div>
                  <Checkbox>Bacon</Checkbox>
                </div>
                <div>
                  <Checkbox>Bacon</Checkbox>
                </div>
                <div>
                  <Checkbox>Bacon</Checkbox>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t-[1px] border-[#ddd] shrink-0 h-[40px] flex items-center justify-end mx-3'>
            <Button type="primary">Apply</Button>
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
                placeholder="Search variables ..." 
              />
            </div>
          </div>
          <div className='h-[calc(100vh-60px)] px-3'>
            <div className='mt-4 pb-4 h-[calc(100vh-220px)] overflow-auto'>
              <div>
                <Checkbox>Bacon</Checkbox>
              </div>
              <div>
                <Checkbox>Bacon</Checkbox>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Chart