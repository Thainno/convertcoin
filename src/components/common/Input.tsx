interface InputProps {
  inputRef?: React.Ref<HTMLInputElement>; //Usada para focar ou manipular o input diretamente se necessário
  type: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]; //Define o modo de entrada no teclado (ex: "numeric", "decimal", "text")
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  maxLength?: number;
}

export default function Input({
  inputRef,
  type,
  inputMode,
  autoComplete,
  value,
  onChange,
  placeholder,
  className,
  maxLength,
}: InputProps) {
  return (
    <input
      ref={inputRef}
      type={type}
      inputMode={inputMode}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`rounded-4xl text-4xl bg-[#fff] shadow-sm ${className || ""}`}
      maxLength={maxLength}
    />
  );
}
