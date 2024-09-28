import React from 'react';
import MatchCard from './MatchCard';

const generateMatches = () => {
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

  return matches;
};

const MatchesList = () => {
  const matches = generateMatches();
  const groupedMatches = groupMatchesByDate(matches);

  return (
    <div className="relative flex-grow flex flex-col">
      {/* Top Separator Line */}
      <div className="h-1 bg-white w-full mb-4" /> {/* White line for separation */}
      
      {/* Buttons Container */}
      <div className="flex justify-center m-4">
        {['Upcoming', '🟡  LIVE', 'Completed'].map(label => (
          <div key={label} className="mx-2">
            <button className="w-28 h-10 border-2 border-gray-600 rounded-lg text-white bg-black-800 hover:bg-gray-700">
              {label}
            </button>
          </div>
        ))}
      </div>

      {/* Matches Container */}
      <div
        id="matches-container"
        className="w-full p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        style={{ height: 'calc(100vh - 200px)' }} // Adjusting height based on header, buttons, and footer
      >
        {Object.keys(groupedMatches).map(date => (
          <div key={date} className="w-full mb-4"> {/* Add margin bottom to separate date sections */}
            {/* Render the date header with line */}
            <div className="flex items-center m-5">
              <hr className="flex-grow border-t border-gray-600" />
              <div className="flex items-center justify-center w-30 h-9 border-2 border-gray-600 rounded-2xl px-5"> {/* Rectangular Boundary */}
                <span className="text-lg text-white">{date + ' 2024'}</span>
              </div>
              <hr className="flex-grow border-t border-gray-600" />
            </div>
            <div className="grid grid-cols-2 gap-4"> {/* Fixed two-column layout for match cards */}
              {groupedMatches[date].map(match => (
                <MatchCard
                  key={match.id}
                  teamA={match.teamA}
                  teamB={match.teamB}
                  date={match.date}
                  time={match.time}
                  price={match.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to group matches by date
const groupMatchesByDate = (matches) => {
  return matches.reduce((acc, match) => {
    acc[match.date] = acc[match.date] || [];
    acc[match.date].push(match);
    return acc;
  }, {});
};

export default MatchesList;
