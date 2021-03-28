import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import { saveShippingAddress } from "../../store/actions/cartActions";

const ShippingPage = ({ history }) => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    history.push("/login");
  }

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        phone,
        address,
        province,
        city,
        postalCode,
        country,
        saveAddress,
      })
    );
    history.push("/payment");
  };

  const [name, setName] = useState(userInfo ? userInfo.name : "");
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [address, setAddress] = useState(shippingAddress.address);
  const [province, setProvince] = useState(shippingAddress.province);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [saveAddress, setSaveAddress] = useState(shippingAddress.saveAddress);

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <CheckoutSteps step1 step2 />
        <Typography variant="h6" className={classes.title}>
          Shipping address
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={name || ""}
                id="fullName"
                name="fullName"
                label="Full name"
                fullWidth
                autoComplete="family-name"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={phone || ""}
                type="number"
                id="phone"
                name="phone"
                label="Phone Number"
                fullWidth
                autoComplete="family-name"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={address || ""}
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={city || ""}
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={province || ""}
                required
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                onChange={(e) => setProvince(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={postalCode || ""}
                required
                type="number"
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={country || ""}
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="saveAddress"
                    checked={saveAddress || false}
                    onChange={(e) => setSaveAddress(!saveAddress)}
                  />
                }
                label="Use this address for payment details"
              />
            </Grid>

            <Grid item xs={12} className={classes.buttons}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Continue
              </Button>
            </Grid>
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
    display: "flex",
    justifyContent: "flex-end",
  },
  title: { margin: "20px 0" },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default ShippingPage;
