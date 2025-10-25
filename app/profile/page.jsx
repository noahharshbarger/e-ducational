"use client"

import { useAuth } from "@/components/AuthContext";
import { useEffect } from "react";
import Button from "@/components/Button";

export default function ProfilePage() {
    const { user, loading, logout } = useAuth();

    useEffect(() => {
        if (!loading && !user) {
            window.location.href = "/login";
        }
    }, [loading, user]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        // Don't render anything while redirecting
        return null;
    }

    return (
        <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
            {/* Section Divider */}
            <div className="w-24 h-2 mx-auto mb-6 bg-gradient-to-r from-green-400 via-blue-600 to-green-400 rounded-full" />
            <h1 className="text-4xl font-bold mb-4 text-blue-700 drop-shadow-lg">Profile</h1>
            <div className="rounded-xl shadow-lg p-8 w-full max-w-md bg-white/80 backdrop-blur-md border border-blue-100 flex flex-col items-center">
                <img src="/logo.png" alt="User Avatar" className="w-20 h-20 rounded-full mb-4 border-2 border-blue-300" />
                <div className="mb-2 text-lg font-semibold text-blue-700">{user.email}</div>
                <div className="text-gray-500">Welcome to your profile page!</div>
                <Button onClick={logout} className="mt-6 px-6 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition">Logout</Button>
            </div>
        </main>
    );
}
