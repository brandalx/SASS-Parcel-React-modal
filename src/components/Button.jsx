const Button = ({ children, type = "button", size = "", ...attrs }) => {
  const sizeClassName = size && `btn-${size}`;
  return (
    <button
      type={type}
      className={`btn btn-primary ${sizeClassName}`.trim()}
      {...attrs}
    >
      {children}
    </button>
  );
};
export default Button;
