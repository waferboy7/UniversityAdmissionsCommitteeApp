import './Guest.scss';

import CustomSelect from '@components/customSelect/CustomSelect';
import Header from '@components/header/Header';
import Table from '@components/table/Table';
import allItems from '@constants/index';
import ISpecialtyApplicationsCount from '@interfaces/specialtyApplicationsCount';
import { useEffect, useState } from 'react';

const Guest: React.FC = () => {
  useEffect(() => {
    document.title = 'Guest';
  }, []);

  const [items, setItems] = useState<ISpecialtyApplicationsCount[]>([]);

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);

    setItems(allItems[Number(selectedOption) - 1]);
  };

  const options = ['1', '2', '3'];

  return (
    <div>
      <Header />
      <h1>Custom Select Example</h1>
      <CustomSelect options={options} onSelect={handleSelect} />
      <Table items={items} />
    </div>
  );
};

export default Guest;
