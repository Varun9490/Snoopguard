import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

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
      <Navbar />

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
    </div>
  );
};

export default App;
