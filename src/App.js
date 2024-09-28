import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 ">
      {/* Mobile screen container */}
      <div className="w-[96vw] h-[90vh] max-h-screen bg-black shadow-lg relative overflow-hidden md:w-[390px] md:h-[844px] rounded-xl">
        {/* Your App Content */}
        <Home />
      </div>
    </div>

  );
}

export default App;
