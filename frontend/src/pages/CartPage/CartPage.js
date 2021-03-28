import { Box, Button, Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/Cart/CartList";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { addToCart } from "../../store/actions/cartActions";
import styles from "./styles.module.css";

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const { address, city, country, province } = shippingAddress;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <Grid container justify="space-between" alignItems="flex-start">
          <SimpleAlerts
            severity="info"
            message="There are no items in this cart"
            title="Info"
            to="/"
            titleLink="CONTINUE SHOPPING"
          />
        </Grid>
      ) : (
        <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={8}>
              {cartItems.map((item, index) => (
                <CartList item={item} key={item.product} />
              ))}
            </Grid>
            {/*order detail*/}
            <Grid item xs={12} md={4}>
              <div className={styles.wrapper}>
                <Typography className={styles.location_element} gutterBottom>
                  Location
                </Typography>
                <div className={styles.location}>
                  <Box mr="10px">
                    <RoomOutlinedIcon className={styles.location_element} />
                  </Box>
                  <Typography variant="body2">
                    {shippingAddress.length ? (
                      <span>
                        {address}, {province}, {city}, {country}
                      </span>
                    ) : (
                      "Your shipping address"
                    )}
                  </Typography>
                </div>
                <Box p="1rem 0">
                  <Box className={styles.order}>
                    <Typography variant="h6">Order Summary</Typography>
                  </Box>
                  <Box pb="1rem">
                    <div>
                      <div>
                        <div className={styles.row_1}>
                          <div className={styles.label}>
                            Subtotal (
                            {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                            items)
                          </div>
                          <Typography variant="body1">
                            ${" "}
                            {cartItems
                              .reduce(
                                (acc, item) => acc + item.qty * item.price,
                                0
                              )
                              .toFixed(2)}
                          </Typography>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.label}>Shipping Fee</div>
                          <Typography variant="body1">
                            ${" "}
                            {cartItems
                              .reduce(
                                (acc, item) => acc + item.qty * item.price,
                                0
                              )
                              .toFixed(2)}
                          </Typography>
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
                    </Box>
                  </Box>
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
                    onClick={checkoutHandler}
                  >
                    CONFIRM CART
                  </Button>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default CartPage;
