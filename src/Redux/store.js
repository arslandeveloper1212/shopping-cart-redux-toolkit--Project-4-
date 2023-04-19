import { configureStore } from '@reduxjs/toolkit'
import basketreducer from './basketSlice';
export const store = configureStore({
  reducer: {
    basket: basketreducer,
  },
})