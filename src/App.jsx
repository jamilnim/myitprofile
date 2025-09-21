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
import JobTimeline from "./components/JobTimeline";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if session is valid
    axios
      .get("/api/user", { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  function PageWrapper({ children }) {
    return <div className="page">{children}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Roots />}>
          {/* Default redirect to home */}
          <Route index element={<Navigate to="home" />} />

          {/* Home page */}
          <Route path="home" element={<PageWrapper><Home /></PageWrapper>} />

          {/* About page */}
          <Route path="about" element={<PageWrapper><JobTimeline /></PageWrapper>} />

             {/* Project page */}
             <Route path="project" element={<PageWrapper><ProjectDetail /></PageWrapper>} />

          {/* Blog (protected) */}
          <Route
            path="blog"
            element={
              isAuthenticated ? <BlogManager /> : <Navigate to="/auth" />
            }
          />

          {/* Auth page */}
          <Route
            path="auth"
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
