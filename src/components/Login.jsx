import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignInAlt } from "react-icons/fa"; // Importing react-icons for user and login
import { MdError } from "react-icons/md"; // Importing icon for error message

const Login = () => {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      // Redirect to Home Page on successful login
      alert("🎉 Login successful!");
      navigate("/ProfilePage");
    } else {
      setErrorMessage("⚠️ Username not found!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <FaUserCircle className="text-6xl text-purple-500" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Welcome Back! 👋
        </h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="relative">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUserCircle className="absolute right-4 top-3 text-purple-400" />
          </div>
          {errorMessage && (
            <div className="flex items-center justify-center text-red-500 text-sm">
              <MdError className="mr-2" />
              <p>{errorMessage}</p>
            </div>
          )}
          <button
            className="flex items-center justify-center bg-purple-600 text-white p-3 w-full rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105"
            type="submit"
          >
            <FaSignInAlt className="mr-2" />
            Login 🎉
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Don’t have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
