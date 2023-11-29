import './Table.scss';

import ISpecialtyApplicationsCount from '@interfaces/specialtyApplicationsCount';

interface ITableProps {
  items: ISpecialtyApplicationsCount[];
}

const Table: React.FC<ITableProps> = ({ items }: ITableProps) => {
  const hello = 'qwe';

  return (
    <ul className="table">
      {items.map((item, index) => (
        <li key={index}>
          <ul className="cell">
            <li>{item.header}</li>
            <li>{item.num_application}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Table;
