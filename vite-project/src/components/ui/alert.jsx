import React from "react";

export function Alert({ children, className = "", variant = "default", ...p }) {
  const variants = {
    default: "bg-gray-100 border border-gray-300 text-gray-800",
    destructive: "bg-red-50 border border-red-400 text-red-700",
  };
  return (
    <div
      className={`w-full rounded-lg px-4 py-3 flex items-start gap-2 ${variants[variant] || variants.default} ${className}`}
      role="alert"
      {...p}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ children, className = "", ...p }) {
  return (
    <div className={`text-sm leading-relaxed ${className}`} {...p}>
      {children}
    </div>
  );
}
