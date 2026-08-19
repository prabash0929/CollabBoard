import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {

  // Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("collabboard_dark_mode") === "true";
  });

  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("collabboard_logged_in") === "true";
  });


  // Dark Mode Effect
  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem(
      "collabboard_dark_mode",
      darkMode
    );

  }, [darkMode]);


  return (
    <>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
            />
          }
        />


        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Dashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              isLoggedIn={isLoggedIn}
            />
          }
        />


        {/* Login */}
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />


        {/* Register */}
        <Route
          path="/register"
          element={
            <Register />
          }
        />


        {/* Settings */}
        <Route
          path="/settings"
          element={
            <Settings />
          }
        />
        
        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <NotFound />
          }
        />

      </Routes>

    </>
  );
}

export default App;