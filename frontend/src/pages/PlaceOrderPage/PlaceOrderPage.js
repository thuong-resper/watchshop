import { Box, Button, Chip, Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PaymentIcon from "@material-ui/icons/Payment";
import PhoneIcon from "@material-ui/icons/Phone";
import ReceiptIcon from "@material-ui/icons/Receipt";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemsConfirm from "../../components/Cart/CartItemsConfirm";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { createOrder } from "../../store/actions/orderActions";
import styles from "./styles.module.css";

const PlaceOrderPage = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const { address, city, country, phone, province } = shippingAddress;

  console.log(cart);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { name, email } = userInfo;

  if (!cart.shippingAddress.address) {
    history.push("/shipping");
  } else if (!cart.paymentMethod) {
    history.push("/payment");
  }

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
  }, [history, success, order]);

  return (
    <React.Fragment>
      <Grid container direction="row" className={styles.layout}>
        <div className={styles.paper}>
          <CheckoutSteps step1 step2 step3 step4 />
        </div>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={8}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={styles.title}
          >
            <Grid item xs={8}>
              <Typography variant="body2" style={{ marginLeft: "19px" }}>
                {cartItems.reduce((acc, item) => acc + item.qty, 0)} ITEMS
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" style={{ marginLeft: "-3px" }}>
                PRICE
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">QUANTITY</Typography>
            </Grid>
          </Grid>
          {cartItems.length === 0 ? (
            <div style={{ marginTop: "16px" }}>
              <SimpleAlerts
                severity="info"
                message="There are no items in this cart"
                title="Info"
                to="/"
                titleLink="CONTINUE SHOPPING"
              />
            </div>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <Box m="1rem 0" key={item.product}>
                  <CartItemsConfirm item={item} />
                </Box>
              ))}
            </div>
          )}
        </Grid>

        {/*order detail*/}
        <Grid item xs={12} md={4}>
          <div className={styles.wrapper}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "500" }}
            >
              Shipping & Billing
            </Typography>
            <Box pb="1rem">
              <div>
                <div>
                  <div className={styles.row}>
                    <div className={styles.label}>
                      <LocationOnIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography
                        variant="body2"
                        style={{ fontWeight: "bold" }}
                      >
                        {name}
                      </Typography>
                    </div>
                    <div className={styles.value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.label}>
                      <Chip
                        label="HOME"
                        size="small"
                        color="secondary"
                        style={{
                          fontWeight: "bold",
                          padding: "0 5px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography variant="body2">
                        {address}, {province}, {city}, {country}
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.label}>
                      <ReceiptIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">
                        Bill to the same address
                      </Typography>
                    </div>
                    <div className={styles.value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.label}>
                      <PhoneIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">{phone}</Typography>
                    </div>
                    <div className={styles.value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.label}>
                      <EmailIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">{email}</Typography>
                    </div>
                    <div className={styles.value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.label}>
                      <MonetizationOnIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">Tax Code</Typography>
                    </div>
                    <div className={styles.value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.label}>
                      <PaymentIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">
                        <strong>Payment Method: {cart.paymentMethod}</strong>
                      </Typography>
                    </div>
                    <div className={styles.value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Box>

            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "500" }}
            >
              Order Summary
            </Typography>

            <Box pb="1rem">
              <div>
                <div>
                  <div className={styles.row}>
                    <div
                      className={styles.label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Subtotal (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                      items)
                    </div>
                    <div className={styles.value}>$ {cart.itemsPrice}</div>
                  </div>
                  <div className={styles.row}>
                    <div
                      className={styles.label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Shipping Fee
                    </div>
                    <div className={styles.value}>$ {cart.shippingPrice}</div>
                  </div>
                  <div className={styles.row}>
                    <div
                      className={styles.label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Tax
                    </div>
                    <div className={styles.value}>$ {cart.taxPrice}</div>
                  </div>
                </div>
              </div>
              <Box mb="0.5rem">
                <div className={styles.voucher_input}>
                  <Box width="73%">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </Box>
                  <Box width="25%">
                    <Button variant="contained" color="primary" fullWidth>
                      Apply
                    </Button>
                  </Box>
                </div>
              </Box>{" "}
            </Box>
            <div className={styles.fixed}>
              <div>
                <div className={styles.order_row}>
                  <Typography variant="subtitle1">Total</Typography>
                  <div className={styles.total}>
                    ${" "}
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                    <small className={styles.fee}>
                      VAT included, where applicable
                    </small>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                color="secondary"
                className={styles.button}
                disabled={cartItems.length === 0}
                onClick={placeOrderHandler}
              >
                Order
              </Button>{" "}
              {error && (
                <SimpleAlerts
                  title="Error"
                  severity="danger"
                  message={error}
                ></SimpleAlerts>
              )}{" "}
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PlaceOrderPage;
