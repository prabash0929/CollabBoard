import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center min-vh-75">

          {/* Left Side */}
          <div className="col-lg-6">

            <h1 className="display-4 fw-bold mb-3">
              Manage Your Tasks
              <span className="text-primary"> Smarter.</span>
            </h1>

            <p className="lead text-muted mb-4">
              CollabBoard helps you organize tasks, manage priorities,
              track deadlines, and collaborate with your team.
            </p>

            <div className="d-flex gap-3">
              <Link
                to="/login"
                className="btn btn-primary btn-lg rounded-pill px-4"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-outline-primary btn-lg rounded-pill px-4"
              >
                Register
              </Link>
            </div>

          </div>


          {/* Right Side */}
          <div className="col-lg-6 mt-5 mt-lg-0">

            <div className="card border-0 shadow-lg rounded-4 p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                  <h4 className="fw-bold mb-1">
                    My Tasks
                  </h4>

                  <small className="text-muted">
                    Project Overview
                  </small>
                </div>

                <span className="badge bg-primary rounded-pill">
                  4 Tasks
                </span>

              </div>


              {/* Task 1 */}
              <div className="d-flex align-items-center justify-content-between border-bottom py-3">
                <div>
                  <h6 className="fw-bold mb-1">
                    Design Homepage
                  </h6>

                  <small className="text-muted">
                    Create landing page UI
                  </small>
                </div>

                <span className="badge bg-danger">
                  High
                </span>
              </div>


              {/* Task 2 */}
              <div className="d-flex align-items-center justify-content-between border-bottom py-3">
                <div>
                  <h6 className="fw-bold mb-1">
                    Responsive Navbar
                  </h6>

                  <small className="text-muted">
                    Bootstrap responsive navigation
                  </small>
                </div>

                <span className="badge bg-warning text-dark">
                  Medium
                </span>
              </div>


              {/* Task 3 */}
              <div className="d-flex align-items-center justify-content-between border-bottom py-3">
                <div>
                  <h6 className="fw-bold mb-1">
                    Login UI
                  </h6>

                  <small className="text-muted">
                    Create authentication interface
                  </small>
                </div>

                <span className="badge bg-success">
                  Low
                </span>
              </div>


              {/* Task 4 */}
              <div className="d-flex align-items-center justify-content-between py-3">
                <div>
                  <h6 className="fw-bold mb-1">
                    Project Setup
                  </h6>

                  <small className="text-muted">
                    React + Bootstrap setup
                  </small>
                </div>

                <span className="badge bg-success">
                  Done
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Features Section */}
      <section className="container pb-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Everything You Need
          </h2>

          <p className="text-muted">
            Simple tools to keep your projects organized.
          </p>
        </div>


        <div className="row g-4">

          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">

              <div className="fs-1 mb-3">
                📋
              </div>

              <h5 className="fw-bold">
                Task Management
              </h5>

              <p className="text-muted mb-0">
                Create, edit, delete and organize your tasks easily.
              </p>

            </div>
          </div>


          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">

              <div className="fs-1 mb-3">
                🎯
              </div>

              <h5 className="fw-bold">
                Priority Tracking
              </h5>

              <p className="text-muted mb-0">
                Set High, Medium or Low priority for every task.
              </p>

            </div>
          </div>


          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">

              <div className="fs-1 mb-3">
                🖱️
              </div>

              <h5 className="fw-bold">
                Drag & Drop
              </h5>

              <p className="text-muted mb-0">
                Move tasks between To Do, Doing and Done columns.
              </p>

            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;