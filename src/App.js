import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Mobile screen container */}
      <div className="w-[375px] max-h-screen relative overflow-hidden">
        <Home />
      </div>
    </div>

  );
}

export default App;
