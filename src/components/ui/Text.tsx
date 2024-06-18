import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  liteText?: boolean;
}

function Text({ children, liteText = false, className, ...props }: TextProps) {
  const colorClass = liteText ? "text-grey" : "text-white";
  return (
    <p
      className={twMerge(
        `text-base font-medium leading-height-2 tracking-wide laptop:text-xl ${colorClass}`,
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export default Text;
