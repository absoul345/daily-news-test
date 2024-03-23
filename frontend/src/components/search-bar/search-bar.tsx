import { ChangeEvent } from 'react';

interface IProp {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}

const SearchBar: React.FC<IProp> = ({ setQuery, query }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex w-1/2 mr-5 justify-center">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="border-2 w-full pl-4 rounded-md h-11"
      />
    </div>
  );
};

export default SearchBar;
