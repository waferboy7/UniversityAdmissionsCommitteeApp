import { useParams } from 'react-router-dom';

const StatementPage = () => {
  const { statementId } = useParams();

  return (
    <div>
      <h1>Информация об абитуриенте</h1>
      <h2>{statementId}</h2>
    </div>
  );
};

export default StatementPage;
