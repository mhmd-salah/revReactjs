import { useCallback, useState } from "react";

import Button from "./components/Button";
import ColorBox from "./components/ColorBox";


function App() {
  console.log("<App/>");
  const [counter, setCounter] = useState<number>(0);
  const HandleClick = useCallback(() => {
    setCounter(prev => prev + 1)
  },[])
    return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h3>counter is : {counter}</h3>
      <Button
        onClick={HandleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        +
      </Button>
      <ColorBox  colorObj={{color:"red",backgroundColor:"blue"}}/>
      {/* <LoginForm/>
      <Counter/> */}
    </main>
  );
}
export default App;
