import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  liteText?: boolean;
}

function Text({ children, liteText = false, className, ...props }: TextProps) {
  const colorClass = liteText ? "text-grey" : "text-white";
  return (
    <h1
      className={twMerge(
        `text-xl font-bold font-medium leading-height-2 tracking-wide ${colorClass}`,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Text;
