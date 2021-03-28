import React from "react";
import { withRouter } from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/cart">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/login">SIGN IN</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </ul>
);

export default withRouter(navigationItems);

// <Button
//               onClick={(e) => router.push("/cart")}
//               aria-label="show item that you liked"
//               color="inherit"
//               className={classes.button}
//               startIcon={
//                 <Badge badgeContent={5} color="secondary">
//                   <FavoriteBorderIcon />
//                 </Badge>
//               }
//             >
//               Liked
//             </Button>
//             <Button
//               onClick={(e) => router.push("/cart")}
//               aria-label="show item quantity in cart"
//               color="inherit"
//               className={classes.button}
//               startIcon={
//                 <Badge
//                   badgeContent={cartItems.reduce(
//                     (acc, item) => acc + item.qty,
//                     0
//                   )}
//                   color="secondary"
//                 >
//                   <ShoppingBasketIcon />
//                 </Badge>
//               }
//             >
//               Cart
//             </Button>
