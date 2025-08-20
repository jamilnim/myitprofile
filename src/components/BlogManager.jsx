import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./BlogManager.css";

function BlogManager() {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    content: "",
    top_image: "",
    category: "General",
    place: "",
    datetime: "",
  });
  const [loading, setLoading] = useState(false);
  const categories = ["General", "Tech", "Life", "Travel", "Education"];

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    try {
      const res = await axios.get(`/api/articles`);
      setArticles(res.data);
    } catch (error) {
      console.error("📛 Failed to fetch articles:", error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // 1️⃣ First, ensure CSRF cookie is set
      await axios.get(`/sanctum/csrf-cookie`);

      // 2️⃣ Then perform the actual POST or PUT
      const method = form.id ? "put" : "post";
      const url = form.id ? `/api/articles/${form.id}` : `/api/articles`;
      await axios[method](url, form);

      // Reset form and fetch fresh data
      setForm({
        id: null,
        title: "",
        content: "",
        top_image: "", // ✅ match Laravel's naming
        category: "General",
        place: "",
        datetime: "",
      });
      fetchArticles();
    } catch (error) {
      console.error("❌ Submit error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleEdit(article) {
    setForm({
      id: article.id,
      title: article.title,
      content: article.content,
      topImage: article.top_image,
      category: article.category,
      place: article.place,
      datetime: article.datetime,
    });
  }

  async function handleDelete(id) {
    if (window.confirm("Delete article?")) {
      try {
        await axios.delete(`/api/articles/${id}`);
        fetchArticles();
      } catch (err) {
        console.error("🗑️ Delete failed:", err);
      }
    }
  }

  return (
    <section className="blog-section">
      <h2>📝 Blog Admin</h2>
      <form className="article-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          rows={4}
          value={form.content}
          onChange={handleChange}
          required
        />
        <input
          name="top_image"
          placeholder="Top Image URL"
          value={form.top_image}
          onChange={handleChange}
        />
        <select name="category" value={form.category} onChange={handleChange}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input
          name="place"
          placeholder="Place"
          value={form.place}
          onChange={handleChange}
        />
        <input
          name="datetime"
          type="datetime-local"
          value={form.datetime}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {form.id ? "Update" : "Publish"}
        </button>
      </form>

      <hr />

      {articles.map((a) => (
        <div key={a.id} className="article-card">
          {a.top_image && (
            <img src={a.top_image} className="top-image" alt="Main" />
          )}
          <h3>{a.title}</h3>
          <p className="meta">
            {a.datetime} — {a.place} — {a.category}
          </p>
          <p>{a.content}</p>
          <div className="actions">
            <button onClick={() => handleEdit(a)}>Edit</button>
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BlogManager;
