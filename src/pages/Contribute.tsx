import { useLocation } from "react-router-dom";

export default function Contribute() {
  const {state} = useLocation()
  return (
    <div className="flex flex-col w-[500px] mx-atuo ">
      <h1 className="text-3xl mb-3">Contribute</h1>
      <h2 className="mb-3">Email : {state.email}</h2>
      <textarea name="text" id="text" className="text-black text-xl h-[300px]">
      </textarea>
      <button className="px-2 py-1 bg-sky-400 text-2xl mt-4">send</button>
    </div>
  )
}
