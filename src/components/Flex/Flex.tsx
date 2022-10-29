import { FlexProps } from "./Flex.types";

import "./Flex.scss";

const Flex = ({
  children,
  direction = "row",
  justify,
  className,
}: FlexProps) => {
  return (
    <div
      className={`aleia-flex aleia-flex-direction-${direction} aleia-flex-justify-${justify} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Flex;
