import { NavLink } from "react-router-dom";
import "./index.scss";
interface IProps {
  home: string;

}
export default function Navbar({ home ,}: IProps) {
  return (
    <ul className="navList">
      <div className="container">
        <NavLink  to="/">{home}</NavLink>
        <NavLink to="/content">content</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/hook">Hook</NavLink>
        <NavLink to="/learn">learn</NavLink>
      </div>
    </ul>
  );
}
