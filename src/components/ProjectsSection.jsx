import React from 'react';
import { ExternalLink } from 'lucide-react';

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

const ProjectCard = ({ title, description, tags, link }) => (
  <a
    href={link}
    className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
  >
    <div className="h-36 w-full overflow-hidden rounded-lg bg-gradient-to-br from-sky-100 via-indigo-100 to-fuchsia-100" />
    <div className="mt-4 flex items-start justify-between gap-4">
      <div>
        <h4 className="text-lg font-semibold tracking-tight">{title}</h4>
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
  </a>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
          <p className="mt-2 text-slate-600">Selected work that showcases my approach and capabilities.</p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:block"
        >
          Work with me
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
