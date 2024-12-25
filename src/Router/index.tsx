import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createRoutesFromElements(
    <>
    <Route path="/" element={<h2>Layout <Outlet/></h2>}>
      <Route index element={<h1>Home Page</h1>}/>
      <Route path="about" element={<h1>About Page</h1>}/>
    </Route>
    </>
);
const routes = createBrowserRouter(router);
function AppRouter() {
  useEffect(()=>{
    console.log("hello from app Router Component")
  },[])
  return <RouterProvider router={routes} />;
}

export default AppRouter;
