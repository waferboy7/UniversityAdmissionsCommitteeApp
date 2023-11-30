import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter: React.FC = () => {
  const auth = Cookies.get('auth');

  return (auth === 'true' ? <Outlet /> : <Navigate to="/login" />);
};

export default PrivateRouter;
