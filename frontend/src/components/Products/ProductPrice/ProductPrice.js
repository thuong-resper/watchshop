import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const ProductPrice = (props) => {
  const classes = useStyles();
  console.log(props);
  const { price, sale, priceCompare } = props.product;
  return (
    <Grid item xs={12} className={classes.priceDetail}>
      <Typography variant="h4" color="secondary">
        <abbr style={{ textDecoration: "underline dotted" }}>USD</abbr>
        {price}
      </Typography>
      <Typography variant="body2">
        {sale ? (
          <span>
            <span className={classes.priceCompare}>${priceCompare}</span>
            <span>
              {(-(1 - (price - priceCompare) / price) * 100).toFixed() + "%"}
            </span>
          </span>
        ) : null}
      </Typography>
    </Grid>
  );
};

export default ProductPrice;
