"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to submit contact form.");
      }

      setFormData(initialState);
      setFeedback("Message sent successfully. Thank you!");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send message right now.";
      setFeedback(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-200">
          Name
        </label>
        <input
          id="name"
          required
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-zinc-100 outline-none transition focus:border-cyan-400"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-zinc-100 outline-none transition focus:border-cyan-400"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-200">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-zinc-100 outline-none transition focus:border-cyan-400"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {feedback ? <p className="text-sm text-zinc-300">{feedback}</p> : null}
    </form>
  );
}
