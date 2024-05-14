import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "Heading" | "SubHeading";
}

function Heading({ className, children, variant, ...props }: HeadingProps) {
  let Size = "";

  switch (variant) {
    case "Heading":
      Size = "text-4xl";
      break;

    case "SubHeading":
      Size = "text-3xl";
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
