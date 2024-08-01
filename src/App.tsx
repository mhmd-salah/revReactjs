import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Counter from "./components/Counter";


function App() {
  console.log("<App/>");
  const [counter, setCounter] = useState(0);
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl">counter : {counter}</div>
      <button
        onClick={()=>setCounter(prev => prev+1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >+</button>
      <hr className="h-3"/>
      <LoginForm/>
      <Counter/>
    </main>
  );
}
export default App;
