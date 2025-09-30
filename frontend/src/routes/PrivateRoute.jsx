import { Navigate } from "react-router-dom";
import { useUser } from "../shared/UserContext";
const PrivateRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/register" replace />;
  }

  return children;
};
export default PrivateRoute;
