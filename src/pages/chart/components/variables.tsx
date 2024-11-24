import { Checkbox, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';

import { dataVariables, VARIABLE_TYPE } from '../../../mocks/dataVariables';
import { VarialbesType } from '../../../types';
import { selectedVariable } from '../../../redux/chart.slice';
import { RootState } from '../../../stores';

function Variables() {
  const dispatch = useDispatch();
  const selectedVariables = useSelector((state: RootState) => state.chart.selected_variables);

  const optionVariableType = Object.values(VARIABLE_TYPE).map(item => {
    return {
      label: item,
      value: item
    }
  })

  function onCheckVariable(item: VarialbesType) {
    dispatch(selectedVariable(item))
  }

  return (
    <div className='w-[300px] h-full pt-4 border-l-[1px] border-[#ddd] shrink-0'>
      <div className='flex flex-col h-full justify-between'>
        <h3 className="uppercase text-center text-[14px]">VARIABLES</h3>
        <hr className='my-2'/>
        <div className='px-3'>
          <Select
            defaultValue="all"
            className='w-full border-b-[1px] border-[#ddd]'
            variant="borderless"
            options={[{ value: 'all', label: 'All' }, ...optionVariableType]}
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
            {dataVariables.map(variable => (
              <div key={variable.id}>
                <Checkbox 
                  onChange={() => onCheckVariable(variable)}
                  disabled={selectedVariables.some(item => item.id === variable.id)}
                >
                  {variable.name}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Variables