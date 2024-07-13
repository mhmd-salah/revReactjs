import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{}
export default function Input({...rest}:Props) {
  return (
    <input {...rest} className="py-1 px-2 text-black border-sky-400 border-l outline-none"/>
  )
}
