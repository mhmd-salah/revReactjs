import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import Navbar from "../components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Navbar home="home" /> */}
      <Route path="/" element={<h1>home page</h1>}>
        <Route path="content" element={<h1>content page</h1>} />
        <Route path="about" element={<h1>about page</h1>} />
      </Route>
    </>
  )
);
export default router;
