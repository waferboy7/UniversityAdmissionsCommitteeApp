import './User.scss';

import StatementList from '@components/statementList/StatementList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const User = () => {
  const navigate = useNavigate();

  const [statements, setStatements] = useState<string[]>(['123', '231', '1231', '11123']);

  const addStatement = (): void => {
    const newStatement = uuidv4();

    setStatements((prev) => [...prev, newStatement]);
  };

  const toTablePage = () => {
    navigate('/');
  };

  const logout = () => {
    navigate('/logout');
  };

  return (
    <div className="user">
      <button onClick={toTablePage}>Таблица</button>
      <button onClick={addStatement}>Добавить заявление</button>
      <button onClick={logout}>Выйти</button>
      <hr />
      <StatementList statements={statements} />
    </div>
  );
};

export default User;
