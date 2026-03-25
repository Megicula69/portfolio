"use client";

import React, { useState, useEffect } from "react";

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-lg border-b border-zinc-200"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter text-zinc-900">
          CNF.
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors"
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
};

export default TopNav;
