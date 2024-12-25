import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../App/hooks";

const ProtectedRoute = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticate);

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
