import { NavLink } from "react-router-dom";

export default function Navbar(){
return (
  <nav className="bg-sky-400 p-6 flex justify-center *:">
    <NavLink to="login">Login</NavLink>
    <NavLink to="contribute">Contribute</NavLink>
    <NavLink to="contact">contact</NavLink>
  </nav>
);
}