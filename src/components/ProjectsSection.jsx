import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'A full‑stack chat platform with rooms, presence, and emoji reactions.',
    tags: ['React', 'WebSockets', 'FastAPI', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'E‑commerce Storefront',
    description: 'Modern storefront with cart, checkout, and analytics integration.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'Vercel'],
    link: '#',
  },
  {
    title: 'Dev Portfolio',
    description: 'A 3D‑infused portfolio highlighting projects and case studies.',
    tags: ['Vite', 'Spline', 'Framer Motion'],
    link: '#',
  },
];

const ProjectCard = ({ title, description, tags, link, index }) => (
  <motion.a
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    href={link}
    className="group block rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur transition hover:-translate-y-1 hover:shadow-md hover:ring-slate-200"
  >
    <div className="h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 via-indigo-100 to-fuchsia-100" />
    <div className="mt-4 flex items-start justify-between gap-4">
      <div>
        <h4 className="text-lg font-semibold tracking-tight group-hover:text-slate-900">{title}</h4>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:text-slate-600" />
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
          {t}
        </span>
      ))}
    </div>
  </motion.a>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-0 mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-r from-cyan-200/40 via-sky-200/40 to-indigo-200/40 blur-3xl" />

      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
          <p className="mt-2 text-slate-600">Selected work that showcases my approach and capabilities.</p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:block"
        >
          Work with me
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
