"use client"

import { useAuth } from "@/components/AuthContext";
import { useEffect } from "react";

export default function ProfilePage() {
    const { user, loading } = useAuth();

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
        <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
            <h1 className="text-4xl font-bold mb-4 text-green-700">Profile</h1>
            <div className="rounded shadow p-6 w-full max-w-md bg-white">
                <div className="mb-2"><strong>Email:</strong> {user.email}</div>
            </div>
        </main>
    );
}
