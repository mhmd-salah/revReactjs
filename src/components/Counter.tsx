import { useSelector } from "react-redux";
import Button from "./Button";
import { RootState, useAppDispatch } from "../App/Store"; // Adjust this import path as needed
import { ReactNode } from "react";
import { increment } from "../App/features/counter/CounterSlice";

const Counter = () => {
  const {value,text} = useSelector(({counter}: RootState) =>counter)
  const disPatch = useAppDispatch()
  return <div>
  <h3>Counter : {value}</h3>
  <Button onClick={()=>disPatch(increment(1))}>{text as ReactNode}</Button>
</div>;
};

export default Counter;
