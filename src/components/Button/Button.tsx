import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button = ({
  variant = "contained",
  size = "medium",
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`aleia-button aleia-button-variant-${variant} aleia-button-size-${size}`}
    >
      {children}
    </button>
  );
};

export default Button;
