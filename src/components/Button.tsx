/* eslint-disable react-refresh/only-export-components */

import { memo } from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function Button({ children, ...props }: Iprops) {
  console.log("<Button/>");
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md" {...props}>
      {children}
    </button>
  );
}
export default memo(Button);
