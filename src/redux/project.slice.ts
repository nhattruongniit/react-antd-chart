import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProjectItemProps {
  id: number,
  name: string,
  email: string,
  chart: number
};

export interface ProjectSliceProps {
  projects: ProjectItemProps[]
}

const initialState: ProjectSliceProps = {
  projects: []
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    fetchProject: (state, action: PayloadAction<ProjectItemProps[]>) => {
      state.projects = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { fetchProject } = projectSlice.actions

export const createAsyncFetchProject = (payload: ProjectItemProps[]) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(fetchProject(payload))
  }, 1000)
}

export default projectSlice.reducer