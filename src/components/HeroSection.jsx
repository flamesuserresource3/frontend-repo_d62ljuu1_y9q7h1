import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available for freelance projects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base"
        >
          Full‑stack developer crafting modern, performant web apps with delightful user experiences. I build things that scale and feel great to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-white/50 transition hover:shadow-md md:text-base"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 md:text-base"
          >
            Contact Me <Mail className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-6 flex items-center gap-4"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center text-xs">
            <span>Scroll</span>
            <ChevronDown className="mt-1 h-4 w-4 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
