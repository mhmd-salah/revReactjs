import { NavLink } from "react-router-dom";

export default function LearnAside() {
  return (
    <aside>
    <ul className="navList">
        <div className="container bg-red-500">
          <NavLink to="/learn">Quic Start</NavLink>
          <NavLink to="/Thinking-in-react">Thinkin in react</NavLink>
          <NavLink to="installations">installation</NavLink>
        </div>
      </ul>
    </aside>
  );
}
