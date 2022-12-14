import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  children?: ReactElement; // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
  authentication: boolean; // true :인증을 반드시 해야하만 접속가능, false : 인증을 반디스 안해야만 접속 가능
}

export default function PrivateRoute({
  authentication,
}: PrivateRouteProps): React.ReactElement | null {
  const isAuthenticated = localStorage.getItem("token");

  if (authentication) {
    return isAuthenticated === null || isAuthenticated === "false" ? (
      <Navigate to="/labeling/welcome" />
    ) : (
      <Outlet />
    );
  } else {
    return isAuthenticated === null || isAuthenticated === "false" ? (
      <Outlet />
    ) : (
      <Navigate to="/main" />
    );
  }
}
