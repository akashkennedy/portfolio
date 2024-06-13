interface ButtonProps {
  label: string;
  className?: string;
}

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={`w-48 bg-secondary h-[3.5rem] rounded-lg font-semibold text-xl hover:outer-glow ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
