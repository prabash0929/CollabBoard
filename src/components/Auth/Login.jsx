import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    localStorage.setItem("collabboard_logged_in", "true");

    if (setIsLoggedIn) {
      setIsLoggedIn(true);
    }

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Logo */}
        <div className="text-center mb-4">

          <Link to="/" className="auth-logo">
            <span className="logo-icon">▣</span>
            CollabBoard
          </Link>

          <h2 className="fw-bold mt-4 mb-2">
            Welcome Back
          </h2>

          <p className="text-muted mb-0">
            Login to continue to your dashboard
          </p>

        </div>


        {/* Login Form */}
        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email
            </label>

            <input
              type="email"
              className="form-control auth-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="mb-4">
            <label className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control auth-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <button
            type="submit"
            className="btn btn-primary auth-main-btn w-100"
          >
            Login
          </button>

        </form>


        {/* Register */}
        <div className="text-center mt-4">

          <span className="text-muted">
            Don't have an account?
          </span>{" "}

          <Link
            to="/register"
            className="auth-link"
          >
            Register
          </Link>

        </div>


        {/* Back Button */}
        <div className="text-center mt-4">

          <Link
            to="/"
            className="auth-back-btn"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;