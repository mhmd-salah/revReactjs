import { ReactNode } from "react";
import "./head.scss"
type Title ={
  title:string,
  children:ReactNode,
}
export default function Heading(props:Title){
  const { title, children } = props;
  return <>
    <h1>{title}</h1>
    {children}
  </>
}