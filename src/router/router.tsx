import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<div>
        <Navbar home="home"/>
        <h1>root layout</h1>
        <Outlet/>
      </div>} >
        <Route path="content" element={<h1>content page</h1>}/>
        <Route path="products" element={<h1>products page</h1>}/>
      </Route>
    </>
  )
)
export default router;