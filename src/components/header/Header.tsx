import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigator = useNavigate();

  const login = () => {
    navigator('/user');
  };

  return (
    <div>
      <h1>Header</h1>
      <button onClick={login}>Вход Администратора</button>
    </div>
  );
};

export default Header;
