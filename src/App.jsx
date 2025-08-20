import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import BlogManager from "./components/BlogManager";
import AuthForm from "./components/AuthForm";
import Roots from "./pages/Roots";
import axios from "axios";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if session is valid
    axios
      .get("/api/user", { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Roots />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" index element={<Home />} />
          <Route
            path="blog"
            element={
              isAuthenticated ? <BlogManager /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="/auth"
            element={
              <AuthForm onAuthSuccess={() => setIsAuthenticated(true)} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
