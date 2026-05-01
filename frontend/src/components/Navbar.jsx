import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Bachelor Basa
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/houses" className="hover:text-blue-600">
            Houses
          </Link>

          <Link to="/about-developer" className="hover:text-blue-600">
            About Developer
          </Link>

          {user?.role === "ADMIN" && (
            <Link to="/admin/dashboard" className="hover:text-blue-600">
              Admin
            </Link>
          )}

          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-600">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;