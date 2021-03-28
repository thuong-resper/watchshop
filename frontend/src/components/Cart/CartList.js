import { Box, Button, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";
import AlertDialogSlide from "../UI/Modal/CustomModal";
import { useStyles } from "./styles";
import styles from "./styles.module.css";

const CartList = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { item } = props;
  const { countInStock } = item;

  const handleChange = (e) => {
    if (Math.abs(e.target.value) > countInStock) {
      e.target.value = countInStock;
      dispatch(addToCart(item.product, Number(e.target.value)));
    }
    dispatch(addToCart(item.product, Number(e.target.value)));
  };

  const increment = () => {
    dispatch(addToCart(item.product, item.qty + 1));
    history.push("/cart");
  };
  const decrement = (item) => {
    dispatch(addToCart(item.product, item.qty - 1));
    history.push("/cart");
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    history.push("/cart");
  };

  return (
    <div>
      <Grid item xs={12} className={styles.ShopName}>
        <Typography variant="body2" className={styles.verifyTag}>
          Verify
        </Typography>
        <Typography>{item.name} </Typography>
        <KeyboardArrowRightIcon color="disabled" />
      </Grid>
      <Grid container justify="center" className={styles.contentItem}>
        <Grid item xs={3} sm={2} className={styles.Img}>
          <Link to={`/product/${item.product}`}>
            <img alt="d" className={styles.media} src={item.image} />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} className={classes.ProductName}>
          <Box pl="0.5rem">
            <Typography>
              <Link to={`/product/${item.product}`}>{item.name}</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} sm={2} className={classes.ProductPrice}>
          <div className={styles.price}>
            <Typography variant="h6" color="secondary">
              <abbr
                style={{
                  textDecoration: "underline dotted",
                }}
              >
                USD
              </abbr>
              {item.price}
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    fontSize: "12px",
                    textDecoration: "line-through",
                    margin: "5px 0",
                    color: "var(--defaultTextColor)",
                  }}
                >
                  {item.priceCompare} USD
                </span>
                <i>
                  {(
                    -((item.priceCompare - item.price) / item.priceCompare) *
                    100
                  ).toFixed() + "%"}
                </i>
              </span>
            </Typography>
            <div className={styles.button}>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <AlertDialogSlide
                title="Message"
                iconAnchor={<DeleteOutlineIcon />}
                component={
                  <Typography>
                    Are you sure want to delete {item.name}
                  </Typography>
                }
                confirmButton={
                  <div>
                    <Button
                      color="primary"
                      onClick={() => handleDelete(item.product)}
                    >
                      Agree
                    </Button>
                  </div>
                }
                disagreeButton={true}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={2} className={styles.Qty}>
          <div className={styles.IconButton}>
            <RemoveIcon
              className={clsx(styles.IconButtonItem, {
                [styles.IconDisabled]: item.qty <= 1,
              })}
              onClick={item.qty <= 1 ? null : () => decrement(item)}
            />
          </div>
          <input
            className={styles.Input}
            type="number"
            value={item.qty}
            onChange={(e) => handleChange(e)}
          />
          <div className={styles.IconButton}>
            <AddIcon
              className={clsx(styles.IconButtonItem, {
                [styles.IconDisabled]: item.qty >= countInStock,
              })}
              onClick={item.qty < countInStock ? () => increment(item) : null}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartList;
