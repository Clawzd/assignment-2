import React from "react";

export function Button({
  as: Comp = "button",
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none";
  const variants = {
    default: "bg-purple-600 text-white hover:opacity-90",
    outline:
      "bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-black/10",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
    icon: "p-2",
  };
  return (
    <Comp
      className={`${base} ${variants[variant] || variants.default} ${
        sizes[size] || sizes.md
      } ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
