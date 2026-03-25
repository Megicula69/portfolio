"use client";

import React from "react";
import GlassCard from "@/components/GlassCard";
import NetworkLines from "@/components/NetworkLines";

const IconGithub = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;
const IconLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const IconExternal = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>;
const IconWhatsapp = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;

const projects = [
  {
    title: "Simple Banking System",
    description: "A clean and user-friendly frontend interface for a banking system designed to simplify financial transactions and account management. Emphasizes structured layouts, clear data presentation, and responsive UI components.",
    link: "https://github.com/Megicula69/BankingSystem.git",
    tags: ["Frontend", "UI/UX", "Responsive"]
  },
  {
    title: "Simple Grading System",
    description: "An interactive grading interface focused on usability and clarity. It allows users to input, calculate, and display student grades efficiently through an intuitive layout.",
    link: "https://github.com/jayeuse/Visual-Basic-Project.git",
    tags: ["Interface Design", "Usability", "Management"]
  },
  {
    title: "P.A.C.E.",
    description: "\"A robust platform empowering alumni with curated career opportunities while providing institutions with comprehensive employability insights and analytics.",
    link: "https://github.com/KlyrhonMiko/pace.git",
    tags: ["In Progress", "Analytics", "Career Platform"]
  },
  {
    title: "JTCI Carpet Gallery",
    description: "A visually rich corporate website built with modern frontend practices. Highlights product showrooms, brand identity, and smooth navigation through elegant layouts.",
    link: "https://github.com/KlyrhonMiko/jtci.git",
    tags: ["In Progress", "Corporate", "Premium", "Product Showcase"]
  }
];

const techStack = {
  languages: ["JavaScript", "Python", "Java", "TypeScript", "HTML5", "CSS3"],
  backend: ["FastAPI", "PostgreSQL", "MySQL", "Supabase", "Node.js"],
  tools: ["Git", "GitHub", "Vite", "npm", "Docker", "Figma", "Adobe XD"],
  frontend: ["React", "Tailwind CSS", "Bootstrap", "Next.js"]
};

export default function Home() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Moving Background */}
      <div className="moving-mesh">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
      </div>
      <NetworkLines />

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto flex flex-col items-start gap-8 reveal active">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for opportunities
        </div>

        <div className="space-y-4 max-w-4xl reveal" style={{ transitionDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9]">
            Chris Nicolai <br /> <span className="text-zinc-400">Folloso</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-600">Frontend Developer</h2>
        </div>

        <p className="max-w-2xl text-zinc-500 leading-relaxed text-xl md:text-2xl font-light reveal" style={{ transitionDelay: '0.3s' }}>
          I build intuitive, responsive, and visually engaging user interfaces that transform complex logic into seamless user experiences. I focus on the <span className="text-zinc-900 font-normal underline decoration-blue-500/30 decoration-4 underline-offset-4">“how it feels”</span> so the “what it does” becomes effortless.
        </p>

        <div className="flex flex-wrap gap-4 pt-4 reveal" style={{ transitionDelay: '0.4s' }}>
          <a href="#projects" className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200">
            View Projects
          </a>
          <div className="flex gap-4">
            <a href="mailto:chrisfolloso@gmail.com" className="p-4 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors">
              <IconMail />
            </a>
            <a href="https://github.com/Megicula69" target="_blank" className="p-4 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors">
              <IconGithub />
            </a>
            <a href="https://www.linkedin.com/in/folloso-chris-nicolai-z-541569364" target="_blank" className="p-4 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors">
              <IconLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">About Me</h2>
              <p className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight tracking-tighter">
                Crafting digital <br /> experiences with <br /> <span className="text-blue-600">precision.</span>
              </p>
              <p className="text-lg font-medium text-zinc-400 tracking-wide uppercase">
                The intersection of art and logic.
              </p>
            </div>

            <div className="space-y-6 text-zinc-600 text-lg md:text-xl font-light leading-relaxed">
              <p>
                I am a Frontend Developer dedicated to building intuitive, responsive, and visually engaging user interfaces. I focus on the structure of UI, behavior, and accessibility to ensure every interaction feels natural and effortless.
              </p>
            </div>
          </div>

          <div className="code-art group hover:-translate-y-2 transition-transform duration-500">
            <div className="code-art-header">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            <div className="space-y-1 text-xs md:text-sm">
              <div>
                <span className="keyword">const</span> <span className="property">developer</span> <span className="punctuation">=</span> <span className="punctuation">{"{"}</span>
              </div>
              <div className="pl-4">
                <span className="property">name</span><span className="punctuation">:</span> <span className="string">"Chris Nicolai Folloso"</span><span className="punctuation">,</span>
              </div>
              <div className="pl-4">
                <span className="property">role</span><span className="punctuation">:</span> <span className="string">"Frontend Developer"</span><span className="punctuation">,</span>
              </div>
              <div className="pl-4">
                <span className="property">specialty</span><span className="punctuation">:</span> <span className="string">"UI/UX & Interactive Logic"</span><span className="punctuation">,</span>
              </div>
              <div className="pl-4">
                <span className="property">location</span><span className="punctuation">:</span> <span className="string">"Philippines"</span><span className="punctuation">,</span>
              </div>
              <div className="pl-4">
                <span className="property">passions</span><span className="punctuation">:</span> <span className="punctuation">[</span>
                <span className="string">"Clean Code"</span><span className="punctuation">,</span>
                <span className="string">"User Centricity"</span><span className="punctuation">,</span>
                <span className="string">"Artistic UI"</span>
                <span className="punctuation">]</span><span className="punctuation">,</span>
              </div>
              <div className="pl-4">
                <span className="property">philosophies</span><span className="punctuation">:</span> <span className="punctuation">[</span>
              </div>
              <div className="pl-8">
                <span className="string">"Code as Art"</span><span className="punctuation">,</span>
              </div>
              <div className="pl-8">
                <span className="string">"Form follows Function"</span>
              </div>
              <div className="pl-4">
                <span className="punctuation">]</span>
              </div>
              <div><span className="punctuation">{"}"}</span><span className="punctuation">;</span></div>
              <div className="pt-4">
                <span className="keyword">function</span> <span className="function">helloWorld</span><span className="punctuation">()</span> <span className="punctuation">{"{"}</span>
              </div>
              <div className="pl-4">
                <span className="property">console</span><span className="punctuation">.</span><span className="function">log</span><span className="punctuation">(</span><span className="string">"Let's build something amazing."</span><span className="punctuation">)</span><span className="punctuation">;</span>
              </div>
              <div><span className="punctuation">{"}"}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack */}
      <section id="tech-stack" className="py-32 border-y border-zinc-100 bg-zinc-50/20 overflow-hidden reveal">
        <div className="px-6 md:px-20 lg:px-40 max-w-7xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Technical Arsenal</h2>
          <p className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter">Tools of the Trade</p>
        </div>
        {/* Small Elegant Marquee */}
        <div className="space-y-4 mb-20 px-6 md:px-20 overflow-hidden reveal">
          <div className="flex whitespace-nowrap overflow-hidden rounded-full">
            <div className="flex gap-8 animate-marquee items-center">
              {[...techStack.languages, ...techStack.backend, ...techStack.frontend, ...techStack.tools].map((tech, i) => (
                <div key={i} className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full flex items-center gap-2 transition-all duration-300 hover:border-blue-200">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">{tech}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[...techStack.languages, ...techStack.backend, ...techStack.frontend, ...techStack.tools].map((tech, i) => (
                <div key={`dup-${i}`} className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full flex items-center gap-2 transition-all duration-300 hover:border-blue-200">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex whitespace-nowrap overflow-hidden rounded-full">
            <div className="flex gap-8 animate-marquee-slow items-center" style={{ animationDirection: 'reverse' }}>
              {[...techStack.tools, ...techStack.frontend, ...techStack.backend, ...techStack.languages].map((tech, i) => (
                <div key={i} className="px-4 py-2 bg-zinc-200/20 border border-zinc-100 rounded-full flex items-center gap-2 transition-all duration-300 hover:border-indigo-200">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">{tech}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[...techStack.tools, ...techStack.frontend, ...techStack.backend, ...techStack.languages].map((tech, i) => (
                <div key={`dup-${i}`} className="px-4 py-2 bg-zinc-200/20 border border-zinc-100 rounded-full flex items-center gap-2 transition-all duration-300 hover:border-indigo-200">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structured Designer Showcase */}
        <div className="px-6 md:px-20 lg:px-40 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages & Frontend */}
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-3">
                  <span className="w-8 h-1 bg-blue-500 rounded-full" />
                  Frontend & Logic
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...techStack.languages, ...techStack.frontend].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Backend & Systems */}
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-3">
                  <span className="w-8 h-1 bg-zinc-900 rounded-full" />
                  Backend & Database
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-lg border border-zinc-200 hover:bg-zinc-200 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Tools & Workflow */}
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-3">
                  <span className="w-8 h-1 bg-indigo-500 rounded-full" />
                  Workflow & Ops
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.filter(t => !["Figma", "Adobe XD"].includes(t)).map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Design & Prototyping */}
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-3">
                  <span className="w-8 h-1 bg-pink-500 rounded-full" />
                  Design & Vision
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Adobe XD"].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-pink-50 text-pink-700 text-xs font-semibold rounded-lg border border-pink-100 hover:bg-pink-100 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto space-y-16 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Project Gallery</h2>
            <p className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter">Selected Works</p>
          </div>
          <p className="text-zinc-500 max-w-xs">
            A showcase of digital experiences focused on performance and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <a href={project.link} target="_blank" className="p-2 bg-zinc-50 rounded-full hover:bg-zinc-900 hover:text-white transition-all">
                    <IconExternal />
                  </a>
                </div>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto pt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-zinc-100 text-zinc-600 font-bold uppercase tracking-wider rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto space-y-16 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">My Journey</h2>
            <p className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter">Key Highlights</p>
          </div>
          <p className="text-zinc-500 max-w-xs">
            A brief overview of my professional path and significant milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="space-y-6 reveal">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">2026 — Present</span>
              <h3 className="text-2xl font-bold text-zinc-900">Freelance Developer</h3>
              <p className="text-zinc-500 font-medium italic">Self-Employed</p>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-600 text-sm">
                <span className="text-blue-500 mt-1">•</span>
                <span>Delivered 5+ production-ready frontend solutions for diverse clients.</span>
              </li>
              <li className="flex gap-3 text-zinc-600 text-sm">
                <span className="text-blue-500 mt-1">•</span>
                <span>Specialized in high-performance React and Next.js user interfaces.</span>
              </li>
              <li className="flex gap-3 text-zinc-600 text-sm">
                <span className="text-blue-500 mt-1">•</span>
                <span>Focused on conversion-oriented UI/UX design and visual storytelling.</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="space-y-6 reveal">
            <div className="space-y-2">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">2023 — Present</span>
              <h3 className="text-2xl font-bold text-zinc-900">BS In Information Technology</h3>
              <p className="text-zinc-500 font-medium italic">Pamantasan ng Lungsod ng Pasig</p>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-zinc-600 text-sm">
                <span className="text-zinc-400 mt-1">•</span>
                <span>Consistent Academic Excellence Candidate (Dean's Lister).</span>
              </li>
              <li className="flex gap-3 text-zinc-600 text-sm">
                <span className="text-zinc-400 mt-1">•</span>
                <span>Core focus on Software Architecture, Systems Logic, and Web Dev.</span>
              </li>
              <li className="flex gap-3 text-zinc-600 text-sm">
                <span className="text-zinc-400 mt-1">•</span>
                <span>Active leadership and participation in local tech community projects.</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto reveal">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Get In Touch</h2>
            <p className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
              Let's create something <br /> exceptional together.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <a href="mailto:chrisfolloso@gmail.com" className="text-2xl md:text-4xl font-medium text-white hover:text-blue-400 transition-colors underline underline-offset-8 decoration-white/20">
                chrisfolloso@gmail.com
              </a>
            </div>
            <div className="flex justify-center gap-6 text-white/50 pt-4">
              <a href="tel:+639628569702" className="hover:text-white transition-colors flex items-center gap-2">
                <span>+63 962 856 9702</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
            <div className="space-y-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Social</p>
              <div className="flex flex-col items-center gap-2 text-white/70">
                <a href="https://www.linkedin.com/in/folloso-chris-nicolai-z-541569364" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/Megicula69" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Messaging</p>
              <div className="flex flex-col items-center gap-2 text-white/70">
                <a href="https://wa.me/639628569702" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                  <IconWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Location</p>
              <p className="text-white/70">Philippines</p>
            </div>
            <div className="space-y-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Local Time</p>
              <p className="text-white/70">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} PHT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 bg-white border-t border-zinc-100 w-full px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 max-w-none">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900 tracking-tighter">Chris <br /> Nicolai Folloso</h3>
            <p className="text-zinc-500 max-w-xs leading-relaxed">
              Frontend Developer based in the Philippines, specialized in building premium digital experiences.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Navigation</h4>
            <nav className="flex flex-col gap-4 text-zinc-500">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#journey" className="hover:text-blue-600 transition-colors">Journey</a>
              <a href="#tech-stack" className="hover:text-blue-600 transition-colors">Tech Stack</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Connect</h4>
            <div className="flex flex-col gap-4 text-zinc-500">
              <a href="https://github.com/Megicula69" target="_blank" className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
                <IconGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/folloso-chris-nicolai-z-541569364" target="_blank" className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
                <IconLinkedin /> LinkedIn
              </a>
              <a href="mailto:chrisfolloso@gmail.com" className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
                <IconMail /> Email
              </a>
              <a href="https://wa.me/639628569702" target="_blank" className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
                <IconWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 gap-4">
          <p className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} Chris Nicolai Folloso. All rights reserved.
          </p>
          <div className="flex gap-8 text-zinc-400 text-sm">
            <span>Built with Next.js & Tailwind</span>
            <span>Handcrafted with Care</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
