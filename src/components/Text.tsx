interface TextProps {
  children: React.ReactNode;
  size: "small" | "large";
  isLight?: boolean;
}

function Text({ children, size, isLight = false }: TextProps) {
  const sizeClass =
    size === "small"
      ? "fold:text-sm fold:leading-height-2 text-xs leading-height-1"
      : "fold:text-lg fold:leading-height-3 text-sm leading-height-2 ";
  const colorClass = isLight ? "text-grey" : "text-white";
  return (
    <h1 className={`${sizeClass} tracking-wider ${colorClass} `}>{children}</h1>
  );
}

export default Text;
