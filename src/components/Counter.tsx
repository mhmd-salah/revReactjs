/* eslint-disable react-refresh/only-export-components */

// import { memo } from "react";
import { memo, useCallback, useState } from "react";
import Button from "./Button";

function Counter() {
  console.log("<Counter/>");
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => setCounter((prev) => prev + 1),[]);
  return (
    <div>
      <h3>Counter : {counter}</h3>
      <div>
        <Button onClick={handleClick}>Increment Counter</Button>
      </div>
    </div>
  );
}
export default memo(Counter);
