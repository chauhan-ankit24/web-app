import React, { useState } from 'react';
import { FaRegCalendarAlt, FaUserCircle, FaCog } from 'react-icons/fa'; // Import icons

const BottomNavBar = ({ onNavClick }) => {
  const [activeTab, setActiveTab] = useState('matches'); // Track active tab

  const handleNavClick = (tab) => {
    setActiveTab(tab); // Update active tab
    onNavClick(tab); // Notify parent about navigation change
  };

  return (
    <footer className="bg-black  text-white p-2 flex justify-around bottom-0 left-0 right-0">
      {/* Matches Button */}
      <button
        onClick={() => handleNavClick('matches')}
        className={`flex flex-col items-center transition-transform duration-300 ${
          activeTab === 'matches' ? 'text-white scale-125' : 'text-gray-500'
        } hover:text-white`}
      >
        <FaRegCalendarAlt size={activeTab === 'matches' ? 24 : 20} /> {/* Adjust size */}
        <span className="text-xs">Matches</span>
      </button>

      {/* Profile Button */}
      <button
        onClick={() => handleNavClick('profile')}
        className={`flex flex-col items-center transition-transform duration-300 ${
          activeTab === 'profile' ? 'text-white scale-125' : 'text-gray-500'
        } hover:text-white`}
      >
        <FaUserCircle size={activeTab === 'profile' ? 24 : 20} /> {/* Adjust size */}
        <span className="text-xs">Profile</span>
      </button>

      {/* Settings Button */}
      <button
        onClick={() => handleNavClick('settings')}
        className={`flex flex-col items-center transition-transform duration-300 ${
          activeTab === 'settings' ? 'text-white scale-125' : 'text-gray-500'
        } hover:text-white`}
      >
        <FaCog size={activeTab === 'settings' ? 24 : 20} /> {/* Adjust size */}
        <span className="text-xs">Settings</span>
      </button>
    </footer>
  );
};

export default BottomNavBar;
