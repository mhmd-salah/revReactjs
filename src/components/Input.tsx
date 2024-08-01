/* eslint-disable react-refresh/only-export-components */
import { InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{}
function Input({...rest}:Props) {
  console.log("<Input/>");
  return (
    <input {...rest} className="py-1 px-2 text-black border-sky-400 border-l outline-none"/>
  )
}

export default memo(Input);