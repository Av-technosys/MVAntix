"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { status } = useSession();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const error = searchParams.get("error");

    useEffect(() => {
        if (status === "authenticated") {
            router.replace("/admin");
        }
    }, [status, router]);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        await signIn("credentials", {
            id,
            password,
            redirect: true,
            callbackUrl: "/admin",
        });
        setLoading(false);
    }

    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
            <p className="mt-1 text-sm text-gray-500">
                Enter the fixed ID and password provided by the admin.
            </p>

            {error && (
                <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    Invalid credentials. Please try again.
                </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                    <label htmlFor="login-id" className="text-sm font-medium text-gray-700">
                        ID
                    </label>
                    <input
                        id="login-id"
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                        placeholder="Enter ID"
                        autoComplete="username"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="login-password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                        placeholder="Enter password"
                        autoComplete="current-password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loading ? "Signing in..." : "Sign In"}
                </button>
            </form>
        </div>
    );
}
