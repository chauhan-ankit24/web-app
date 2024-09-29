import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex justify-center pt-1 md:pt-0 min-h-screen bg-black">
      {/* Mobile screen container */}
      <div className="w-[95vw] h-[93vh]  max-h-screen bg-black shadow-lg relative overflow-hidden md:w-[390px] md:h-[844px] lg:w-[390px]l g:h-[844px] rounded-xl">
        {/* Your App Content */}
        <Home />
      </div>
    </div>

  );
}

export default App;
