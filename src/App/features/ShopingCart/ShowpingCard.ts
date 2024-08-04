import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItemDetails{
  id:number,
  title:string,
  price:number
}
export interface cartItems {
  cartItems: ItemDetails[];
}
export const initialState: cartItems = {
  cartItems: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemDetails>)=>{
      state.cartItems.push(action.payload)
    }
  },
});

export default shoppingCartSlice.reducer;
export const { addToCart } = shoppingCartSlice.actions;
