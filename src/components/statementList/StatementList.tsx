import './StatementList.scss';

import StatementItem from '@components/statementItem/StatementItem';

interface IStatementListProps {
  statements: string[];
}

const StatementList: React.FC<IStatementListProps> = ({ statements }: IStatementListProps) => (
  <div className="statement-list">
    {statements.map((statement, index) => (
      <StatementItem key={index} statement={statement} index={index} />
    ))}
  </div>
);

export default StatementList;
