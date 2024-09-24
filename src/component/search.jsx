import React, { useState, useCallback, useContext } from 'react';
import { debounce } from 'lodash';
import { WeatherContext } from '../../src/context/context';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { setCity, error } = useContext(WeatherContext);

  const handleSearch = useCallback(
    debounce((city) => {
      if (city.trim() === '') {
        setCity('Gurgaon');
      } else {
        setCity(city);
      }
    }, 1000),
    [setCity]
  );

  const handleChange = (e) => {
    setInput(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="pl-5 pr-4 py-2 w-full max-w-md border border-gray-300 rounded-3xl focus:outline-none "
        placeholder="Enter city"
      />

      {error && (
        <div className="text-red-500 mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
