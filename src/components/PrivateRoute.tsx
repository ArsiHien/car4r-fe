import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Role from '../const/Role';
import routes from '../config/routes';
import { Spin } from 'antd';

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles: Role[];
}

const PrivateRoute = ({ children, allowedRoles }: PrivateRouteProps) => {
  const location = useLocation();
  const { role, accessToken, isLoading } = useSelector((state: RootState) => state.auth);

  if (isLoading) {
    return <Spin size="large" />; 
  }

  if (!accessToken) {
    // Not logged in, redirect to login page with return url
    return <Navigate to={routes.home} state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(role as Role)) {
    // Role not authorized, redirect to home page
    console.log('Role not authorized:', role); // Add this for debugging

    return <Navigate to={routes.home} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
