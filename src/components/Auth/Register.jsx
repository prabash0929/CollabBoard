import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Save basic profile information
    localStorage.setItem("collabboard_name", name);
    localStorage.setItem("collabboard_email", email);
    localStorage.setItem("collabboard_role", "Team Member");

    alert("Registration successful!");

    navigate("/login");
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
            Create Account
          </h2>

          <p className="text-muted mb-0">
            Join CollabBoard and manage your work
          </p>

        </div>


        {/* Register Form */}
        <form onSubmit={handleRegister}>

          <div className="mb-3">

            <label className="form-label fw-semibold">
              Full Name
            </label>

            <input
              type="text"
              className="form-control auth-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>


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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>


          <button
            type="submit"
            className="btn btn-success auth-main-btn w-100"
          >
            Create Account
          </button>

        </form>


        {/* Login */}
        <div className="text-center mt-4">

          <span className="text-muted">
            Already have an account?
          </span>{" "}

          <Link
            to="/login"
            className="auth-link"
          >
            Login
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

export default Register;