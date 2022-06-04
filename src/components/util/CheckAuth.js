import { Navigate } from "react-router-dom";

const CheckAuth = ({ children }) => {
  const auth = localStorage.getItem("token");

  console.log(!!auth);
  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default CheckAuth;
