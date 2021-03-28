import { Box, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "../../Rating/Rating";
import SkeletonProduct from "./Skeleton/SkeletonProduct";
import "./styles.css";

const Product = (props) => {
  const { product, loading } = props;

  return (
    <Grid item className="product-item">
      {loading ? (
        <SkeletonProduct />
      ) : (
        <li className="one-item">
          <div className="item">
            <Link to={`/product/${product._id}`} className="item-link">
              <div className="height-label"></div>
              <img
                data-original="https://cdn.tgdd.vn/Products/Images/7264/200840/citizen-an3610-55l-xanh-400x400.jpg"
                className="item-img"
                alt={product.name}
                src={product.image}
                // src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
              />
              <h3 className="item-name">{product.name}</h3>
              <div className="pros">
                <span className="dotted lower">30 mm</span>
              </div>
              <div className="price">
                <strong>{product.price}₫</strong>
                <span>{product.priceCompare}₫</span>
                <i>
                  {(
                    -(
                      (product.priceCompare - product.price) /
                      product.priceCompare
                    ) * 100
                  ).toFixed() + "%"}
                </i>
              </div>
              <Box m="5px 10px 0">
                <ProductRating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Box>
            </Link>
          </div>
        </li>
      )}
    </Grid>
  );
};

export default Product;
