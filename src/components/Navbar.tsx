// src/components/Navbar.tsx
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        {token ? (
          <>
            <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
            <button onClick={handleLogout} className="ml-4 text-red-400 hover:text-red-600">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="hover:text-blue-300">Sign In</Link>
            <Link to="/signup" className="ml-2 hover:text-blue-300">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
