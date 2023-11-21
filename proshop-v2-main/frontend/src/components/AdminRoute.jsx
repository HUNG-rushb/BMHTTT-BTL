import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // return userInfo && userInfo.isAdmin ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to='/login' replace />
  // );
  return <Outlet />;
};
export default AdminRoute;
