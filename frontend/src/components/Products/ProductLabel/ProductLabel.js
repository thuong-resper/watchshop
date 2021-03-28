import React from "react";
import { useStyles } from "./styles";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { Typography } from "@material-ui/core";

const ProductLabel = () => {
  const classes = useStyles();
  return (
    <div className={classes.productLabel}>
      <div className={classes.saleButton}>
        <span>
          <LoyaltyIcon className={classes.loyaltyIcon} />
        </span>
        <Typography
          variant="button"
          display="block"
          className={classes.loyaltyIcon}
        >
          sale
        </Typography>
      </div>
    </div>
  );
};

export default ProductLabel;
