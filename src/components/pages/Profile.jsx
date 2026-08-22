import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(() => {
    return localStorage.getItem("collabboard_name") || "Prabash Sandakalum";
  });

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("collabboard_email") || "prabash@example.com";
  });

  const [role, setRole] = useState(() => {
    return localStorage.getItem("collabboard_role") || "Team Member";
  });


  const handleSave = () => {

    if (!name.trim() || !email.trim() || !role) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem("collabboard_name", name);
    localStorage.setItem("collabboard_email", email);
    localStorage.setItem("collabboard_role", role);

    setIsEditing(false);

    alert("Profile updated successfully!");
  };


  return (
    <div className="container-fluid">

      {/* Profile Header */}
      <div className="mb-4">

        <h2 className="fw-bold mb-1">
          Profile
        </h2>

        <p className="text-muted mb-0">
          Manage your personal information
        </p>

      </div>


      <div className="row g-4">

        {/* Profile Card */}
        <div className="col-lg-4">

          <div className="card border-0 shadow-sm rounded-4 p-4 text-center">

            {/* Avatar */}
            <div className="profile-avatar mx-auto mb-3">
              {name.charAt(0).toUpperCase()}
            </div>

            <h4 className="fw-bold mb-1">
              {name}
            </h4>

            <p className="text-muted mb-4">
              {role}
            </p>


            {!isEditing ? (

              <button
                className="btn btn-primary w-100 rounded-3"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>

            ) : (

              <button
                className="btn btn-outline-secondary w-100 rounded-3"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

            )}

          </div>

        </div>


        {/* Account Information */}
        <div className="col-lg-8">

          <div className="card border-0 shadow-sm rounded-4 p-4">

            <h5 className="fw-bold mb-4">
              Account Information
            </h5>


            {/* Full Name */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                value={name}
                readOnly={!isEditing}
                onChange={(e) => setName(e.target.value)}
              />

            </div>


            {/* Email */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                readOnly={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
{/* Role */}
<div className="mb-4">

  <label className="form-label fw-semibold">
    Role
  </label>

  <input
    type="text"
    className="form-control"
    placeholder="Enter your role"
    value={role}
    readOnly={!isEditing}
    onChange={(e) => setRole(e.target.value)}
  />

</div>
            {/* Save Buttons */}
            {isEditing && (

              <div className="d-flex gap-2">

                <button
                  type="button"
                  className="btn btn-primary px-4"
                  onClick={handleSave}
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>

              </div>

            )}


            {/* Security */}
            <div className="border-top pt-4 mt-4">

              <h6 className="fw-bold mb-2">
                Security
              </h6>

              <p className="text-muted small">
                Keep your account secure by updating your password regularly.
              </p>

              <button
                type="button"
                className="btn btn-outline-primary"
              >
                Change Password
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Back Button */}
      <div className="mt-4">

        <Link
          to="/dashboard"
          className="settings-back-btn"
        >
          <span className="back-arrow">
            ←
          </span>

          Back to Dashboard

        </Link>

      </div>

    </div>
  );
}

export default Profile;