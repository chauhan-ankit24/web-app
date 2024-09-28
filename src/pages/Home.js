// Home.js
import React, { useState } from 'react';
import Header from '../components/Header';
import MatchesList from '../components/MatchesList';
import Profile from '../components/Profile'; // Create a simple Profile component
import Settings from '../components/Settings'; // Create a simple Settings component
import BottomNavBar from '../components/BottomNavBar';

const Home = () => {
  const [currentView, setCurrentView] = useState('matches'); // Initial view

  const renderContent = () => {
    switch (currentView) {
      case 'matches':
        return <MatchesList />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <MatchesList />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
      <BottomNavBar onNavClick={setCurrentView} />
    </div>
  );
};

export default Home;
