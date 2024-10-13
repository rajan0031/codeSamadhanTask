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
        <div className="p-6 flex flex-col items-center bg-gradient-to-br from-purple-400 to-blue-600">
            <h1 className="text-3xl font-bold text-white mb-6">User Profiles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
                        onClick={() => handleCardClick(user)}
                    >
                        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600">Username: {user.username}</p>
                        <p className="text-gray-600">Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
