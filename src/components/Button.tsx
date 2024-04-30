interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button
      id="resume"
      className="rounded bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-2  text-sm font-extrabold hover:from-amber-500 hover:via-amber-600 hover:to-amber-700"
    >
      {children}
    </button>
  );
}

export default Button;
