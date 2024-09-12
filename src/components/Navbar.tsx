import { useAppSelector } from "../app/Hooks";
import { useUsersContext } from "../context/UsersContext";

function Navbar() {
  const data = useAppSelector((state)=>state.product.products)
  console.log(data)
  const value = useUsersContext();
  return <nav className="py-6 bg-sky-700 text-center">Navbar -{data.length} </nav>;
}

Navbar.Sub = ({text}:{text:string}) => {
  return (
    <h2 className="bg-sky-600 text-center">
      {text}
    </h2>
  );
};
export default Navbar;
