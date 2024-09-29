// Profile.js
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

const Profile = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-black min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-md "
            >
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col items-center "
                >
                    <img
                        className="w-24 h-24 rounded-full shadow-lg"
                        src="https://randomuser.me/api/portraits/men/1.jpg" 
                        alt="Profile"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-800 text-white">Ankit Chauhan</h2>
                    <p className="text-gray-600 text-white">Software Engineer</p>
                </motion.div>
                
                <div className="mt-6">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="text-lg text-white font-semibold text-gray-700"
                    >
                        About Me
                    </motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="mt-2 text-white text-gray-600"
                    >
                        Passionate software engineer with a focus on web development.
                    </motion.p>
                </div>
                
                <div className="mt-6">
                    <h3 className="text-lg text-white font-semibold text-gray-700">Contact Information</h3>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="mt-2 text-white flex items-center text-gray-600"
                    >
                        <FaEnvelope className="mr-2" />
                        <p>Email: realankit108@gmail.com</p>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="mt-1 text-white flex items-center text-gray-600"
                    >
                        <FaPhoneAlt className="mr-2" />
                        <p>Phone: +91 7983356722</p>
                    </motion.div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg text-white font-semibold text-gray-700">Connect with Me</h3>
                    <div className="flex space-x-4 mt-2">
                        <motion.a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 text-white hover:text-gray-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <FaGithub className="text-2xl" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 text-white hover:text-gray-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.1 }}
                        >
                            <FaLinkedin className="text-2xl" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Profile;
