"use client";

import { useState, FocusEvent } from "react";
import Input from "./Input";

interface FormFieldProps {
  info: string;
  type: string;
  label?: string;
}

export default function FormField({ info, type, label }: FormFieldProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) setIsFocused(false);
  };

  return (
    <div className="relative">
      <label
        htmlFor={info}
        className={`pointer-events-none absolute left-2 px-2 text-[#6DA67A] transition-all duration-200 ${isFocused || value ? "-top-3 bg-white text-sm" : "text-md top-2.5"} `}
      >
        {label}
      </label>
      <Input
        id={info}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full rounded-md border-2 border-green-800/20 p-3 text-sm outline-green-800/35"
      />
    </div>
  );
}
