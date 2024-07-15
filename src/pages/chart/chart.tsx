import { Button, Checkbox, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import ChartTabs from '../../components/chart-tabs'

function Chart() {
  return (
    <div className='h-[calc(100vh-64px)] flex justify-between'>
      <div className='w-[350px] h-full pt-4 border-r-[1px] border-[#ddd] shrink-0'>
        <div className='flex flex-col h-full justify-between px-4'>
          <h3 className="uppercase text-center text-[14px]">Control Center</h3>
          <div className='h-[calc(100vh-60px)]'>
            <div className="font-bold text-[12px] mt-5">Selected Variables / Sections</div>
            <div className='mt-4 pb-4 h-[calc(100vh-210px)] overflow-auto'>
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
          <div className='border-t-[1px] border-[#ddd] shrink-0 h-[40px] flex items-center justify-end'>
            <Button type="primary">Apply</Button>
          </div>
        </div>
      </div>

      <div className='grow w-1/2 max-w/1-2'>
        <ChartTabs />
      </div>

      <div className='w-[350px] h-full pt-4 border-l-[1px] border-[#ddd] shrink-0'>
        <div className='flex flex-col h-full justify-between px-4'>
          <h3 className="uppercase text-center text-[14px]">VARIABLES</h3>
          <div>
            <div className='mb-2'>Type:</div>
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
          <div className='h-[calc(100vh-60px)]'>
            <div className='mt-4 pb-4 h-[calc(100vh-230px)] overflow-auto'>
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