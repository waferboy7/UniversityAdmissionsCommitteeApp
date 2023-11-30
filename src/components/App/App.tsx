import './App.scss';

import Guest from '@components/guest/Guest';
import StatementPage from '@components/statementPage/statementPage';
import User from '@components/user/User';
import Logout from '@components/utils/logout/Logout';
import PrivateRouter from '@components/utils/router/PrivateRouter';
import LoginPage from '@pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/statement/:statementId" element={<StatementPage />} />
            <Route path="/user" element={<User />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Guest />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
