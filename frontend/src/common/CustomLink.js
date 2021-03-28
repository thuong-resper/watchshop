import { ListItemText } from "@material-ui/core";
import React from "react";
import { NavLink, Route } from "react-router-dom";
export const OldSchoolMenuLink = ({
  label,
  to,
  activeOnlyWhenExact,
  className,
  activeClassName,
  activeStyle,
}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <NavLink
            to={to}
            className={className}
            activeClassName={activeClassName}
          >
            {label}
          </NavLink>
        );
      }}
    />
  );
};
