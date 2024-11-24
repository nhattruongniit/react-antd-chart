import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../redux/project.slice'
import chartReducer from '../redux/chart.slice';

export const store = configureStore({
  reducer: {
    project: projectReducer,
    chart: chartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch