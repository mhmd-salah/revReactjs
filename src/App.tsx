import { useDispatch } from "react-redux";
import { addProduct } from "./app/ProductsSlice";
import Navbar from "./components/Navbar";
import UsersContext from "./context/UsersContext";
import AppRouter from "./Router";

function App() {
  const dispatch = useDispatch()
  const dispatchHandler = ()=>{
    dispatch(addProduct({id:1,title:"string"}));
  }
  return (
      <main className="text-white">
        <UsersContext>
          <Navbar />
          <Navbar.Sub text="Sub Navbar" />
          <button onClick={dispatchHandler}>add</button>
          <AppRouter />
        </UsersContext>
      </main>
  );
}
export default App;
