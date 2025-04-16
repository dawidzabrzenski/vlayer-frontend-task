function Button({ children, type, disabled }) {
  if (type === "primary")
    return (
      <button
        disabled={disabled}
        className="button-main bg-primary hover:bg-primary-hover focus:ring-primary-border active:bg-primary-active disabled:bg-disabled text-white focus:ring-2"
      >
        {children}
      </button>
    );

  if (type === "secondary")
    return (
      <button
        disabled={disabled}
        className="button-main ring-secondary disabled:ring-secondary disabled:text-disabled-text hover:ring-primary focus:text-primary focus:ring-primary active:ring-primary-active-dark active:text-primary-active-dark bg-white ring-2"
      >
        {children}
      </button>
    );
}

export default Button;
