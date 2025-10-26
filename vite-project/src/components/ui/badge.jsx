import React from "react";

export function Badge({ children, className = "", variant = "default", ...p }) {
  const variants = {
    default: "bg-purple-600 text-white",
    outline: "bg-transparent border border-purple-400 text-purple-700",
    secondary: "bg-purple-100 text-purple-700",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm ${variants[variant] || variants.default} ${className}`}
      {...p}
    >
      {children}
    </span>
  );
}
