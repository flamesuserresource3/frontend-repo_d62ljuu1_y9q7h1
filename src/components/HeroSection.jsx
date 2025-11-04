import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          Available for freelance projects
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
          Full‑stack developer crafting modern, performant web apps with delightful user experiences. I build things that scale and feel great to use.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow md:text-base"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 md:text-base"
          >
            Contact Me <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
