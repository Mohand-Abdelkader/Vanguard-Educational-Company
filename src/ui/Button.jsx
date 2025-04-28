function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
  size = "medium",
  ...props
}) {
  // Base classes that all buttons share
  const baseClasses =
    "font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center";

  // Size variations
  const sizeClasses = {
    small: "py-2 px-6 text-sm",
    medium: "py-3 px-8 text-base",
    large: "py-4 px-10 text-lg",
  };

  // Variant styles
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-secondary hover:bg-secondary-dark text-white",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  // Disabled state
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none"
    : "";

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
