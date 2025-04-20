"use client";

import Input from "../Input";
import { formatCurrencyInput } from "@/lib/utils/formatCurrencyInput";

interface CurrencyInputProps {
  inputRef?: React.Ref<HTMLInputElement>;
  value: string;
  onValueChange: (value: string) => void;
  isActive?: boolean;
  className?: string;
  maxLength?: number;
}

export default function CurrencyInput({
  inputRef,
  value,
  onValueChange,
  isActive = true,
  className = "",
  maxLength,
}: CurrencyInputProps) {
  const { handleValueChange, displayValue } = formatCurrencyInput(
    onValueChange,
    isActive,
    value,
  );

  return (
    <Input
      inputRef={inputRef}
      value={displayValue}
      onChange={handleValueChange}
      inputMode="decimal"
      autoComplete="off"
      placeholder="0.00"
      className={className}
      maxLength={maxLength}
    />
  );
}
