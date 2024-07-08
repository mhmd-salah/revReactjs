import "./index.scss";
interface IProps {
  home: string;
  setPage:(page:"home"|"products"|"about"|"hook")=>void;
}
export default function Navbar({ home ,setPage}: IProps) {
  return (
    <ul className="navList">
      <div className="container">
        <li onClick={()=>setPage("home")}>{home}</li>
        <li onClick={()=>setPage("products")}>products</li>
        <li onClick={()=>setPage("about")}>About</li>
        <li onClick={()=>setPage("hook")}>Hook</li>
      </div>
    </ul>
  );
}
