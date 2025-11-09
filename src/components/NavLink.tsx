import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";

interface CustomNavLinkProps extends NavLinkProps {
  activeClassName?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, CustomNavLinkProps>(
  ({ activeClassName, className, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        className={({ isActive }) =>
          `${className} ${isActive ? activeClassName : ""}`
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";
