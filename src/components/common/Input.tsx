interface InputProps {
  inputRef?: React.Ref<HTMLInputElement>;
  type: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  inputRef,
  type,
  inputMode,
  autoComplete,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      ref={inputRef}
      type={type}
      inputMode={inputMode}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      className="w-full h-16 rounded-4xl px-8 text-right text-4xl bg-[#fff] shadow-sm"
    />
  );
}
