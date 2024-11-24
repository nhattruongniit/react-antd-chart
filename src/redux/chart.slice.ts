import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { VarialbesType } from '../types'

export interface ChartSliceProps {
  selected_variables: VarialbesType[],
  dataChart: any
}

const initialState: ChartSliceProps = {
  selected_variables: [],
  dataChart: null
}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    selectedVariable: (state, action: PayloadAction<VarialbesType>) => {
      state.selected_variables = [...state.selected_variables, action.payload]
    },
    applyChart: (state, action: PayloadAction<any>) => {
      state.dataChart = action.payload
    }
  },
})


// Action creators are generated for each case reducer function
export const { selectedVariable, applyChart } = chartSlice.actions
 
export default chartSlice.reducer