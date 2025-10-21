"use client";

import { useAuth } from "@/components/AuthContext";
import Button from "./Button";

export default function Navigation() {
    const { user, logout } = useAuth();
    return (
    <nav style={{ display: 'flex', gap: '1.5rem', padding: '1rem 2rem', maxWidth: 900, margin: '0 auto' }}>
        <a href="/" style={{ fontWeight: 900, color: '#f0ead6' }}>EDUcational</a>
        <a href="/shop" style={{fontWeight: 600, color: '#f0ead6'  }}>Shop</a>
        <a href="/product" style={{ fontWeight: 600, color: '#f0ead6'  }}>Product</a>
        <a href="/cart" style={{ fontWeight: 600, color: '#f0ead6' }}>Cart</a>
        <a href="/checkout" style={{ fontWeight: 600, color: '#f0ead6' }}>Checkout</a>
        {!user && <a href="/login" style={{ fontWeight: 600, color: '#f0ead6' }}>Login</a>}
        {!user && <a href="/signup" style={{ fontWeight: 600, color: '#f0ead6'}}>Sign Up</a>}
        {user && (
            <>
                <a href="/profile" style={{ fontWeight: 600, color: '#f0ead6' }}>Profile</a>
                <span style={{ fontWeight: 600, color: '#f0ead6' }}>Hello {user.email}</span>
                <Button onClick={logout} style={{ fontWWeight: 600, color: '#f0ead6', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</Button>
            </>
        )}
    </nav>

    )
}
