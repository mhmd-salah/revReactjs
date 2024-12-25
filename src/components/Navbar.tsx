import { useUsersContext } from "../context/UsersContext";

function Navbar() {
  const value = useUsersContext();
  return <nav className="py-6 bg-sky-700 text-center">Navbar -{value.length} </nav>;
}

Navbar.Sub = ({text}:{text:string}) => {
  return (
    <h2 className="bg-sky-600 text-center">
      {text}
    </h2>
  );
};
export default Navbar;
