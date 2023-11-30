import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  useEffect(() => {
    Cookies.remove('auth');
  });

  return <Navigate to="/" />;
};

export default Logout;
