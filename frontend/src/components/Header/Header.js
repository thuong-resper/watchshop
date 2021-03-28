import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";
import { logout } from "../../store/actions/userActions";
import { useStyles } from "./styles";

const Header = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
    >
      <MenuItem onClick={(e) => router.push("/profile")}>Profile</MenuItem>
      <MenuItem onClick={logoutHandler}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      onClick={handleMobileMenuClose}
    >
      <Link to="/profile" className={classes.link}>
        <Typography variant="body2" className={classes.spacing}>
          You Liked ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </Typography>
      </Link>
      <Link to="/cart" className={classes.link}>
        <Typography variant="body2" className={classes.spacing}>
          Cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </Typography>
      </Link>
      {userInfo ? (
        <div>
          <Link to="/profile" className={classes.link}>
            <Typography variant="body2" className={classes.spacing}>
              Profile
            </Typography>
          </Link>
          <Typography
            variant="body2"
            className={classes.spacing}
            onClick={logoutHandler}
          >
            Logout
          </Typography>
        </div>
      ) : null}
    </Menu>
  );

  let showUserIcon;
  if (userInfo) {
    showUserIcon = (
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        startIcon={<AccountCircle />}
        className={classes.button}
      >
        {userInfo.name}
      </Button>
    );
  } else {
    showUserIcon = (
      <Link to="/login" className={classes.link}>
        <Button
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
          startIcon={<AccountCircle />}
          className={classes.button}
        >
          Sign in
        </Button>
      </Link>
    );
  }

  return (
    <div className={classes.grow}>
      {/*Section desktop*/}
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Typography
            onClick={(e) => router.push("/")}
            className={classes.title}
            variant="h6"
            noWrap
          >
            WatchShop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              // onClick={(e) => router.push("/cart")}
              aria-label="show item that you liked"
              color="inherit"
              className={classes.button}
              startIcon={
                <Badge badgeContent={5} color="secondary">
                  <FavoriteBorderIcon />
                </Badge>
              }
            >
              Liked
            </Button>
            <Button
              onClick={(e) => router.push("/cart")}
              aria-label="show item quantity in cart"
              color="inherit"
              className={classes.button}
              startIcon={
                <Badge
                  badgeContent={cartItems.reduce(
                    (acc, item) => acc + item.qty,
                    0
                  )}
                  color="secondary"
                >
                  <ShoppingBasketIcon />
                </Badge>
              }
            >
              Cart
            </Button>
            {showUserIcon}
          </div>

          {/*Section mobile*/}

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default withRouter(Header);
