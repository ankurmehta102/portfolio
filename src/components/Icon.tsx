interface IconProps {
  children: React.ReactNode;
  link: string;
}

function Icon({ children, link }: IconProps) {
  return (
    <a
      href={link}
      className={`mr-1 h-4 w-4 text-grey hover:text-slate-500 fold:mr-4 fold:h-6 fold:w-6 `}
    >
      {children}
    </a>
  );
}

export default Icon;
