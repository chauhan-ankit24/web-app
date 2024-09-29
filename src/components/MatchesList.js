import React from 'react';
import MatchCard from './MatchCard';
import { useSelector } from 'react-redux';

// Helper function to group matches by date
const groupMatchesByDate = (matches) => {
  return matches.reduce((acc, match) => {
    acc[match.date] = acc[match.date] || [];
    acc[match.date].push(match);
    return acc;
  }, {});
};

const MatchesList = () => {
  const filteredItems = useSelector((state) => state.search.filteredItems);
  const groupedMatches = groupMatchesByDate(filteredItems);

  return (
    <div className="relative flex-grow flex flex-col">
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



export default MatchesList;
