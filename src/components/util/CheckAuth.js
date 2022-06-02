import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CheckAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth.isLoggedIn);

  console.log(auth);
  if (auth === false) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default CheckAuth;
