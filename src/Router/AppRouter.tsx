import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../App/store";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

const AppRouter = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
};

export default AppRouter;
