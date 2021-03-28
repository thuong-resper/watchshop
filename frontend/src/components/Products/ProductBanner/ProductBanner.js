import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import "./styles.css";

const ProductBanner = ({ product }) => {
  const classes = useStyles();

  return (
    <div className="banner-item">
      <div className="">
        <Link className="" to="/">
          <img
            src="https://cdn.tgdd.vn/2021/01/banner/1200-350-1200x350-26.png"
            alt="đh"
            className="img-banner"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductBanner;
