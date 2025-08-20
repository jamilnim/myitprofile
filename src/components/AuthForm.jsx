import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function AuthForm({ onSuccess }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await axios.get("/sanctum/csrf-cookie");

      const path = mode === "login" ? "/login" : "/register";
      const payload =
        mode === "login"
          ? { email: form.email, password: form.password }
          : form;

      await axios.post(`/api${path}`, payload);

      onSuccess?.();
      navigate("/blog"); // Redirect after successful auth
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed.");
      console.error("Auth error:", err);
    }
  };

  if (!mode) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Welcome</h2>
        <button onClick={() => setMode("login")}>Login</button>
        <button onClick={() => setMode("register")}>Register</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>{mode === "login" ? "Login" : "Register"}</h2>
      {mode === "register" && (
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      )}
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">{mode === "login" ? "Log In" : "Register"}</button>
      <div style={{ marginTop: "10px" }}>
        <button type="button" onClick={() => setMode(null)}>
          Back
        </button>
      </div>
    </form>
  );
}
