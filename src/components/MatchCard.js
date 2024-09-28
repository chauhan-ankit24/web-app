import React from 'react';
import { FaFutbol } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MatchCard = ({ teamA, teamB, date, time, price, venue }) => {
    return (
        <motion.div
            className="relative bg-gray-900 rounded-lg shadow-lg p-2 flex flex-col items-center space-y-4 border border-gray-200 border-t-[10px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.90 }}
        >
            {/* Price Tag */}
            <div className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black font-bold px-1 py-0 rounded-full shadow-md">
                {'$ ' + price + ' USD'}
            </div>

            <motion.div
                className="flex justify-between items-center w-full space-x-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Team A */}
                <motion.div
                    className="flex flex-col items-center space-y-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                >
                    <FaFutbol size={36} className="text-blue-500" />
                    <span className="font-semibold text-sm text-white text-transparent bg-clip-text">{teamA}</span>
                </motion.div>

                {/* Date & Time */}
                <motion.div
                    className="flex flex-col items-center space-y-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className="text-xs text-gray-400 font-bold">{date}</span>
                    <span className="text-xs text-white italic font-bold">{time}</span>
                    <span className="text-xs text-gray-400">{venue}</span> {/* Venue added */}
                </motion.div>

                {/* Team B */}
                <motion.div
                    className="flex flex-col items-center space-y-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                >
                    <FaFutbol size={36} className="text-red-500" />
                    <span className="font-semibold text-sm text-white text-transparent bg-clip-text">{teamB}</span>
                </motion.div>
            </motion.div>

            {/* White line above button */}
            <div className="w-full h-[2px] bg-white"></div>

            {/* Join Game Button */}
            <motion.button
                className="w-full text-sm font-bold bg-gradient-to-r from-green-600 to-green-400 text-white px-0 py-1 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md border-0 rounded-lg"
                whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 255, 0.5)' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }} // Slight delay for the button
            >
                JOIN GAME
            </motion.button>
        </motion.div>
    );
};

export default MatchCard;
