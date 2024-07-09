import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<div>
        <Navbar home="home"/>
        <Outlet/>
      </div>} >
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="content" element={<Contact/>}/>
        <Route path="products" element={<h1>products page</h1>}/>
      </Route>
    </>
  )
)
export default router;