import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl">Profile Management</h1>
      <nav>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/profile" className="px-2">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
