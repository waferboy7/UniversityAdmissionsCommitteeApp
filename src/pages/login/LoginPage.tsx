import './LoginPage.scss';

import adm from '@constants/admin-test';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigator = useNavigate();

  const toggleLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
  };

  const togglePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const toggleButton = () => {
    navigator('/');
  };

  const preventDefaultForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (adm.has(login) && adm.get(login)?.password === password) {
      Cookies.set('auth', 'true');

      navigator('/user');
      return;
    }

    alert('Логин или пароль были введены неверно');
    setPassword('');
  };

  return (
    <form className="login" onSubmit={preventDefaultForm}>
      <label htmlFor="login">
        Логин
        <input id="login" type="text" value={login} onChange={toggleLogin} />
      </label>
      <label htmlFor="password">
        Пароль
        <input id="password" type="password" value={password} onChange={togglePassword} />
      </label>
      <div>
        <button type="submit">Войти</button>
        <button type="button" onClick={toggleButton}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
