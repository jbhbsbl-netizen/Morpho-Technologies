'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', organization: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="px-4 py-3 rounded-lg bg-[#1e3a5f] border border-[#00b4d8] focus:outline-none focus:border-[#48cae4] text-white placeholder-[#475569]"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="px-4 py-3 rounded-lg bg-[#1e3a5f] border border-[#00b4d8] focus:outline-none focus:border-[#48cae4] text-white placeholder-[#475569]"
          required
        />
      </div>
      <input
        type="text"
        name="organization"
        value={form.organization}
        onChange={handleChange}
        placeholder="Organization"
        className="w-full px-4 py-3 rounded-lg bg-[#1e3a5f] border border-[#00b4d8] focus:outline-none focus:border-[#48cae4] text-white placeholder-[#475569]"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={6}
        className="w-full px-4 py-3 rounded-lg bg-[#1e3a5f] border border-[#00b4d8] focus:outline-none focus:border-[#48cae4] text-white placeholder-[#475569]"
        required
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-[#00b4d8] text-[#0a1628] px-12 py-4 rounded-lg font-semibold text-lg hover:bg-[#48cae4] transition disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-[#48cae4] text-center font-medium">Message sent! We'll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center font-medium">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
