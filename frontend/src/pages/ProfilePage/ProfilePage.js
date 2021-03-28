import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { listMyOrders } from "../../store/actions/orderActions";
import ClearIcon from "@material-ui/icons/Clear";
import {
  getUserDetails,
  updateUserProfile,
} from "../../store/actions/userActions";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ProfilePage = ({ location, history }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  console.log(orders);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item xs={3} className={classes.bg} spacing={3}>
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>
        {message && (
          <SimpleAlerts
            severity="error"
            title="Error"
            message={message}
          ></SimpleAlerts>
        )}
        {error && (
          <SimpleAlerts severity="error" title="Error" message={error} />
        )}
        {success && (
          <SimpleAlerts
            severity="info"
            title="Success"
            message={"Profile Updated"}
          />
        )}
        {loading ? (
          <div className={classes.skeleton}>
            <div className={classes.skeletonRow}>
              <Skeleton
                variant="text"
                animation="pulse"
                height={40}
                width="100%"
              />
            </div>
            <div className={classes.skeletonRow}>
              <Skeleton
                variant="text"
                animation="pulse"
                height={40}
                width="100%"
              />
            </div>
            <div className={classes.skeletonRow}>
              <Skeleton
                variant="text"
                animation="pulse"
                height={40}
                width="100%"
              />
            </div>
            <div className={classes.skeletonRow}>
              <Skeleton
                variant="text"
                animation="pulse"
                height={40}
                width="100%"
              />
            </div>
          </div>
        ) : (
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
              value={name}
              size="small"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={email}
              size="small"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              size="small"
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Enter Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              size="small"
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <Typography
                component="h1"
                variant="body1"
                className={classes.textLow}
              >
                <b>Update</b>
              </Typography>
            </Button>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            ></Grid>
          </form>
        )}
      </Grid>
      <Grid item xs={9}>
        <div className={classes.wrapper}>
          <Typography variant="h5" style={{ marginBottom: "10px" }}>
            My Orders
          </Typography>
          <div className={classes.order}>
            {loadingOrders ? (
              <div className={classes.skeleton}>
                <div className={classes.skeletonRow}>
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="40%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                </div>
                <div className={classes.skeletonRow}>
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="40%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                </div>
                <div className={classes.skeletonRow}>
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="40%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    height={40}
                    width="15%"
                  />
                </div>
              </div>
            ) : errorOrders ? (
              <SimpleAlerts severity="error" message={errorOrders} />
            ) : (
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell width="25%">
                        <Typography
                          variant="overline"
                          style={{ fontWeight: "500" }}
                        >
                          Order #
                        </Typography>
                      </TableCell>
                      <TableCell width="15%">
                        <Typography
                          variant="overline"
                          style={{ fontWeight: "500" }}
                        >
                          Placed On
                        </Typography>
                      </TableCell>
                      <TableCell width="15%" align="right">
                        <Typography
                          variant="overline"
                          style={{ fontWeight: "500" }}
                        >
                          Total
                        </Typography>
                      </TableCell>
                      <TableCell align="center" width="15%">
                        <Typography
                          variant="overline"
                          style={{ fontWeight: "500" }}
                        >
                          Paid
                        </Typography>
                      </TableCell>
                      <TableCell align="center" width="15%">
                        <Typography
                          variant="overline"
                          style={{ fontWeight: "500" }}
                        >
                          Delivered
                        </Typography>
                      </TableCell>
                      <TableCell align="center" width="15%"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell component="th" scope="row">
                          {order._id}
                        </TableCell>
                        <TableCell>
                          {order.createdAt.substring(0, 10)}
                        </TableCell>
                        <TableCell align="right">
                          $&nbsp;{order.totalPrice}
                        </TableCell>
                        <TableCell align="center">
                          {order.isPaid ? (
                            order.paidAt.substring(0, 10)
                          ) : (
                            <ClearIcon color="secondary" />
                          )}
                        </TableCell>
                        <TableCell align="center">
                          {order.isDelivered ? (
                            order.deliverAt.substring(0, 10)
                          ) : (
                            <ClearIcon color="secondary" />
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <Link to={`/order/${order._id}`}>
                            <Button color="primary">Details</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textLow: {
    textTransform: "none",
  },
  bg: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "16px",
  },
  wrapper: {
    margin: "0 0 0 16px",
    padding: "16px",
    backgroundColor: "#fff",
    borderRadius: "4px",
  },
  skeletonRow: { display: "flex", justifyContent: "space-between" },
}));

export default ProfilePage;
