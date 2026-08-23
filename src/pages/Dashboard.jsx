import Layout from "../components/Layout/Layout";
import Board from "../components/Board/Board";

function Dashboard({ darkMode, setDarkMode, isLoggedIn }) {
  return (
    <Layout isLoggedIn={isLoggedIn}>

      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Dashboard
          </h2>

          <p className="text-muted mb-0">
            Manage your tasks and projects
          </p>
        </div>


        {/* Dark Mode Toggle */}
        <button
          type="button"
          className={`theme-toggle ${darkMode ? "active" : ""}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <span className="theme-label">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </span>
        </button>

      </div>


      {/* Board */}
      <Board />

    </Layout>
  );
}

export default Dashboard;