interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  className?: string;
}

export default function Input({
  inputRef,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      ref={inputRef}
      className={`rounded-4xl text-4xl bg-[#fff] shadow-sm ${className}`}
      {...props}
    />
  );
}
