import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={Home("hello")} />
        <Route path="about" element={<h1>About</h1>}/>
      </Route>
    </>
  )
);
export default router;
