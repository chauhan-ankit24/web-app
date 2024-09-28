import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/slices/matchesSlice';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setInput(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="p-4">
      <div className={`search-bar transition-all ${isExpanded ? 'w-full' : 'w-12'} bg-gray-200 rounded-full`}>
        {isExpanded ? (
          <input
            className="w-full p-2"
            value={input}
            onChange={handleSearch}
            placeholder="Search teams or dates"
          />
        ) : (
          <button onClick={() => setIsExpanded(true)} className="p-2">🔍</button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
