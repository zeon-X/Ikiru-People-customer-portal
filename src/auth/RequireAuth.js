import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const location = useLocation();
  // let userInfo = JSON.parse(localStorage.getItem("user"));

  // if (!userInfo) {
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  // return <Navigate to="/login" />;
  return <div className="mx-auto max-w-[1190px] h-full">{children}</div>;
};

export default RequireAuth;
