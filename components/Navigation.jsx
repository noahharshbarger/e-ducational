"use client";

import { useAuth } from "@/components/AuthContext";
import Button from "./Button";

export default function Navigation() {
    const { user, logout } = useAuth();
        return (
        <nav className="flex items-center justify-between px-8 py-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-8">
                <a href="/" className="text-2xl font-extrabold text-white tracking-tight hover:text-blue-200 transition">EDUcational</a>
                <a href="/shop" className="font-semibold text-white hover:text-blue-200 transition">Shop</a>
                <a href="/product" className="font-semibold text-white hover:text-blue-200 transition">Product</a>
                <a href="/cart" className="font-semibold text-white hover:text-blue-200 transition">Cart</a>
                <a href="/checkout" className="font-semibold text-white hover:text-blue-200 transition">Checkout</a>
            </div>
            <div className="flex items-center gap-6">
                {!user && <a href="/login" className="font-semibold text-white hover:text-blue-200 transition">Login</a>}
                {!user && <a href="/signup" className="font-semibold text-white hover:text-blue-200 transition">Sign Up</a>}
                {user && (
                    <>
                        <a href="/profile" className="font-semibold text-white hover:text-blue-200 transition">Profile</a>
                        <span className="font-semibold text-blue-100">Hello {user.email}</span>
                        <Button onClick={logout} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition font-semibold">Logout</Button>
                    </>
                )}
            </div>
        </nav>

    )
}
