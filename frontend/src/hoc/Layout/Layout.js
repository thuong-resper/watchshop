import React, { useState } from "react";
import { connect } from "react-redux";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";

const Layout = (props) => {
  console.log(props.isAuthenticated);
  const [sideDrawerIsVisible, setSetDrawerIsVisible] = useState(false);
  const sideDrawerCloseHandler = () => {
    setSetDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSetDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <Aux>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={props.isAuthenticated}
      />
      <SideDrawer
        open={sideDrawerIsVisible}
        closed={sideDrawerCloseHandler}
        isAuth={props.isAuthenticated}
      />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
