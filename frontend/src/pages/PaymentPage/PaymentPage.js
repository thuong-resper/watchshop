import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import { savePaymentMethod } from "../../store/actions/cartActions";
const PaymentPage = ({ history }) => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (!shippingAddress) {
      history.push("/shipping");
    }
  }, [shippingAddress, userInfo, history]);

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <CheckoutSteps step1 step2 step3 />
        <Typography variant="h6" gutterBottom className={classes.title}>
          Payment Method
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Select Method</FormLabel>
                <RadioGroup
                  aria-label="payment"
                  name="payment1"
                  value={paymentMethod}
                >
                  <FormControlLabel
                    value="PayPal"
                    id="PayPal"
                    name="paymentMethod"
                    control={<Radio />}
                    label="PayPal or Credit Card"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="Stripe"
                    id="Stripe"
                    name="paymentMethod"
                    control={<Radio />}
                    label="Stripe"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Box m="0.5rem 0" width="100%">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.buttons}
              >
                Continue
              </Button>
            </Box>
          </Grid>
        </form>
      </Paper>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "block",
    margin: "0 0.25rem 0 auto",
  },
  title: { margin: "20px 0" },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default PaymentPage;
