import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import   shoppingCartSlice  from "./features/ShopingCart/ShowpingCard";
import CounterSlice from "./features/counter/CounterSlice";

// ...
const store = configureStore({
  reducer: {
    counter: CounterSlice,
    shoppingCart: shoppingCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppDispatch=useDispatch.withTypes<AppDispatch>();

export default store;




// export const useAppSelector = useSelector.withTypes<RootState>();