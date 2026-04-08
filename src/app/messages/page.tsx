"use client";

import { useState } from "react";

type MessageRow = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function MessagesPage() {
  const [adminKey, setAdminKey] = useState("");
  const [messages, setMessages] = useState<MessageRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
      });

      const data = (await response.json()) as {
        message?: string;
        messages?: MessageRow[];
      };

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to fetch messages.");
      }

      setMessages(data.messages ?? []);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unable to load messages.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-14 text-zinc-100">
      <h1 className="text-3xl font-bold text-white">Inbox Messages</h1>
      <p className="mt-2 text-zinc-400">
        Enter your admin key to securely fetch contact form submissions.
      </p>

      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 md:flex-row">
        <input
          type="password"
          value={adminKey}
          onChange={(event) => setAdminKey(event.target.value)}
          placeholder="Enter ADMIN_API_KEY"
          className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/80 px-4 py-2.5 text-zinc-100 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
        <button
          onClick={fetchMessages}
          disabled={loading || !adminKey}
          className="rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-2.5 font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Loading..." : "Load Messages"}
        </button>
      </div>

      {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}

      <div className="mt-8 space-y-4">
        {messages.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-white">{item.name}</h2>
              <time className="text-xs text-zinc-400">
                {new Date(item.created_at).toLocaleString()}
              </time>
            </div>
            <p className="mt-1 text-sm text-cyan-300">{item.email}</p>
            <p className="mt-3 whitespace-pre-wrap text-zinc-300">{item.message}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
