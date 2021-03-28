import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={3}>
        {step1 ? (
          <Link to="/login" className={classes.link}>
            <Button className={classes.button}>Sign In</Button>
            <span className={classes.line}></span>
          </Link>
        ) : (
          <Button disabled className={classes.button}>
            Sign In
          </Button>
        )}
      </Grid>
      <Grid item xs={3}>
        {step2 ? (
          <Link to="/shipping" className={classes.link}>
            <Button className={classes.button}>Shipping</Button>
            <span className={classes.line}></span>
          </Link>
        ) : (
          <Button disabled className={classes.button}>
            Shipping
          </Button>
        )}
      </Grid>
      <Grid item xs={3}>
        {step3 ? (
          <Link to="/payment" className={classes.link}>
            <Button className={classes.button}>Payment</Button>
            <span className={classes.line}></span>
          </Link>
        ) : (
          <Button disabled className={classes.button}>
            Payment
          </Button>
        )}
      </Grid>
      <Grid item xs={3}>
        {step4 ? (
          <Link to="/placeorder" className={classes.link}>
            <Button className={classes.button}>Place Order</Button>
          </Link>
        ) : (
          <Button disabled className={classes.button}>
            Order
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  line: {
    borderColor: "#bdbdbd",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    display: "block",
    flex: "1 1 auto",
  },
  button: {
    textTransform: "none",
    letterSpacing: "0.5px",
  },
}));

export default CheckoutSteps;
