import React, { useState, useEffect, useRef } from 'react';

import { SORT_OPTION } from '../../constants/common.constats';
import { ArrowIcon } from '../../assets/svg.assets';

interface IProp {
  setActiveOption: React.Dispatch<React.SetStateAction<string>>;
}

const SortButton: React.FC<IProp> = ({ setActiveOption }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const sortButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        sortButtonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !sortButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string): void => {
    setActiveOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left w-32 h-11">
      <button
        type="button"
        className="inline-flex items-center justify-center h-full w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded="true"
        ref={sortButtonRef}
      >
        Sort by
        <ArrowIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <ul
          className="origin-top-right absolute left-0 mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          ref={dropdownRef}
        >
          <li>
            <button
              type="button"
              onClick={() => handleOptionClick(SORT_OPTION.Alphabetically)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
            >
              Alphabetically
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleOptionClick(SORT_OPTION.PublicationDate)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
            >
              Publication date
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortButton;
