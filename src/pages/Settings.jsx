import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="container py-5">

      <div className="d-flex align-items-center mb-4">

<Link
  to="/dashboard"
  className="settings-back-btn"
>
  <span className="back-arrow">←</span>
  <span>Back</span>
</Link>


        <div>
          <h2 className="fw-bold mb-1">Settings</h2>
          <p className="text-muted mb-0">
            Manage your CollabBoard settings
          </p>
        </div>
      </div>

      <div className="card p-4 shadow-sm">
        <h5 className="fw-bold">General Settings</h5>
        <p className="text-muted mb-0">
          Settings options will be available here.
        </p>
      </div>

    </div>
  );
}

export default Settings;