import { useEffect, useState } from "react";

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.length > 0) {
            setUser(users[users.length - 1]);  // Get the most recent registered user
        }
    }, []);

    return (
        <div className="p-6 flex justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-600">
            {user ? (
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Pincode:</strong> {user.pincode}</p>
                    <p><strong>Country:</strong> {user.country}</p>
                    <p><strong>Skills:</strong> {user.skills}</p>
                </div>
            ) : (
                <p>No profile data available.</p>
            )}
        </div>
    );
};

export default ProfilePage;
