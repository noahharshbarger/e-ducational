"use client"

import { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Login page: form for user authentication
  // Submits credentials to /api/login and updates auth context
  // Validate email format
  function isValidEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    // Frontend validation
    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Login failed");
    } else {
      // Set user in context and localStorage
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/";
    }
  };

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md w-full flex flex-col gap-4">
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 mt-2">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
      <div className="mt-4 text-gray-600">
        Don't have an account? <a href="/signup" className="text-blue-600 underline">Sign up</a>
      </div>
    </main>
  );
}
