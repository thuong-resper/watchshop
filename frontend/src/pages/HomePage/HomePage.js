import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SeeMoreButtonMobile from "../../components/Button/SeeMoreButtonMobile/SeeMoreButtonMobile";
import Product from "../../components/Products/Product/Product";
import SkeletonProduct from "../../components/Products/Product/Skeleton/SkeletonProduct";
import ProductBanner from "../../components/Products/ProductBanner/ProductBanner";
import ProductRoute from "../../components/Products/ProductKind/ProductRoute";
import ProductMan from "../../components/Products/ProductSection/ProductMan/ProductMan";
import SmartWatches from "../../components/Products/ProductSection/SmartWatch/SmartWatches";
import WatchStraps from "../../components/Products/ProductSection/WatchStraps/WatchStraps";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import WatchNews from "../../components/WatchNews/WatchNews";
import { listProducts } from "../../store/actions/productActions";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 10, enableSwipe: false },
  { width: 601, itemsToShow: 3, enableSwipe: true },
  { width: 769, itemsToShow: 5, enableSwipe: false },
  { width: 960, itemsToShow: 5, enableSwipe: false },
];

const HomePage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //select the part of state (products list)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  console.log(products);

  const [value, setValue] = useState(0);

  const [spinner, setSpinner] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isActive, setActive] = useState(false);
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleClass1 = () => {
    setActive1(!isActive1);
  };
  const toggleClass2 = () => {
    setActive2(!isActive2);
  };

  // set show skeleton when switching tabs (value change)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
    return () => {
      return setSpinner(true);
    };
  }, [value]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={classes.banner}>
      <Carousel pagination={false}>
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
      </Carousel>
      <ProductRoute />
      {/*top ten*/}
      <div className="headingtop"></div>
      <div className="skeleton-p">
        {loading ? (
          <Grid
            container
            spacing={1}
            direction="row"
            style={{ maxHeight: "46rem" }}
          >
            <div style={{ width: "100%", margin: "10px 0 10px 4px" }}>
              <Grid container direction="row" wrap="nowrap">
                {[...Array(3)].map((item, index) => (
                  <Grid item key={index}>
                    <Box mr={1}>
                      <Skeleton
                        animation="pulse"
                        variant="rect"
                        height={40}
                        width={170}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
            <Grid container direction="row" spacing={1}>
              {[...Array(5)].map((item, index) => (
                <Grid item key={index} className="item-skeleton">
                  <SkeletonProduct />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : error ? (
          <SimpleAlerts severity="error" message={error} />
        ) : (
          <div className="tab">
            <AppBar position="static" className="app-bar">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion Watches" {...a11yProps(0)} />
                <Tab label="Smart Watches" {...a11yProps(1)} />
                <Tab label="Watch Straps" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            {spinner ? (
              <Grid
                container
                spacing={1}
                direction="row"
                style={{ maxHeight: "46rem" }}
              >
                <Grid container direction="row" spacing={1}>
                  {[...Array(5)].map((item, index) => (
                    <Grid key={index} item className="item-skeleton">
                      <Box mt={3}>
                        <SkeletonProduct />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ) : (
              <div>
                <TabPanel
                  value={value}
                  index={0}
                  className={
                    isActive ? "skeleton-p-hide tab-panel" : "tab-panel"
                  }
                >
                  <Link to="/fashion-watches" className="seemore">
                    <span>
                      See more <strong> fashion watches</strong>
                    </span>
                  </Link>

                  {/* button see more on mobile */}

                  <SeeMoreButtonMobile
                    title="fashion watches selling"
                    titleAfterClick="fashion watches"
                    isActive={isActive}
                    toggleClass={() => toggleClass(value)}
                    link="/fashion-watches"
                  />
                  <Grid
                    container
                    justify="flex-start"
                    style={{ width: "100%" }}
                  >
                    <Carousel
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={false}
                    >
                      {products.map((product) => (
                        <Product
                          product={product}
                          key={product._id}
                          loading={loading}
                        />
                      ))}
                    </Carousel>
                  </Grid>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={1}
                  className={
                    isActive1 ? "skeleton-p-hide tab-panel" : "tab-panel"
                  }
                >
                  <Link to="/smart-watches" className={classes.link}>
                    <span className="seemore">
                      See more <strong> smart watches</strong>
                    </span>
                  </Link>

                  {/* button see more on mobile */}

                  <SeeMoreButtonMobile
                    title="smart watches selling"
                    titleAfterClick="smart watches"
                    isActive={isActive1}
                    toggleClass={toggleClass1}
                    link="/smart-watches"
                  />
                  <Grid
                    container
                    justify="flex-start"
                    style={{ width: "100%" }}
                  >
                    <Carousel
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={false}
                    >
                      {products.map((product) => (
                        <Product
                          product={product}
                          key={product._id}
                          loading={loading}
                        />
                      ))}
                    </Carousel>
                  </Grid>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={2}
                  className={
                    isActive2 ? "skeleton-p-hide tab-panel" : "tab-panel"
                  }
                >
                  <Link to="/watch-straps" className={classes.link}>
                    <span className="seemore">
                      See more <strong> watch straps</strong>
                    </span>
                  </Link>
                  {/* button see more on mobile */}

                  <SeeMoreButtonMobile
                    title="watch straps selling"
                    titleAfterClick="watch straps"
                    isActive={isActive2}
                    toggleClass={toggleClass2}
                    link="/watch-straps"
                  />
                  <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    style={{ width: "100%" }}
                  >
                    <Carousel
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={false}
                    >
                      {products.map((product) => (
                        <Product
                          product={product}
                          key={product._id}
                          loading={loading}
                        />
                      ))}
                    </Carousel>
                  </Grid>
                </TabPanel>
              </div>
            )}
          </div>
        )}
      </div>
      {/*promotion*/}
      <Grid container justify="space-between" spacing={3} className="top-15">
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/fashion-watches">
            <img
              alt="fashion-watch"
              src="https://cdn.tgdd.vn/2021/02/banner/tet380x215-380x165.jpg"
              className={classes.img}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/fashion-watches">
            <img
              alt="smart-watch"
              src="https://cdn.tgdd.vn/2021/02/banner/380x165-380x165.jpg"
              className={classes.img}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/watch-strap">
            <img
              alt="fashion-watch"
              src="https://cdn.tgdd.vn/2021/01/banner/s6demdesk-380x165.png"
              className={classes.img}
            />
          </Link>
        </Grid>
      </Grid>
      {/* man watch */}
      <Grid container justify="space-between" className="top-15 rp1">
        <Grid item xs className="m-heading" sm={12}>
          <Link to="">
            <img
              data-original="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/desk-donghothoitrangbanner.png"
              src="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/desk-donghothoitrangbanner.png"
              className="img-m-heading img-m-heading-dk"
            />

            <img
              data-original="https://cdn.tgdd.vn/v2015/Content/mobile/images/V5/category/mb-bannerdonghothoitrang.png"
              src="https://cdn.tgdd.vn/v2015/Content/mobile/images/V5/category/mb-bannerdonghothoitrang.png"
              className="img-m-heading img-m-heading-mb"
            />
          </Link>
        </Grid>
        <Grid item xs className="m-content">
          <ProductMan products={products} loading={loading} error={error} />
        </Grid>
      </Grid>
      {/* smart watch */}
      <Grid container justify="space-between" className="top-15 rp1">
        <Grid item xs className="m-heading" sm={12}>
          <Link to="">
            <img
              className="img-m-heading img-m-heading-dk"
              data-original="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/desk-donghothongminhbanner.png"
              src="https://cdn.tgdd.vn/v2015/Content/desktop/images/V5/category/desk-donghothongminhbanner.png"
            />
            <img
              data-original="https://cdn.tgdd.vn/v2015/Content/mobile/images/V5/category/mb-donghothongminhbanner.png"
              src="https://cdn.tgdd.vn/v2015/Content/mobile/images/V5/category/mb-donghothongminhbanner.png"
              className="img-m-heading img-m-heading-mb"
            />
          </Link>
        </Grid>
        <Grid item xs className="m-content">
          <SmartWatches products={products} loading={loading} error={error} />
        </Grid>
      </Grid>
      {/*accessories */}
      <div
        className="accessories"
        style={{
          backgroundImage:
            "url(https://cdn.tgdd.vn/v2015/Content/event/20-10/title-dayda-min.png)",
          height: "67px",
          lineHeight: "67px",
          position: "relative",
        }}
      ></div>
      <WatchStraps products={products} loading={loading} error={error} />
      {/* watch news*/}
      <div className="top-15">
        <WatchNews products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default HomePage;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  skeleton: {
    height: "478px",
    marginTop: "20px",
    backgroundColor: "#fff",
  },
}));
