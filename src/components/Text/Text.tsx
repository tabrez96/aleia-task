import { TextProps } from "./Text.types";

import "./Text.scss";

const Text = ({
  size = "medium",
  children,
  className = "",
  ...rest
}: TextProps) => (
  <p {...rest} className={`aliea-text aleia-text-size-${size} ${className}`}>
    {children}
  </p>
);

export default Text;
