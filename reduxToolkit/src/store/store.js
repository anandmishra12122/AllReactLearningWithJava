import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../slice/StudentSlice";

const store = configureStore({
  reducer: {
    studentCounter:counterReducer,
  },
})

export default store;