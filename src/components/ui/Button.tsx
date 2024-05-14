interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button
      id="resume"
      className="rounded bg-white  px-3  py-1 text-lg font-bold hover:brightness-90"
    >
      {children}
    </button>
  );
}

export default Button;
