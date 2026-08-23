import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("collabboard_logged_in");

    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

      <div className="container-fluid px-3 px-md-4">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold navbar-logo"
          to="/"
        >
          <span className="logo-icon">▣</span>
          CollabBoard
        </Link>


        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            {/* Home */}
            <li className="nav-item">
              <Link
                className="btn nav-page-btn px-4 mt-2 mt-lg-0"
                to="/"
              >
                Home
              </Link>
            </li>


            {/* Dashboard */}
            <li className="nav-item">
              <Link
                className="btn nav-page-btn px-4 mt-2 mt-lg-0"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>


            {/* Not Logged In */}
            {!isLoggedIn && (
              <>
                {/* Login */}
                <li className="nav-item">
                  <Link
                    className="btn login-btn px-4 mt-2 mt-lg-0"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>


                {/* Register */}
                <li className="nav-item">
                  <Link
                    className="btn register-btn px-4 mt-2 mt-lg-0"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}


            {/* Logged In */}
            {isLoggedIn && (
              <>
                {/* Profile */}
<li className="nav-item">
  <Link
    className="btn nav-page-btn px-4 mt-2 mt-lg-0"
    to="/profile"
  >
    Profile
  </Link>
</li>
                {/* Logout */}
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn register-btn px-4 mt-2 mt-lg-0"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;