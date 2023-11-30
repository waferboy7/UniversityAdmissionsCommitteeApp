import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter: React.FC = () => {
  const auth = true;

  return (auth ? <Outlet /> : <Navigate to="/" />);
};

export default PrivateRouter;
