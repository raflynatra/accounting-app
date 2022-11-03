import jwtDecode from "jwt-decode";
import { useLocation, Navigate } from "react-router-dom";
import BaseLayout from "../pages/BaseLayout";

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
