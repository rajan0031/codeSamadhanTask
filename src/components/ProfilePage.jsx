import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaUserTag, FaPhoneAlt, FaMapMarkerAlt, FaToolbox, FaGlobe, FaHome } from "react-icons/fa"; // Importing react-icons

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.length > 0) {
            setUser(users[users.length - 1]);  // Get the most recent registered user
        }
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-teal-600">
            {user ? (
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                        <FaUser className="inline text-teal-500 mr-2" /> Profile Overview
                    </h1>
                    <div className="space-y-4 text-gray-700">
                        <p className="flex items-center">
                            <FaUser className="text-teal-500 mr-2" /> 
                            <strong>Name:</strong> {user.name || "John Doe"}
                        </p>
                        <p className="flex items-center">
                            <FaEnvelope className="text-teal-500 mr-2" /> 
                            <strong>Email:</strong> {user.email || "johndoe@example.com"}
                        </p>
                        <p className="flex items-center">
                            <FaUserTag className="text-teal-500 mr-2" /> 
                            <strong>Username:</strong> {user.username || "johndoe123"}
                        </p>
                        <p className="flex items-center">
                            <FaPhoneAlt className="text-teal-500 mr-2" /> 
                            <strong>Phone:</strong> {user.phone || "(123) 456-7890"}
                        </p>
                        <p className="flex items-center">
                            <FaMapMarkerAlt className="text-teal-500 mr-2" /> 
                            <strong>Address:</strong> {user.address || "123 Main St, Springfield"}
                        </p>
                        <p className="flex items-center">
                            <FaHome className="text-teal-500 mr-2" /> 
                            <strong>Pincode:</strong> {user.pincode || "12345"}
                        </p>
                        <p className="flex items-center">
                            <FaGlobe className="text-teal-500 mr-2" /> 
                            <strong>Country:</strong> {user.country || "United States"}
                        </p>
                        <p className="flex items-center">
                            <FaToolbox className="text-teal-500 mr-2" /> 
                            <strong>Skills:</strong> {user.skills || "React, Node.js, Tailwind CSS"}
                        </p>
                    </div>
                </div>
            ) : (
                <p className="text-white text-lg">No profile data available.</p>
            )}
        </div>
    );
};

export default ProfilePage;
