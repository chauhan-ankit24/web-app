// SearchBar.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, filterItems } from '../redux/slices/matchesSlice';
import { FaSearchDollar } from "react-icons/fa";

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
    <div className="p-2">
      <div className={`search-bar transition-all ${isExpanded ? 'w-full h-full' : 'w-10 h-10'} bg-black rounded-full`}>
        {isExpanded ? (
          <input
          type="text"
          className="w-full p-1 pl-2 text-white bg-gray-600 rounded-lg border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition duration-300 shadow-lg placeholder-gray-300"
          value={query}
          onChange={handleSearch}
          placeholder="Search teams or dates ..."
        />        
        ) : (
          <button onClick={() => setIsExpanded(true)} className=" bg-black rounded-full border-2 border-gray-200 hover:bg-gray-500 transition duration-300">
            <FaSearchDollar className="text-white text-xl m-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
