"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Email sau parolă incorectă!");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff] px-2">
      {/* Logo și titlu */}
      <div className="flex flex-col items-center mb-6">
        <div className="mb-2">
          <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><g><rect width="48" height="48" rx="12" fill="#2563eb"/><path d="M24 13l-10 4v2h20v-2l-10-4zM14 19v10c0 4.418 3.582 8 8 8s8-3.582 8-8V19" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><path d="M20 27v-4h8v4" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></g></svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">eRegistratură</h1>
        <div className="text-gray-500 text-sm mt-1">Sistem Digital pentru Instituții Publice</div>
      </div>
      {/* Card login */}
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-sm rounded-xl shadow p-7 space-y-5">
        <h2 className="text-lg font-semibold text-center mb-2">Autentificare în eRegistratură</h2>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresă de e-mail</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 text-sm"
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Parolă</label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 text-sm pr-10"
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword(v => !v)}
            className="absolute right-2 top-8 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Afișează/ascunde parola"
          >
            {showPassword ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 1l22 22"/><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 0 1 5.17-5.92M9.53 9.53A3.5 3.5 0 0 0 12 15.5a3.5 3.5 0 0 0 2.47-5.97"/><path d="M12 5c5 0 9.27 3.11 11 7.5a10.97 10.97 0 0 1-4.06 5.44"/></svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M2 12S5.5 5 12 5s10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg>
            )}
          </button>
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="rounded border-gray-300" />
              Ține-mă minte
            </label>
            <a href="#" className="text-xs text-blue-600 hover:underline">Ai uitat parola?</a>
          </div>
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition text-base mt-2"
        >
          {loading ? "Se autentifică..." : "Autentifică-te"}
        </button>
        <div className="text-center text-sm text-gray-600 mt-2">
          Nu ai cont? <a href="#" className="text-blue-600 hover:underline">Creează unul aici</a>
        </div>
      </form>
      <div className="text-center text-xs text-gray-400 mt-8">
        © 2025 eRegistratură. Toate drepturile rezervate.<br />
        Versiunea 2.0.1
      </div>
    </div>
  );
}