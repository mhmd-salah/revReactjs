import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../App/hooks";
import AuthTokenManager from "../global/authTokenManager";

const ProtectedRoute = () => {
  const authManager = AuthTokenManager.getInstance();
  // const isAuth = useAppSelector((state) => state.auth.isAuthenticate);
  const token = authManager.getToken();

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
