/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

function TextArea() {
  console.log("<TextArea/>");
  return (
      <textarea className="text-black" name="message" id="msg" cols={30} rows={10}></textarea>
  )
}
export default memo(TextArea);