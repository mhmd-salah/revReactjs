import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LangLayout() {
  return (
    <>
      <Navbar home="Home" />
      <div className="flex">
        <div className="flex flex-col text-white w-[200px] p-10 bg-teal-600"  >
          <a href="#" className="p-3">one</a>
          <a href="#" className="p-3">one</a>
          <a href="#" className="p-3">one</a>
        </div>
        <Outlet />
      </div>
    </>
  );
}

