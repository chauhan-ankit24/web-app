import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaSave, FaTimes, FaInfoCircle } from 'react-icons/fa';

const AdvancedSettings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [autoUpdate, setAutoUpdate] = useState(false);
    const [settingsSaved, setSettingsSaved] = useState(false);

    const handleToggle = (setter) => {
        setter((prev) => !prev);
    };

    const handleSave = () => {
        // Save logic goes here
        setSettingsSaved(true);
        setTimeout(() => setSettingsSaved(false), 2000); // Hide message after 2 seconds
    };

    const handleCancel = () => {
        // Cancel logic or resetting fields
        alert("Changes canceled!");
    };

    const handleReset = () => {
        setDarkMode(false);
        setNotifications(true);
        setAutoUpdate(false);
        alert("Settings reset to default values.");
    };

    return (
        <div className="flex justify-center mt-5 min-h-screen bg-black">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[375px] md:w-[500px] bg-gray-800 text-white shadow-lg rounded-lg p-6"
            >
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex justify-between items-center mb-6"
                >
                    <h2 className="text-2xl font-bold">Advanced Settings</h2>
                    <FaCog className="text-gray-400 text-2xl" />
                </motion.div>

                {/* Dark Mode */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex justify-between items-center mb-4"
                >
                    <div className="flex items-center">
                        <p className="text-gray-300">Dark Mode</p>
                        <FaInfoCircle className="text-gray-400 ml-2" title="Enable dark mode for better visibility in low-light environments." />
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => handleToggle(setDarkMode)}
                            className="sr-only"
                        />
                        <span className="w-10 h-5 bg-gray-600 rounded-full shadow-inner"></span>
                        <span
                            className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                                darkMode ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        ></span>
                    </label>
                </motion.div>

                {/* Notifications */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex justify-between items-center mb-4"
                >
                    <div className="flex items-center">
                        <p className="text-gray-300">Enable Notifications</p>
                        <FaInfoCircle className="text-gray-400 ml-2" title="Receive notifications for important updates." />
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={() => handleToggle(setNotifications)}
                            className="sr-only"
                        />
                        <span className="w-10 h-5 bg-gray-600 rounded-full shadow-inner"></span>
                        <span
                            className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                                notifications ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        ></span>
                    </label>
                </motion.div>

                {/* Auto Update */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="flex justify-between items-center mb-4"
                >
                    <div className="flex items-center">
                        <p className="text-gray-300">Enable Auto-Update</p>
                        <FaInfoCircle className="text-gray-400 ml-2" title="Automatically update the application when new versions are available." />
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoUpdate}
                            onChange={() => handleToggle(setAutoUpdate)}
                            className="sr-only"
                        />
                        <span className="w-10 h-5 bg-gray-600 rounded-full shadow-inner"></span>
                        <span
                            className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                                autoUpdate ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        ></span>
                    </label>
                </motion.div>

                {/* Save, Cancel, and Reset Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex justify-between mt-6"
                >
                    <button
                        onClick={handleCancel}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
                    >
                        <FaTimes className="mr-2" /> Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
                    >
                        <FaSave className="mr-2" /> Save
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center"
                    >
                        Reset
                    </button>
                </motion.div>

                {/* Feedback Message */}
                {settingsSaved && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 text-green-500"
                    >
                        Settings saved successfully!
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default AdvancedSettings;
