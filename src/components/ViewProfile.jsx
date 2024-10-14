import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUserTag, FaGlobe, FaTools, FaVenusMars } from 'react-icons/fa'; // Importing more icons
import { MdHome, MdOutlineFlag } from 'react-icons/md'; // Additional icons for address
import { GiSkills } from 'react-icons/gi'; // For skills

function ViewProfile() {
    const location = useLocation();
    const user = location.state?.user;

    useEffect(() => {
        console.log(user);
    }, [user]); // added dependency for better handling

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-600 to-indigo-500">
            {user ? (
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
                    <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
                        {user.name} <FaUser className="inline text-indigo-500 ml-2" />
                    </h1>

                    {/* Profile Details */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-lg text-gray-700">

                        {/* Username */}
                        <div className="flex items-center space-x-2">
                            <FaUserTag className="text-indigo-500" />
                            <span><strong>Username:</strong> {user.username}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-indigo-500" />
                            <span><strong>Email:</strong> {user.email}</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt className="text-indigo-500" />
                            <span><strong>Phone:</strong> {user.phone}</span>
                        </div>

                        {/* Gender */}
                        <div className="flex items-center space-x-2">
                            <FaVenusMars className="text-indigo-500" />
                            <span><strong>Gender:</strong> {user.gender}</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-center space-x-2">
                            <MdHome className="text-indigo-500" />
                            <span><strong>Address:</strong> {user.address}</span>
                        </div>

                        {/* Country */}
                        <div className="flex items-center space-x-2">
                            <MdOutlineFlag className="text-indigo-500" />
                            <span><strong>Country:</strong> {user.country}</span>
                        </div>

                        {/* Pincode */}
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-indigo-500" />
                            <span><strong>Pincode:</strong> {user.pincode}</span>
                        </div>

                        {/* Skills */}
                        <div className="flex items-center space-x-2">
                            <GiSkills className="text-indigo-500" />
                            <span><strong>Skills:</strong> {user.skills}</span>
                        </div>

                    </div>

                    {/* Emoji section */}
                    <div className="mt-8 text-center">
                        <p className="text-2xl">
                            🚀 <strong>Let's build something amazing together!</strong> 💻
                        </p>
                        <p className="text-lg mt-2 text-gray-500">
                            "Talent wins games, but teamwork and intelligence win championships."
                        </p>
                    </div>
                </div>
            ) : (
                <p className="text-white text-lg">No profile data available.</p>
            )}
        </div>
    );
}

export default ViewProfile;
