interface ButtonProps {
  label: string;
  className?: string;
  href?: string;
  onClick?: VoidFunction;
}

const Button = ({ label, className, href, onClick }: ButtonProps) => {
  return (
    <button
      className={`w-48 bg-secondary h-[3.5rem] rounded-lg font-semibold text-xl hover:outer-glow ${className}`}
      onClick={onClick}
    >
      <a href={href} target="_blank">
        {label}
      </a>
    </button>
  );
};

export default Button;
