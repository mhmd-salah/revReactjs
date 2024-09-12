import { ProductsSlice as productsSlice } from "./ProductsSlice";
import { createSlice } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  title: string;
}

export interface IState {
  products: IProduct[];
}

const initialState: IState = {
  products: [{ id: 1, title: "laptop" }],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products = [...state.products, payload];
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default ProductsSlice.reducer;
