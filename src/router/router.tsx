import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages";
import Contribute from "../pages/Contribute";
import ProtuctedRoute from "../components/Auth/ProtuctedRoute";
import Login from "../pages/Login";

const isLoggedIn = false;

const userData:{email:string}|null = isLoggedIn?{email:"mohamed.ozzx@gmail.com"}:null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={Home("hello")} />
        <Route path="about" element={<h1>About</h1>} />
        <Route
          path="login"
          element={
            <ProtuctedRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
              <Login />
            </ProtuctedRoute>
          }
        />
        <Route
          path="contribute"
          element={
            <ProtuctedRoute isAllowed={isLoggedIn} redirectPath="/login">
              <Contribute />
            </ProtuctedRoute>
          }
        />
        <Route
          path="contact"
          element={<h1 className="text-6xl">Contac Us</h1>}
        />
      </Route>
    </>
  )
);
export default router;
