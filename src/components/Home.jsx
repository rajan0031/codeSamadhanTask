import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaUserFriends } from "react-icons/fa"; // Importing icons
import { GiHouse } from "react-icons/gi";

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-teal-500 to-blue-700">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 w-full max-w-lg text-center">
                <div className="flex justify-center mb-6">
                    <GiHouse className="text-6xl text-blue-500" />
                </div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Welcome Home! 🏠
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    You've arrived at the perfect place to begin your journey. Explore the features, connect with others, and enjoy your stay.
                </p>

                {/* Navigation Links */}
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="flex items-center justify-center bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        <FaSignInAlt className="mr-2" />
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="flex items-center justify-center bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                        <FaUserPlus className="mr-2" />
                        Register
                    </Link>
                    <Link
                        to="/AllUsersProfile"
                        className="flex items-center justify-center bg-teal-600 text-white font-semibold p-3 rounded-lg hover:bg-teal-700 transition-all duration-300"
                    >
                        <FaUserFriends className="mr-2" />
                        All Users
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Home;
