import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className=" flex justify-between p-4 items-center bg-gray-800 text-white">
      <div className="profile-image rounded-full w-10 h-10 bg-gray-400"></div>
      <div className="flex-1 text-center">App Title</div>
      <SearchBar />
      <div className="menu-icon w-8 h-8 bg-gray-500 rounded-full"></div>
    </header>
  );
};

export default Header;
