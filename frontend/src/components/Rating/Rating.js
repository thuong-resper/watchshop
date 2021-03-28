import { Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";

import styles from "./styles.module.css";

const ProductRating = ({ value, text }) => {
  return (
    <Box
      component="fieldset"
      borderColor="transparent"
      className={styles.rating}
    >
      <Rating
        name="read-only"
        value={value ? value : 0}
        readOnly
        size="small"
        precision={0.5}
        className={styles.start}
      />
      <Typography
        variant="body2"
        color="textSecondary"
        className={styles.review}
      >
        {text && text}
      </Typography>
    </Box>
  );
};

export default ProductRating;
