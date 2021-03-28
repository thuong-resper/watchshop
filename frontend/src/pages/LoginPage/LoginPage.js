import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { login } from "../../store/actions/userActions";
import { styles } from "./styles";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  pageCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "100%",
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
    // color: theme.color.link,
  },
  textLow: {
    textTransform: "none",
  },
  iconGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "10rem",
  },
  iconButton: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    width: "45px",
    height: "45px",
    zIndex: "99",
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    "&:hover": {
      boxShadow: "0 0 0 0.05rem #3f51b5",
    },
  },
  iconGoogle: {
    color: "#DB4437",
  },
  iconFacebook: {
    color: "#4267B2",
  },
  iconTwitter: {
    color: "#1DA1F2",
  },
  signUpGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "10.5rem",
  },
  signUp: {
    fontWeight: "500",
    color: "#f50057;",
  },
}));

const LoginPage = ({ location, history }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Grid container className="root">
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.pageCenter}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <b>Sign in</b>
          </Typography>
          {error && (
            <SimpleAlerts
              severity="error"
              title="Error"
              message={error}
            ></SimpleAlerts>
          )}
          {loading && <SimpleBackdrop />}
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={<Typography variant="body2">Remember Me</Typography>}
                />
              </Grid>
              <Grid item>
                <Link to="/signup" className={classes.link}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
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
                <b>Sign in</b>
              </Typography>
            </Button>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Box mt={3}>
                <Typography
                  variant="button"
                  gutterBottom
                  className={classes.textLow}
                >
                  Sign in with
                </Typography>
              </Box>
              <Box mt={3} className={classes.iconGroup}>
                <Link href="#" variant="body2" to="/signup">
                  <IconButton
                    aria-label="google"
                    className={classes.iconButton}
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={classes.iconFacebook}
                      size="xs"
                    ></FontAwesomeIcon>
                  </IconButton>
                </Link>
                <Link href="#" variant="body2" to="/signup">
                  <IconButton
                    aria-label="google"
                    className={classes.iconButton}
                  >
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className={classes.iconGoogle}
                      size="xs"
                    ></FontAwesomeIcon>
                  </IconButton>
                </Link>
                <Link href="#" variant="body2" to="/signup">
                  <IconButton
                    aria-label="google"
                    className={classes.iconButton}
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={classes.iconTwitter}
                      size="xs"
                    ></FontAwesomeIcon>
                  </IconButton>
                </Link>
              </Box>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Box mt={3} className={classes.signUpGroup}>
                <Typography variant="body1" gutterBottom>
                  {"Not a member?"}
                </Typography>
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                  className={classes.link}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.signUp}
                  >
                    Sign up
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

LoginPage.propTypes = {
  classes: PropTypes.shape({
    avatar: PropTypes.any,
    form: PropTypes.any,
    iconButton: PropTypes.any,
    iconFacebook: PropTypes.any,
    iconGoogle: PropTypes.any,
    iconGroup: PropTypes.any,
    iconTwitter: PropTypes.any,
    image: PropTypes.any,
    link: PropTypes.any,
    pageCenter: PropTypes.any,
    paper: PropTypes.any,
    root: PropTypes.any,
    signUp: PropTypes.any,
    signUpGroup: PropTypes.any,
    submit: PropTypes.any,
    textLow: PropTypes.any,
  }),
};

export default withStyles(styles)(LoginPage);
