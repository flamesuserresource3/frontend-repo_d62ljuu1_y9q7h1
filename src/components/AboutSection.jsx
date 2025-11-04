import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
  'AWS',
  'CI/CD',
];

const AboutSection = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 mx-auto h-32 max-w-5xl rounded-full bg-gradient-to-r from-indigo-200/40 via-sky-200/40 to-cyan-200/40 blur-3xl" />

      <div className="grid items-start gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
          <p className="mt-3 text-slate-600">
            I’m a developer focused on building robust, accessible, and user‑first digital products. I love turning complex ideas into simple, elegant
            experiences. When I’m not coding, I’m exploring new tools, writing notes, or learning something fun.
          </p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
            <p className="text-sm text-slate-700">
              Currently seeking opportunities to collaborate with startups and teams to deliver high‑impact features and delightful interfaces.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3"
        >
          <h3 className="text-lg font-semibold">Skills & Tools</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-600">
                I care deeply about performance, accessibility, and maintainability. I write clean, tested code and collaborate well across design and
                engineering.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-600">
                My stack spans frontend and backend. I enjoy architecting systems, building APIs, and crafting smooth UI interactions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
