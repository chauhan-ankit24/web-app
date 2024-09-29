// Home.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import MatchesList from '../components/MatchesList';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import BottomNavBar from '../components/BottomNavBar';
import { setItems } from '../redux/slices/matchesSlice'; // Import Redux action to set items

const Home = () => {
  const [currentView, setCurrentView] = React.useState('matches');
  const dispatch = useDispatch();

  useEffect(() => {
    const matches = [];
    
    // Specifying matches for each date
    const matchData = [
      { date: new Date(2024, 9, 1), count: 3 }, // 3 matches on October 1
      { date: new Date(2024, 9, 2), count: 2 }, // 2 matches on October 2
      { date: new Date(2024, 9, 3), count: 1 }, // 1 match on October 3
      { date: new Date(2024, 9, 4), count: 2 }, // 2 matches on October 4
      { date: new Date(2024, 9, 5), count: 1 }, // 1 match on October 5
      { date: new Date(2024, 9, 6), count: 2 }, // 2 matches on October 6
      { date: new Date(2024, 9, 7), count: 3 }, // 3 matches on October 7
      { date: new Date(2024, 9, 8), count: 2 }, // 2 matches on October 8
      { date: new Date(2024, 9, 9), count: 1 }, // 1 match on October 9
    ];
  
    let matchId = 1; // To assign unique IDs to matches
  
    matchData.forEach(({ date, count }) => {
      for (let i = 0; i < count; i++) {
        matches.push({
          id: matchId++,
          teamA: `TA${matchId}`, // Short names
          teamB: `TB${matchId}`,
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), // Format as "Mon Day"
          time: '16:30', // 24-hour format
          price: (matchId) * 10 + 5, 
        });
      }
    });

    dispatch(setItems(matches));
  }, [dispatch]);

  // Render the current view based on the selected navigation option
  const renderContent = () => {
    switch (currentView) {
      case 'matches':
        return <MatchesList />; // MatchesList will display the filtered matches
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
      {/* Header Component contains the SearchBar */}
      <Header />
      
      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>

      {/* Bottom navigation bar to switch between views */}
      <BottomNavBar onNavClick={setCurrentView} />
    </div>
  );
};

export default Home;
