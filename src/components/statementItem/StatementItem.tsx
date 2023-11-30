import { useNavigate } from 'react-router-dom';

interface IStatementItemProps {
  index: number;
  statement: string;
}

const StatementItem: React.FC<IStatementItemProps> = ({
  index,
  statement,
}: IStatementItemProps) => {
  const navigate = useNavigate();

  const navigateToStatement = (statementId: number) => {
    navigate(`/statement/${statementId}`);
  };

  const toggleButton = () => {
    navigateToStatement(index);
  };

  return (
    <div className="statement-item">
      <p>{index + 1}</p>
      <p>{statement}</p>
      <button onClick={toggleButton}>Подробнее</button>
    </div>
  );
};

export default StatementItem;
