import React from "react";
import GlassCard from "@/components/GlassCard";

const IconGithub = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const IconLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconExternal = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="pt-20 pb-10 flex flex-col items-center text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            CHRIS NICOLAI FOLLOSO
          </h1>
          <p className="text-xl md:text-2xl font-light text-zinc-400">Frontend Developer</p>
        </div>
        <p className="max-w-2xl text-zinc-400 leading-relaxed text-lg">
          I build intuitive, responsive, and visually engaging user interfaces that transform complex logic into seamless user experiences. I focus on the <span className="text-white">“how it feels”</span> so the <span className="text-white">“what it does”</span> becomes effortless.
        </p>
        <div className="flex gap-4 pt-4">
          <a href="mailto:chrisfolloso@gmail.com" className="p-3 glass rounded-full hover:scale-110 transition-transform">
            <IconMail />
          </a>
          <a href="https://github.com/Megicula69" target="_blank" className="p-3 glass rounded-full hover:scale-110 transition-transform">
            <IconGithub />
          </a>
          <a href="https://www.linkedin.com/in/folloso-chris-nicolai-z-541569364" target="_blank" className="p-3 glass rounded-full hover:scale-110 transition-transform">
            <IconLinkedin />
          </a>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-medium tracking-widest text-zinc-500 uppercase">Philosophy</h2>
        <GlassCard className="max-w-4xl mx-auto border-l-4 border-l-white/20">
          <p className="text-xl md:text-2xl font-light text-zinc-300 italic leading-relaxed">
            "Understanding how users interact with an interface leads to better design decisions. Master the structure of UI, behavior, and accessibility—and everything else, from performance to usability, follows naturally."
          </p>
        </GlassCard>
      </section>

      {/* Projects Section */}
      <section className="space-y-12">
        <h2 className="text-2xl font-medium tracking-widest text-zinc-500 uppercase">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <GlassCard className="flex flex-col h-full space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Simple Banking System</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A clean and user-friendly frontend interface for a banking system designed to simplify financial transactions and account management. Emphasizes structured layouts and responsive UI components.
              </p>
            </div>
            <div className="mt-auto pt-4 flex gap-3">
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">React</span>
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">Tailwind</span>
            </div>
          </GlassCard>

          {/* Project 2 */}
          <GlassCard className="flex flex-col h-full space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Simple Grading System</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                An interactive grading interface focused on usability and clarity. Allows users to input, calculate, and display student grades efficiently through an intuitive layout.
              </p>
            </div>
            <div className="mt-auto pt-4 flex gap-3">
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">HTML</span>
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">Javascript</span>
            </div>
          </GlassCard>

          {/* Project 3 */}
          <GlassCard className="flex flex-col h-full space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-white">P.A.C.E.</h3>
                <a href="https://github.com/KlyrhonMiko/pace.git" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                  <IconExternal />
                </a>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Pasig Alumni Career & Employability System. A robust platform empowering alumni with curated career opportunities and providing institutions with analytics. (In Progress)
              </p>
            </div>
            <div className="mt-auto pt-4 flex gap-3">
              <span className="text-xs px-2 py-1 glass rounded text-white bg-white/5 border border-white/20">In Progress</span>
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">FastAPI</span>
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">PostgreSQL</span>
            </div>
          </GlassCard>

          {/* Project 4 */}
          <GlassCard className="flex flex-col h-full space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-white">JTCI Carpet Gallery</h3>
                <a href="https://github.com/KlyrhonMiko/jtci.git" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                  <IconExternal />
                </a>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A visually rich corporate website built with modern frontend practices. Highlights product showcases and brand identity through elegant layouts. (In Progress)
              </p>
            </div>
            <div className="mt-auto pt-4 flex gap-3">
              <span className="text-xs px-2 py-1 glass rounded text-white bg-white/5 border border-white/20">In Progress</span>
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">Next.js</span>
              <span className="text-xs px-2 py-1 glass rounded text-zinc-400">Tailwind</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-12">
        <h2 className="text-2xl font-medium tracking-widest text-zinc-500 uppercase">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="space-y-4" glow={false}>
            <div className="flex items-center gap-3 text-white">
              <span className="font-semibold text-lg">Server & DB</span>
            </div>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>Javascript / Python (FastAPI) / Java</li>
              <li>PostgreSQL / MySQL / Supabase</li>
            </ul>
          </GlassCard>

          <GlassCard className="space-y-4" glow={false}>
            <div className="flex items-center gap-3 text-white">
              <span className="font-semibold text-lg">Client Side</span>
            </div>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>React / Tailwind CSS</li>
              <li>HTML / Bootstrap</li>
            </ul>
          </GlassCard>

          <GlassCard className="space-y-4" glow={false}>
            <div className="flex items-center gap-3 text-white">
              <span className="font-semibold text-lg">Process</span>
            </div>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>Git / GitHub / Vite / Docker</li>
              <li>Figma / Adobe XD</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-10 pb-20 space-y-8">
        <h2 className="text-2xl font-medium tracking-widest text-zinc-500 uppercase text-center">Get In Touch</h2>
        <GlassCard className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a href="mailto:chrisfolloso@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <IconMail />
                <span>chrisfolloso@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+63 962 856 9702</span>
              </div>
            </div>
            <div className="space-y-4">
              <a href="https://github.com/Megicula69" target="_blank" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <IconGithub />
                <span>@Megicula69</span>
              </a>
              <a href="https://www.linkedin.com/in/folloso-chris-nicolai-z-541569364" target="_blank" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <IconLinkedin />
                <span>Chris Nicolai Folloso</span>
              </a>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Chris Nicolai Folloso. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
