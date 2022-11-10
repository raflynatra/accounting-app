import jwtDecode from "jwt-decode";
import { useLocation, Navigate } from "react-router-dom";
import BaseLayout from "../pages/BaseLayout";
import LoginPage from "../pages/LoginPage";

export const checkTokenExpiration = () => {
  const decodeToken = jwtDecode(localStorage.getItem("token"));
  const currDate = new Date();

  if (decodeToken.exp * 1000 < currDate.getTime()) {
    alert("Token Expired!");
    localStorage.removeItem("token");
    return <LoginPage />;
  }
};

export const AccessLoginPageHandler = () => {
  const isAuthenticated = localStorage.getItem("token");

  return <>{isAuthenticated ? <Navigate to="/" /> : <LoginPage />}</>;
};

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const user = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : {};

  return (
    <>
      {allowedRoles.find((role) => role.includes(user.role)) ? (
        <BaseLayout user={user} />
      ) : user.role ? (
        <Navigate to="/" />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
