import './CustomSelect.scss';

import { useState } from 'react';

interface CustomSelectProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect }: CustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className={`select-header ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an option'}
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
