import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const handleCardClick = (user) => {
        // Navigate to the user detail page, passing the user data
        navigate("/profile/detail", { state: user });
    };

    return (
        <div className="min-h-screen p-10 bg-gradient-to-tr from-blue-800 to-purple-800 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold text-white mb-10 text-center tracking-wider">
                User Profiles
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="relative bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden cursor-pointer"
                        onClick={() => handleCardClick(user)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 transition-opacity"></div>
                        <div className="relative p-6">
                            <div className="rounded-full w-16 h-16 bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 text-center">{user.name}</h2>
                            <p className="text-gray-700 text-center mt-2">Username: {user.username}</p>
                            <p className="text-gray-600 text-center mt-1">Email: {user.email}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
