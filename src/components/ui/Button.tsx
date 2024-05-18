import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      id="resume"
      className={twMerge(
        "rounded bg-white  px-3  py-1 text-lg font-bold hover:brightness-90",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
