interface IconProps {
  children: React.ReactNode;
  link: string;
}

function Icon({ children, link }: IconProps) {
  return (
    <a
      href={link}
      className={`mr-1 h-8 w-8 text-white hover:text-slate-400 fold:mr-4 fold:h-4 fold:w-4 `}
    >
      {children}
    </a>
  );
}

export default Icon;
