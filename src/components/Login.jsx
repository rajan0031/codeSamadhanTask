import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/");
    } else {
      setErrorMessage("⚠️ Username not found!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-blue-600">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            className="bg-blue-500 text-white p-3 w-full rounded hover:bg-blue-600 transition-all transform hover:scale-105"
            type="submit"
          >
            Login 🎉
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
