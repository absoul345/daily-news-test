import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuthenticated } from '../services/admin/admin.slice';

import { PATHS_URL } from '../constants/paths-url.constants';

const ProtectedRoute = () => {
  const isAuthenitcated = useSelector(selectIsAuthenticated);

  return isAuthenitcated ? <Outlet /> : <Navigate to={`/${PATHS_URL.AUTH}`} />;
};

export default ProtectedRoute;
