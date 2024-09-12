import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";



export const store = configureStore({
  reducer:{
    product: ProductsSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;