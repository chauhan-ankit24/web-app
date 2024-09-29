// SearchBar.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, filterItems } from '../redux/slices/matchesSlice';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    dispatch(setQuery(newQuery));
    dispatch(filterItems()); // Dispatch the filter action to update the filtered list
  };

  return (
    <div className="p-4">
      <div className={`search-bar transition-all ${isExpanded ? 'w-full' : 'w-12'} bg-gray-200 rounded-full`}>
        {isExpanded ? (
          <input
            type="text"
            className="w-full p-2 text-black"
            value={query}
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
