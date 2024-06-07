import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "Heading" | "SubHeading";
}

function Heading({ className, children, variant, ...props }: HeadingProps) {
  let Size = "";

  switch (variant) {
    case "Heading":
      Size = "laptop:text-4xl text-3xl";
      break;

    case "SubHeading":
      Size = "laptop:text-3xl text-2xl";
      break;

    default:
      break;
  }
  return (
    <h1
      className={twMerge(
        `font-Primary ${Size} font-black tracking-wide text-white`,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Heading;
