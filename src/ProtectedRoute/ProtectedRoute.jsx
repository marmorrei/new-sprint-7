import { useUserLoginContext } from '../context/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const [username] = useUserLoginContext();

  if (username === undefined) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
}
