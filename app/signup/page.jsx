"use client"

import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function SignupPage() {
    const [form, setForm] = useState({ email: "", password: ""});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value}))
    };

    function isValidEmail(email ){
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
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        setLoading(false);
        if (!res.ok) {
            setError(data.error || "Signup failed");
        } else {
            window.location.href = "/login";
        }
    };

    return (
        <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 border border-purple-500 rounded-lg shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <h1 className="text-3xl font-bold mb-4 text-purple-600">Sign Up</h1>
            <form onSubmit={handleSubmit} className="max-w-md w-full flex flex-col gap-4">
                <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
                {error && <div className="text-red-500 text-md">{error}</div>}
                <Button type="submit" disabled={loading} className="bg-purple-500 hover:bg-purple-600 mt-2">
                    {loading ? "Signing up..." : "Sign Up"}
                </Button>
            </form>
            <div className="mt-4 text-gray-600">
                Already have an account? <a href="/login" className="text-fuchsia-600 font-bold underline">Login</a>
            </div>
        </main>
    )
}

// "use client"

// import { useState } from "react";
// import Button from "@/components/Button";
// import Input from "@/components/Input";

// export default function SignupPage() {
//   // Signup page: form for creating a new user account
//   // Submits data to /api/signup and updates auth context
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = e => {
//     setForm(f => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     const res = await fetch("/api/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form)
//     });
//     const data = await res.json();
//     setLoading(false);
//     if (!res.ok) {
//       setError(data.error || "Signup failed");
//     } else {
//       window.location.href = "/login";
//     }
//   };

//   return (
//     <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
//       <h1 className="text-4xl font-bold mb-4 text-blue-700">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="max-w-md w-full flex flex-col gap-4">
//         <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
//         <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
//         {error && <div className="text-red-500 text-sm">{error}</div>}
//         <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 mt-2">
//           {loading ? "Signing up..." : "Sign Up"}
//         </Button>
//       </form>
//       <div className="mt-4 text-gray-600">
//         Already have an account? <a href="/login" className="text-blue-600 underline">Login</a>
//       </div>
//     </main>
//   );
// }
