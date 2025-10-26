import React from "react";

export const Textarea = React.forwardRef(function Textarea(
  { className = "", ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={`w-full px-3 py-2 rounded-lg border outline-none transition-colors
      border-gray-400 focus:border-purple-500 ${className}`}
      {...props}
    />
  );
});
