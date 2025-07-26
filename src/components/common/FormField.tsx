"use client";

import { useState, FocusEvent } from "react";
import Input from "./Input";

interface FormFieldProps {
  fieldId: string;
  inputType: string;
  textLabel?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export default function FormField({
  fieldId,
  inputType,
  textLabel,
  value,
  onChange,
  onBlur,
  error,
}: FormFieldProps) {
  //const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor={fieldId}
        className={`pointer-events-none absolute left-2 px-2 text-[#6DA67A] transition-all duration-200 ${isFocused || value ? "-top-3 bg-white text-sm" : "text-md top-2.5"} `}
      >
        {textLabel}
      </label>
      <Input
        id={fieldId}
        type={inputType}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full rounded-md border-2 border-green-800/20 p-3 text-sm outline-green-800/35"
        required
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
