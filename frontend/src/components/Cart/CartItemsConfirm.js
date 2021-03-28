import { Box, Button, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeFromCart } from "../../store/actions/cartActions";
import AlertDialogSlide from "../UI/Modal/CustomModal";
import { useStyles } from "./styles";
import styles from "./styles.module.css";

const CartItemsConfirm = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { item } = props;

  console.log(item);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    history.push("/cart");
  };

  return (
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
                  -((item.priceCompare - item.price) / item.priceCompare) * 100
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
              iconAnchor={<DeleteOutlineIcon className={styles.buttonDelete} />}
              component={
                <Typography>Are you sure want to delete {item.name}</Typography>
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
        Qty: <strong>{item.qty}</strong>
      </Grid>
    </Grid>

    // <div
    //   style={{
    //     backgroundColor: "#fff",
    //     marginTop: "1rem",
    //     alignItems: "center",
    //     borderRadius: "4px",
    //   }}
    // >
    //   <div className={styles.contentItem}>
    //     <Grid item xs={2} className={styles.Img}>
    //       <Link to={`/product/${item.product}`}>
    //         <img alt="d" className={classes.media} src={item.image} />
    //       </Link>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Typography>
    //         <Link to={`/product/${item.product}`}>{item.name}</Link>
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={2}>
    //       <div className={classes.price}>
    //         <Typography variant="h6" color="secondary">
    //           <abbr
    //             style={{
    //               textDecoration: "underline dotted",
    //             }}
    //           >
    //             USD
    //           </abbr>
    //           {item.price}
    //         </Typography>
    //         <Typography variant="body2">
    //           <span
    //             style={{
    //               display: "flex",
    //               flexDirection: "column",
    //             }}
    //           >
    //             <span
    //               style={{
    //                 display: "inline-block",
    //                 verticalAlign: "middle",
    //                 fontSize: "12px",
    //                 textDecoration: "line-through",
    //                 margin: "5px 0",
    //                 color: "var(--defaultTextColor)",
    //               }}
    //             >
    //               {item.priceCompare} USD
    //             </span>
    //             <i>
    //               {(
    //                 -((item.priceCompare - item.price) / item.priceCompare) *
    //                 100
    //               ).toFixed() + "%"}
    //             </i>
    //           </span>
    //         </Typography>
    //         <div className={classes.iconButton}>
    //           <AlertDialogSlide
    //             title="Info"
    //             iconAnchor={<DeleteOutlineIcon />}
    //             component={
    //               <Typography>
    //                 Are you sure want to delete {item.name}
    //               </Typography>
    //             }
    //             confirmButton={
    //               <div>
    //                 <Button
    //                   color="primary"
    //                   onClick={() => handleDelete(item.product)}
    //                 >
    //                   Agree
    //                 </Button>
    //               </div>
    //             }
    //           />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={2}>
    //       <Typography
    //         component="h6"
    //         variant="subtitle1"
    //         style={{ marginLeft: "3px" }}
    //       >
    //         Qty: <strong>{item.qty}</strong>
    //       </Typography>
    //     </Grid>
    //   </div>
    // </div>
  );
};

export default CartItemsConfirm;
