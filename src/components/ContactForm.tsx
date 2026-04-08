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
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-white/10 bg-zinc-900/65 p-7 shadow-[0_24px_60px_-30px_rgba(6,182,212,0.45)] backdrop-blur"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-200">
          Name
        </label>
        <input
          id="name"
          required
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/80 px-4 py-2.5 text-zinc-100 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
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
          className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/80 px-4 py-2.5 text-zinc-100 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
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
          className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/80 px-4 py-2.5 text-zinc-100 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-2.5 font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(165,180,252,0.8)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {feedback ? <p className="text-sm text-zinc-300">{feedback}</p> : null}
    </form>
  );
}
