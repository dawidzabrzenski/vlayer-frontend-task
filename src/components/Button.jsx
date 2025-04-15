function Button({ children, type }) {
  if (type === "primary")
    return (
      <button className="button-main bg-primary hover:bg-primary-hover focus:border-primary-border rounded-lg text-white focus:border-2 focus:outline-none">
        {children}
      </button>
    );

  if (type === "secondary")
    return <button className="button-main">test</button>;
}

export default Button;
