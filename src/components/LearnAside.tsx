import { NavLink } from "react-router-dom";

export default function LearnAside() {
  return (
    <aside className="">
      <ul className="navList w-[300px] h-full">
        <div className="container flex flex-col *:p-3 *:my-3 *:rounded-md ">
          <NavLink to="/learn" end>
            Quic Start
          </NavLink>
          <NavLink to="/learn/thinking-in-react">Thinkin in react</NavLink>
          <NavLink to="/learn/instlations">installation</NavLink>
        </div>
      </ul>
    </aside>
  );
}
