import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const GlassCard = ({ children, className = "", glow = true }: GlassCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-500 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 ${className}`}
    >
      {glow && (
        <div className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-indigo-50/20" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
