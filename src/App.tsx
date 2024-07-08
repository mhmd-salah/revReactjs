import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Hooks from "./pages/Hooks";

function App() {
  const [page,setPage]=useState<"home"|"products"|"about"|"hook">("home")
  return (
    <div>
      <Navbar home="Home" setPage={setPage}/>
      {page === "home" && <Home />}
      {page === "products" && <Products />}
      {page === "about" && <About/>}
      {page === "hook" && <Hooks/>}
    </div>
  );
}
export default App;
