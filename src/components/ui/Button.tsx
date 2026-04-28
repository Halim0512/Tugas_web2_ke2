interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  onClick,
  isLoading = false,
  type = "button",
}) => {
  const baseStyle =
    "px-6 py-2 rounded font-medium transition-all duration-200 disabled:opacity-50";

  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-800"
      : "border border-red-900 text-red-900 hover:bg-red-100";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyle} ${variantStyle} ${className || ""}`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;