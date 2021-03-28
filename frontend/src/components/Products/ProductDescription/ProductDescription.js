import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { Link } from "react-router-dom";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import styles from "./styles.module.css";

const ProductDescription = ({ product }) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="space-between"
      className={styles.background}
    >
      <Grid item xs={12} md={7}>
        <Box m="0 0.5rem">
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Box>
            <Typography variant="h6">Description</Typography>
            <Typography variant="body1">
              Thương hiệu đồng hồ Aviator đại diện cho những người trẻ nhiệt
              huyết, mạnh mẽ và máu lửa. Thiết kế tinh xảo cùng với độ bền bỉ
              rất cao luôn là những ưu điểm nổi bật giúp thương hiệu Aviator
              chiếm một chỗ đứng quan trọng trong lòng những tín đồ yêu thích
              đồng hồ.
            </Typography>
            <Box m="0.5rem 0" color="primary.main" width="fit-content">
              <Link to="/" style={{ display: "flex" }}>
                <Typography variant="body1">See more</Typography>
                <ChevronRightIcon />
              </Link>
            </Box>
          </Box>
          <Box>
            <iframe
              src="https://www.youtube.com/embed/k578BAHaZgE?start=115&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.thegioididong.com"
              frameBorder="0"
              allowFullScreen=""
              data-gtm-yt-inspected-1070012_61="true"
              id="877687752"
              data-gtm-yt-inspected-1070012_79="true"
              className={styles.iframe}
            ></iframe>
          </Box>
          <Box>
            <Typography variant="h6">
              Mẫu đồng hồ này có thiết kế tinh tế, sang trọng và nam tính, phù
              hợp cho các quý ông lịch lãm, thanh lịch
            </Typography>
            <Typography variant="body1" gutterBottom>
              Đồng hồ nam Aviator AVW8517G352 là sản phẩm của hãng đồng hồ
              Aviator nổi tiếng, đến từ nước Nga.
            </Typography>
            <img
              alt="Đồng hồ nam Aviator AVW8517G352 có kiểu dáng thanh lịch"
              data-original="https://cdn.tgdd.vn/Products/Images/7264/209724/aviator-avw6971g352-nam-1-3.jpg"
              title="Đồng hồ nam Aviator AVW8517G352 có kiểu dáng thanh lịch"
              src="https://cdn.tgdd.vn/Products/Images/7264/209724/aviator-avw6971g352-nam-1-3.jpg"
              className={styles.iframe}
            ></img>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <ProductSpecification />
      </Grid>
    </Grid>
  );
};

export default ProductDescription;
