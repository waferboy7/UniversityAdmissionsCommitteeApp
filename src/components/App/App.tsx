import './App.scss';

import Guest from '@components/guest/Guest';
import StatementPage from '@components/statementPage/StatementPage';
import User from '@components/user/User';
import PrivateRouter from '@components/utils/router/PrivateRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/statement/:statementId" element={<StatementPage />} />
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="/" element={<Guest />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
