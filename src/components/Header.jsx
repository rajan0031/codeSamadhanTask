import { Link } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa"; // Importing icons
import { MdManageAccounts } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 px-6 shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <MdManageAccounts className="text-3xl text-blue-400 mr-3" />
        <h1 className="text-3xl font-bold tracking-wider">Profile Management</h1>
      </div>
      <nav className="flex items-center space-x-6">
        <Link
          to="/"
          className="flex items-center text-lg hover:text-blue-400 transition-colors duration-300"
        >
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link
          to="/profile"
          className="flex items-center text-lg hover:text-blue-400 transition-colors duration-300"
        >
          <FaUserCircle className="mr-2" />
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
