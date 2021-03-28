import { Chip, Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PaymentIcon from "@material-ui/icons/Payment";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import CartItemsConfirm from "../../components/Cart/CartItemsConfirm";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { ORDER_PAY_RESET } from "../../constants/orderConstants";
import { getOrderDetails, payOrder } from "../../store/actions/orderActions";

const OrderPage = ({ match, history }) => {
  const classes = useStyles();

  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo, history]);

  //config to access paypal
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [orderId, order, dispatch, successPay]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  return loading ? (
    <SimpleBackdrop />
  ) : error ? (
    <SimpleAlerts message={error} />
  ) : (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} className={classes.checkout}>
          <Typography variant="h5">Order: {order._id}</Typography>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.summary_section_content}>
            <div className={classes.checkout_summary}>
              <div className={classes.checkout}>
                <Typography
                  variant="overline"
                  gutterBottom
                  style={{ fontWeight: "400", fontSize: "18px" }}
                >
                  shipping
                </Typography>
                <div className={classes.checkout_row}>
                  <div className={classes.checkout_summary_label}>
                    <PersonIcon
                      color="primary"
                      style={{ fontSize: "1rem", marginRight: "5px" }}
                    />
                    <Typography variant="body2" style={{ fontWeight: "bold" }}>
                      Name: {order.user.name}
                    </Typography>
                  </div>
                </div>
                <div className={classes.checkout_row}>
                  <div
                    style={{ justifyContent: "flex-start", display: "flex" }}
                  >
                    <div className={classes.checkout_summary_label}>
                      <EmailIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Link to={`mailto:${order.user.email}`}>
                        <Typography variant="body2">
                          Email: {order.user.email}
                        </Typography>
                      </Link>
                    </div>
                    <div className={classes.checkout_summary_label}>
                      <PhoneIcon
                        color="primary"
                        style={{ fontSize: "1rem", margin: "0 5px 0 10px" }}
                      />
                      <Typography variant="body2">
                        Phone Number: {order.shippingAddress.phone}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.checkout_row}>
                  <div className={classes.checkout_summary_label}>
                    <LocationOnIcon
                      color="primary"
                      style={{ fontSize: "1rem", marginRight: "5px" }}
                    />
                    Address:
                    <Chip
                      label="HOME"
                      size="small"
                      color="secondary"
                      style={{
                        fontWeight: "bold",
                        padding: "0 5px",
                        margin: "0 5px",
                      }}
                    />
                    <Typography variant="body2">
                      {order.shippingAddress.address},{" "}
                      {order.shippingAddress.province},{" "}
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.country}
                    </Typography>
                  </div>
                </div>
                <div className={classes.checkout_row}>
                  {order.isDelivered ? (
                    <SimpleAlerts
                      severity="info"
                      title={`Delivered on ${order.deliveredAt}`}
                    />
                  ) : (
                    <SimpleAlerts severity="error" title="Not Delivered" />
                  )}
                </div>
              </div>
              <div className={classes.checkout}>
                <Typography
                  variant="overline"
                  gutterBottom
                  style={{ fontWeight: "400", fontSize: "18px" }}
                >
                  payment method
                </Typography>
                <div className={classes.checkout_row}>
                  <div className={classes.checkout_summary_label}>
                    <PaymentIcon
                      color="primary"
                      style={{ fontSize: "1rem", marginRight: "5px" }}
                    />
                    <Typography variant="body2">
                      <strong>Payment Method: {order.paymentMethod}</strong>
                    </Typography>
                  </div>
                </div>
                <div className={classes.checkout_row}>
                  {order.isPaid ? (
                    <SimpleAlerts
                      severity="info"
                      title={`Paid on ${order.paidAt}`}
                    />
                  ) : (
                    <SimpleAlerts severity="error" title="Not Paid" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {order.orderItems.length === 0 ? (
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
            <React.Fragment>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.title}
              >
                <Grid item xs={8}>
                  <Typography variant="body2" style={{ marginLeft: "19px" }}>
                    {order.orderItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                    ITEMS
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
              <div>
                {order.orderItems.map((item, index) => (
                  <CartItemsConfirm item={item} key={item.product} />
                ))}
              </div>
            </React.Fragment>
          )}
        </Grid>

        {/*order detail*/}
        <Grid item xs={4} className={classes.orderDetail}>
          <div className={classes.summary_section}>
            <Typography
              variant="overline"
              gutterBottom
              style={{ fontWeight: "400", fontSize: "18px" }}
            >
              order summary
            </Typography>

            <div className={classes.summary_section_content}>
              <div className={classes.checkout_summary}>
                <div className={classes.checkout_rows}>
                  <div className={classes.checkout_row}>
                    <div
                      className={classes.checkout_summary_label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Subtotal (
                      {order.orderItems.reduce(
                        (acc, item) => acc + item.qty,
                        0
                      )}{" "}
                      items)
                    </div>
                    <div className={classes.checkout_summary_value}>
                      $ {order.itemsPrice}
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div
                      className={classes.checkout_summary_label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Shipping Fee
                    </div>
                    <div className={classes.checkout_summary_value}>
                      $ {order.shippingPrice}
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div
                      className={classes.checkout_summary_label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Tax
                    </div>
                    <div className={classes.checkout_summary_value}>
                      $ {order.taxPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.checkout_order_total}>
              <div className={classes.checkout_order_row}>
                <div className={classes.checkout_order_total_title}>Total</div>
                <div className={classes.checkout_order_total_fee}>
                  $ {order.totalPrice}
                  <small className={classes.checkout_order_total_fee_tip}>
                    VAT included, where applicable
                  </small>
                </div>
              </div>
            </div>
            {error && (
              <SimpleAlerts
                title="Error"
                severity="danger"
                message={error}
              ></SimpleAlerts>
            )}
            {!order.isPaid && (
              <div>
                {loadingPay && <SimpleBackdrop />}
                {!sdkReady ? (
                  <SimpleBackdrop />
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "100%",
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  paper: {
    margin: "auto",
    width: "100%",
    maxWidth: "600px",
  },
  base: { padding: "0 8px" },
  root: {
    width: "100%",
  },
  table: {
    minWidth: 750,
  },

  orderDetail: {
    marginTop: theme.spacing(2),
  },
  location: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eff0f5",
  },
  locationIcon: { color: "var(--whiteThin)" },
  summary_section: {
    borderRadius: 4,
    marginLeft: "16px",
    padding: "16px",
    backgroundColor: "#fff !important",
  },
  title: {
    backgroundColor: "#fff",
    padding: "0.5rem 0",
    marginTop: "1rem",
    borderRadius: 4,
  },
  checkout: {
    backgroundColor: "#fff",
    padding: "16px",
    margin: "16px 0 0 0",
    borderRadius: "4px",
  },
  checkout_row: {
    display: "flex",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkout_summary_label: {
    alignItems: "center",
    display: "flex",
  },
  checkout_summary_value: {
    fontSize: 16,
    textAlign: "right",
    color: "#202020",
    letterSpacing: "-.44px",
    verticalAlign: "middle",
  },
  voucher_input: {
    marginBottom: 8,
    width: "100%",
  },

  voucher_input_inner: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
    width: "100%",
  },
  voucher_input_col_9: {
    width: "73%",
  },
  voucher_input_type: { width: "100%" },
  voucher_input_button: {
    height: "100%",
    margin: 0,
    width: "100%",
  },
  confirm_cart_button: {
    height: "2.5rem",
    margin: 0,
    width: "100%",
    textTransform: "none",
  },
  voucher_input_col_3: {
    width: "25%",
  },
  checkout_order_row: {
    display: "table",
    width: "100%",
    marginBottom: "16px",
  },
  checkout_order_total_title: {
    display: "table-cell",
    fontSize: "14px",
    color: "#202020",
    lineHeight: "16px",
  },
  checkout_order_total_fee: {
    display: "table-cell",
    fontSize: "18px",
    color: "var(--secondary)",
    textAlign: "right",
  },
  checkout_order_total_fee_tip: {
    fontSize: "12px",
    color: "#424242",
    letterSpacing: "0",
    lineHeight: "16px",
    display: "block",
    textAlign: "right",
    marginTop: "5px",
  },
}));

export default OrderPage;
