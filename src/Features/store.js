import { configureStore } from '@reduxjs/toolkit'
import programsReducer from './Programs/ProgramSlice'


export default configureStore({
  reducer: {
    programs:programsReducer
  },
})