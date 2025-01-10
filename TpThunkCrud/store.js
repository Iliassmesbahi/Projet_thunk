import { configureStore } from "@reduxjs/toolkit";
import slicee from './tutoSlice'
const store = configureStore({
  reducer: {
    tutoo:slicee,
  },
  
});
export default store;