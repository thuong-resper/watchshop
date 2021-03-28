import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../../components/Dashboard";
import { styles } from "./styles";

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <Dashboard {...remainProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      ></Route>
    );
  }
}

AdminLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

export default withStyles(styles)(AdminLayoutRoute);
