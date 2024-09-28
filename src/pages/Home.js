import React from 'react';
import Header from '../components/Header';
import MatchesList from '../components/MatchesList';
import BottomNavBar from '../components/BottomNavBar';

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* Mobile View Container */}
            <div className="mobile-container shadow-lg relative overflow-hidden">
                <Header />
                <MatchesList />
                <BottomNavBar />
            </div>
        </div>
    );
};

export default Home;
