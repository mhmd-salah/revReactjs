/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

interface Iprop {
  colorObj: {
    backgroundColor: string;
    color: string;
  };
}
function ColorBox({ colorObj }: Iprop) {
  
  return (
    <div
      className="flex items-center justify-center my-5 w-20 h-20 rounded-md"
      style={{ color: colorObj.color, background: colorObj.backgroundColor }}
    >
      <span>ColorBox</span>
    </div>
  );
}

export default memo(ColorBox);
