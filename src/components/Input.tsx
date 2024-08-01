/* eslint-disable react-refresh/only-export-components */
import { InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{}
function Input({...rest}:Props) {
  console.log("<Input/>");
  return (
    <input {...rest} className="py-2 px-3 border-sky-400 border-l outline-none bg-transparent border rounded-sm text-white"/>
  )
}

export default memo(Input);