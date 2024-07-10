import { NavLink } from "react-router-dom";

export default function LearnAside() {
  return (
    <aside>
    <ul className="navList">
        <div className="container ">
          <NavLink to="/learn" end>Quic Start</NavLink>
          <NavLink to="Thinking-in-react">Thinkin in react</NavLink>
          <NavLink to="/learn/installations">installation</NavLink>
        </div>
      </ul>
    </aside>
  );
}
