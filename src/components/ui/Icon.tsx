import "./icon.css";
import ReactGA from "react-ga";

interface IconProps {
  children: React.ReactNode;
  link: string;
  tooltipText?: string;
  target?: string;
}

function Icon({ children, link, target, tooltipText }: IconProps) {
  const handleClick = () => {
    ReactGA.event({
      category: `${tooltipText}_Button`,
      action: "click",
      label: `link:${link}`,
    });
  };
  return (
    <a
      href={link}
      onClick={handleClick}
      target={target}
      data-tooltip={tooltipText}
      className={` ${tooltipText && "icon"} relative text-white hover:text-slate-400 `}
    >
      {children}
    </a>
  );
}

export default Icon;
