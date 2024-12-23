<<<<<<< HEAD
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
=======
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
>>>>>>> 99f1e3282f5b7cac0a3546df3144c05ae9eb3f22

import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    // Run authentication check on component mount
    checkAuth();

    // Disable right-click context menu
    const handleRightClick = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleRightClick);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, [checkAuth]);

  // While auth is being checked, display a loading spinner
  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  // Render the app with routing logic
  return (
    <div data-theme={theme}>
      <Router>
        <Navbar />

<<<<<<< HEAD
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />

        {/* Sign Up Page */}
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />

        {/* Settings Page */}
        <Route path="/settings" element={<SettingsPage />} />

        {/* Profile Page */}
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>

      {/* Notification Toast */}
      <Toaster />
=======
        <Routes>
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route path="/settings" element={<SettingsPage />} />
          <Route
            path="/profile"
            element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
          />
        </Routes>

        <Toaster />
      </Router>
>>>>>>> 99f1e3282f5b7cac0a3546df3144c05ae9eb3f22
    </div>
  );
};

export default App;
