import { ButtonHTMLAttributes, ReactNode } from "react";

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function DefaultButton({
  children,
  className,
  ...props
}: DefaultButtonProps) {
  return (
    <button
      className={`h-10 w-20 rounded-full bg-[#6DA67A] font-semibold text-white shadow-md transition hover:bg-[#5c926a] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
