import type { ReactChild } from "react";
import type { RemixLinkProps } from "@remix-run/react/components";
import { Link, NavLink } from "@remix-run/react/components";

export interface ButtonProps {
  children: ReactChild;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: RemixLinkProps["to"];
  variant?: "default" | "link" | "navlink";
}

export function Button({
  children,
  to,
  variant = "default",
  ...buttonProps
}: ButtonProps) {
  const button = <button {...buttonProps}>{children}</button>;

  if (variant === "link" && to) {
    return <Link to={to}>{button}</Link>;
  } else if (variant === "navlink" && to) {
    return <NavLink to={to}>{button}</NavLink>;
  }
  return button;
}