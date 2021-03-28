export const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1253&q=80)",
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  signUp: {
    fontWeight: "500",
    color: "#f50057;",
    paddingLeft: "0.3rem",
  },
  aa: {
    [theme.breakpoints.down("sm")]: {
      size: "small",
    },
  },
});
