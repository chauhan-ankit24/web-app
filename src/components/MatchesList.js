import React, { useState } from 'react';
// import ScrollBar from '../components/ScrollBar';

const matches = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  teamA: `Team A${index + 1}`,
  teamB: `Team B${index + 1}`,
  date: `2024-10-${index + 1}`,
}));

const MatchesList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (position) => {
    const container = document.getElementById('matches-container');
    if (container) {
      container.scrollTo({ top: position, behavior: 'smooth' });
      setScrollPosition(position);
    }
  };

  return (
    <div className="bg-red-200 relative flex-grow flex">
      <div
        id="matches-container"
        className="bg-blue-300 w-[100%] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        style={{ height: 'calc(100vh - 160px)' }} // Adjusting height based on header and footer
      >
        {matches.map(match => (
          <div key={match.id} className="border-b py-2">
            <p className="font-semibold">{match.teamA} vs {match.teamB}</p>
            <p className="text-sm text-gray-500">{match.date}</p>
          </div>
        ))}
      </div>
      {/* <ScrollBar matches={matches} onScroll={handleScroll} /> */}
    </div>
  );
};

export default MatchesList;
