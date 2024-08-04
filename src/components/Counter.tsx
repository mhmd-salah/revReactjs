import { useSelector } from "react-redux";
import Button from "./Button";
import { RootState, useAppDispatch } from "../App/Store"; // Adjust this import path as needed

import { addToCart, ItemDetails, } from "../App/features/ShopingCart/ShowpingCard";

const Counter = () => {
  const value = useSelector((state: RootState) => state.shoppingCart);
  const dispatch = useAppDispatch()
  console.log(value)
  return (
    <div>
      {value.cartItems.map((item: ItemDetails) => {
        return (
          <div key={item.id} >
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        );
      })}
      <Button
        onClick={() =>
          dispatch(addToCart({ id: 1, title: "product 1", price: 100 }))
        }
      >
        send
      </Button>
    </div>
  );
};

export default Counter;