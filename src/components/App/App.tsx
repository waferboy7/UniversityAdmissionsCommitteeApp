import './App.scss';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const buttonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={buttonClick}>{count}</button>
      <hr />
      <a href="https://google.com">google</a>
    </div>
  );
}

export default App;
