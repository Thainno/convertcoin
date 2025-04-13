"use client";

import { useCurrencyInput } from "@/hooks/useCurrencyInput";

interface InputProps {
  inputRef?: React.Ref<HTMLInputElement>;
  value?: string;
  onValueChange?: (value: string) => void;
  isActive?: boolean;
  className?: string;
  maxLength?: number;
}

export default function Input({
  inputRef,
  value = "",
  onValueChange,
  isActive = true,
  className,
  maxLength,
}: InputProps) {
  // Move a lógica para dentro do Input
  const { handleValueChange, displayValue } = useCurrencyInput(
    onValueChange ?? (() => {}),
    isActive,
    value
  );

  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="decimal"
      autoComplete="off"
      value={displayValue}
      onChange={handleValueChange}
      placeholder="0.00"
      className={`rounded-4xl text-4xl bg-[#fff] shadow-sm ${className || ""}`}
      maxLength={maxLength}
    />
  );
}