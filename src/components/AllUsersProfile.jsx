import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaUserTag, FaPhoneAlt } from 'react-icons/fa';

function AllUsersProfile() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const handleCardClick = (user) => {
        navigate("/ViewProfile", {
            state: {
                user: user,
            }
        });
    };

    return (
        <div className="flex flex-wrap justify-center items-center p-4 bg-gradient-to-br from-purple-500 to-indigo-600 min-h-screen">
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-xl m-4 p-6 w-full max-w-xs cursor-pointer transform transition-all hover:scale-105"
                        onClick={() => handleCardClick(user)}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-800">
                            <FaUser className="inline text-indigo-500 mr-2" /> {user.name || 'John Doe'}
                        </h2>
                        <div className="space-y-2 text-gray-700">
                            <p className="flex items-center justify-center">
                                <FaUserTag className="text-indigo-500 mr-2" />
                                <strong>Username:</strong> {user.username || 'johndoe123'}
                            </p>
                            <p className="flex items-center justify-center">
                                <FaEnvelope className="text-indigo-500 mr-2" />
                                <strong>Email:</strong> {user.email || 'johndoe@example.com'}
                            </p>
                            <p className="flex items-center justify-center">
                                <FaPhoneAlt className="text-indigo-500 mr-2" />
                                <strong>Phone:</strong> {user.phone || '(123) 456-7890'}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-white text-lg">No users found in local storage.</p>
            )}
        </div>
    );
}

export default AllUsersProfile;
