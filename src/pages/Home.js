import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import MatchesList from "../components/MatchesList";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import BottomNavBar from "../components/BottomNavBar";
import { setItems } from "../redux/slices/matchesSlice";

const Home = () => {
  const [currentView, setCurrentView] = useState("matches");
  const [, setHeaderVisible] = useState(true);
  const [isFooterVisible, setFooterVisible] = useState(true);
  const dispatch = useDispatch();
  const scrollableRef = useRef(null); // Create a ref for the scrollable content

  useEffect(() => {
    const matches = [];

    // Specifying matches for each date
    const matchData = [
      { date: new Date(2024, 9, 1), count: 3 },
      { date: new Date(2024, 9, 2), count: 2 },
      { date: new Date(2024, 9, 3), count: 1 },
      { date: new Date(2024, 9, 4), count: 2 },
      { date: new Date(2024, 9, 5), count: 1 },
      { date: new Date(2024, 9, 6), count: 2 },
      { date: new Date(2024, 9, 7), count: 3 },
      { date: new Date(2024, 9, 8), count: 2 },
      { date: new Date(2024, 9, 9), count: 1 },
    ];

    let matchId = 1;

    matchData.forEach(({ date, count }) => {
      for (let i = 0; i < count; i++) {
        matches.push({
          id: matchId++,
          teamA: `TA${matchId}`,
          teamB: `TB${matchId}`,
          date: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          time: "16:30",
          price: matchId * 10 + 5,
        });
      }
    });

    dispatch(setItems(matches));
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollableRef.current) return;

      const scrollTop = scrollableRef.current.scrollTop;
      const scrollHeight = scrollableRef.current.scrollHeight;
      const clientHeight = scrollableRef.current.clientHeight;

      if (scrollTop > scrollHeight - clientHeight) {
        setFooterVisible(true);
        setHeaderVisible(true);
      } else if (scrollTop > lastScrollY) {
        setHeaderVisible(false);
        setFooterVisible(false);
      } else {
        setHeaderVisible(true);
        setFooterVisible(true);
      }
      lastScrollY = scrollTop; // Update last scroll position
    };

    let lastScrollY = 0; // Initialize last scroll position
    const currentScrollable = scrollableRef.current;

    currentScrollable.addEventListener("scroll", handleScroll);

    return () => {
      currentScrollable.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case "matches":
        return (
          <div
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track appearance-none"
            ref={scrollableRef}
          >
            <MatchesList />
          </div>
        );
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      default:
        return <MatchesList />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header
        className={"translate-y-0 transition-transform duration-300"}
      >
        <Header /> {/* Show/Hide Header */}
      </header>
      {/* Top Separator Line */}
      <div className="h-1 bg-white w-full mb-1" />{" "}
      {/* White line for separation */}
      <div className="flex-1 overflow-hidden">
        {renderContent()} {/* Render the content here */}
      </div>
      <footer
        className={`${
          isFooterVisible ? "translate-y-0" : "translate-y-full h-0"
        } transition-transform duration-300`}
      >
        <BottomNavBar onNavClick={setCurrentView} /> {/* Show/Hide Footer */}
      </footer>
    </div>
  );
};

export default Home;
