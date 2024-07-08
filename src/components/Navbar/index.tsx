import { Link } from "react-router-dom";
import "./index.scss";
interface IProps {
  home: string;

}
export default function Navbar({ home ,}: IProps) {
  return (
    <ul className="navList">
      <div className="container">
        <Link  to="/">{home}</Link>
        <Link to="content">content</Link>
        <Link to="about">About</Link>
        <Link to="hook">Hook</Link>
      </div>
    </ul>
  );
}
