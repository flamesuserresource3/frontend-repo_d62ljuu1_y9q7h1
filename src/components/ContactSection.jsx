import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Project inquiry');
    const body = encodeURIComponent(`Hi!\n\nName: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-r from-fuchsia-200/40 via-indigo-200/40 to-sky-200/40 blur-3xl" />

      <div className="grid items-start gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let’s build something great</h2>
          <p className="mt-2 text-slate-600">
            Tell me a bit about your project, timeline, and goals. I’ll get back within 1–2 business days.
          </p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="h-4 w-4" /> <span>you@example.com</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="md:col-span-3"
        >
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                placeholder="What are you looking to build?"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
