import React, { useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaRegUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaListUl } from 'react-icons/fa';
import SearchBar from './SearchBar';
import menuSound from '../assets/menu.mp3';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Vibration feedback for 50ms
    }

    // Play sound
    const audio = new Audio(menuSound);
    audio.volume = 0.1; // Set the volume (0.0 to 1.0)
    audio.play();

    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between p-2 items-center bg-black text-white shadow-md relative z-50">
      {/* Profile Image */}
      <div className="profile-image rounded-full w-10 h-10 overflow-hidden">
        <img 
          src="https://randomuser.me/api/portraits/men/1.jpg" 
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Search Bar */}
      <SearchBar />
      {/* Menu Icon */}
      <div 
        className="menu-icon w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer shadow-lg"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes className="text-white text-xl" /> : <FaBars className="text-white text-xl" />}
      </div>
      {/* Dropdown Menu */}
      <motion.div 
        ref={menuRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.8 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={`absolute top-full right-2 bg-gray-800 text-white rounded-md shadow-lg z-50 transition-all`}
        style={{ transformOrigin: 'top right' }}
      >
        <ul className="p-2">
          {['Upcoming Matches', 'My Profile', 'Settings', 'Help', 'Log Out'].map((item, index) => (
            <li 
              key={index} 
              className={`flex items-center p-3 hover:bg-gray-700 transition duration-200 rounded-md cursor-pointer ${index < 4 ? 'border-b border-white' : ''}`}
            >
              {index === 0 && <FaListUl className="mr-2" />}
              {index === 1 && <FaRegUser className="mr-2" />}
              {index === 2 && <FaCog className="mr-2" />}
              {index === 3 && <FaQuestionCircle className="mr-2" />}
              {index === 4 && <FaSignOutAlt className="mr-2" />}
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
