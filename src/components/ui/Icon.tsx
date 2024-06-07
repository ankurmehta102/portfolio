interface IconProps {
  children: React.ReactNode;
  link: string;
}

function Icon({ children, link }: IconProps) {
  return (
    <a href={link} className={`mr-4  text-white hover:text-slate-400 `}>
      {children}
    </a>
  );
}

export default Icon;
