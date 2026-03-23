import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", glow = true }) => {
  return (
    <div
      className={`glass glass-hover p-6 rounded-2xl transition-all duration-300 ${
        glow ? "glow-edge" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
