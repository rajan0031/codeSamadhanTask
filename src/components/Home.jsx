import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-teal-600">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Home! 🏠</h1>
                <p className="text-lg text-gray-600 mb-6">
                    You have successfully logged in. Enjoy your stay!
                </p>

                {/* Navigation Links */}
                <div className="space-y-4">
                    <Link to="/" className="bg-blue-500 text-white p-3 w-full rounded hover:bg-blue-600 transition-all">
                        Login
                    </Link>
                    <Link to="/register" className="bg-green-500 text-white p-3 w-full rounded hover:bg-green-600 transition-all">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
