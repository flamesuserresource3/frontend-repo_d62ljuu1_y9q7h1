import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 selection:bg-indigo-200/60 selection:text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight">
            dev.<span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">folio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#about" className="relative transition hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-slate-900 after:transition-all hover:after:w-full">About</a>
            <a href="#projects" className="relative transition hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-slate-900 after:transition-all hover:after:w-full">Projects</a>
            <a href="#contact" className="relative transition hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-slate-900 after:transition-all hover:after:w-full">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow md:inline-flex"
          >
            Hire me
          </a>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </header>

      {/* Hero with Spline */}
      <HeroSection />

      {/* Content sections */}
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80 py-10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-xs text-slate-500">
            Built with React, Tailwind, and a playful 3D touch.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
