import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const Ctx = createContext(null);

export function Select({ value, onValueChange, children }) {
  const [items, setItems] = useState([]);
  const ctxValue = useMemo(
    () => ({ value, onValueChange, items, setItems }),
    [value, onValueChange, items]
  );

  
  useEffect(() => {
    setItems([]);
  }, [children]);

  return <Ctx.Provider value={ctxValue}><div className="relative">{children}</div></Ctx.Provider>;
}

export function SelectTrigger({ className = "", children, ...p }) {
  const { value, onValueChange, items } = useContext(Ctx) || {};
  return (
    <div className={`relative ${className}`} {...p}>
      
      <div className="min-h-[40px] rounded-lg border border-gray-400 flex items-center px-3">
        {children}
      </div>
      
      <select
        value={value}
        onChange={(e) => onValueChange && onValueChange(e.target.value)}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
        aria-label="select"
      >
        {items.map((it) => (
          <option key={it.value} value={it.value}>
            {it.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function SelectValue({ placeholder }) {
  const { value, items } = useContext(Ctx) || {};
  const current = items.find((i) => i.value === value);
  return <span>{current ? current.label : placeholder}</span>;
}

export function SelectContent({ children }) {
 
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  const { setItems } = useContext(Ctx) || {};
  useEffect(() => {
    setItems && setItems((prev) => [...prev, { value, label: children }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, children]);
  return null;
}
