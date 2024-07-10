import { Outlet } from "react-router-dom";
import LearnAside from "../components/LearnAside";
import Navbar from "../components/Navbar";

export default function LearnLayout() {
  return (
    <>
        <Navbar home="Home" />
      <div className="flex">
        <LearnAside />
      <Outlet />
      </div>
    </>
  );
}
