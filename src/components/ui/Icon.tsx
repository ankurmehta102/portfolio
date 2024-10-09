import "./icon.css";

interface IconProps {
  children: React.ReactNode;
  link: string;
  tooltipText?: string;
  target?: string;
}

function Icon({ children, link, target, tooltipText }: IconProps) {
  return (
    <a
      href={link}
      target={target}
      data-tooltip={tooltipText}
      className={` ${tooltipText && "icon"}  relative text-white hover:text-slate-400 `}
    >
      {children}
    </a>
  );
}

export default Icon;
