import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import "./styles.css";

const SkeletonProduct = () => {
  return (
    <Box className="skeleton-product">
      <Skeleton
        animation="pulse"
        variant="rect"
        height={240}
        style={{ marginBottom: 4 }}
      />
      <Skeleton variant="text" animation="pulse" height={30} />
      <Skeleton
        animation="pulse"
        width="80%"
        height={20}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="pulse"
        width="60%"
        height={20}
        style={{ marginBottom: 6 }}
      />
    </Box>
  );
};

export default SkeletonProduct;
