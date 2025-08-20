import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8001", // or use your .env via import.meta.env if using Vite
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
});

// Optional: Set CSRF handling explicitly (not required, but good practice)
api.defaults.xsrfCookieName = "XSRF-TOKEN";
api.defaults.xsrfHeaderName = "X-XSRF-TOKEN";

export default api;
