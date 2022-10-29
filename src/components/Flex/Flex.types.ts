export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  direction?: "row" | "column";
  justify?: "space-between" | "none";
  className?: string;
}
