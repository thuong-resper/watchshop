import { Badge, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import "./styles.css";

const ProductRoute = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.media}>
      <Grid item xs={3}>
        <Link to="/fashion-watches" className={classes.link}>
          <div className="kind-item">
            <img
              src="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/desk-donghothoitrang.png"
              alt="dd"
              className="img-kind"
            />
            <Typography className="kind-name" variant="button" display="block">
              Fashion Watches
            </Typography>
          </div>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/smart-watches" className={classes.link}>
          <div className="kind-item">
            <img
              src="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/desk-donghothongminh.png"
              alt="dd"
              className="img-kind"
            />
            <Typography className="kind-name" variant="button" display="block">
              smart watches
            </Typography>
          </div>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/child-watches" className={classes.link}>
          <div className="kind-item">
            <img
              src="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/dinh-vi-tre-em.png"
              alt="dd"
              className="img-kind"
            />
            <Typography className="kind-name" variant="button" display="block">
              for child
            </Typography>
          </div>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/watch-straps" className={classes.link}>
          <div className="kind-item">
            <img
              src="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/watch-accessory.png"
              alt="dd"
              className="img-kind"
            />
            <span className="news-Fwatch">New</span>
            <Typography
              className="kind-name badge-new"
              variant="button"
              display="block"
            >
              watch straps
            </Typography>
          </div>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ProductRoute;
