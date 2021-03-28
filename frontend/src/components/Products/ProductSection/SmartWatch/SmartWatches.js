import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import SeeMoreButtonMobile from "../../../Button/SeeMoreButtonMobile/SeeMoreButtonMobile";
import { AntTab, AntTabs } from "../../../Tab/Tab";
import SimpleAlerts from "../../../UI/Alerts/Alerts";
import Product from "../../Product/Product";
import SkeletonProduct from "../../Product/Skeleton/SkeletonProduct";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 769, itemsToShow: 4 },
  { width: 960, itemsToShow: 4 },
];

const SmartWatches = (props) => {
  const classes = useStyles();

  const { loading, error, products } = props;

  const [value, setValue] = useState(0);
  const [spinner, setSpinner] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // set show skeleton when switching tabs (value change)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
    return () => {
      return setSpinner(true);
    };
  }, [value]);

  return (
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
              <Grid item key={index} className="item-skeleton item-skeleton-4">
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
            <AntTabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <AntTab label="Apple" {...a11yProps(0)} />
              <AntTab label="Samsung" {...a11yProps(1)} />
              <AntTab label="Xiaomi" {...a11yProps(2)} />
              <AntTab label="Huawei" {...a11yProps(3)} />
              <AntTab label="Oppo" {...a11yProps(4)} />
            </AntTabs>
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
                  <Grid
                    key={index}
                    item
                    className="item-skeleton item-skeleton-4"
                  >
                    <Box mt={3}>
                      <SkeletonProduct />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : (
            <div>
              <TabPanel value={value} index={0} className="tab-panel">
                <Link to="/apple-watches" className={classes.link}>
                  <span
                    className="seemore"
                    style={{
                      top: "0",
                      lineHeight: "3rem",
                      backgroundColor: "#fff",
                    }}
                  >
                    <strong>Apple watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
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
                <SeeMoreButtonMobile
                  titleAfterClick="Apple watches"
                  isActive={true}
                  link="/apple-watches"
                />
              </TabPanel>
              <TabPanel value={value} index={1} className="tab-panel">
                <Link to="/samsung-watches" className={classes.link}>
                  <span
                    className="seemore"
                    style={{ top: "0", lineHeight: "3rem" }}
                  >
                    <strong>Samsung watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
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

                <SeeMoreButtonMobile
                  titleAfterClick="Samsung watches"
                  isActive={true}
                  link="/samsung-watches"
                />
              </TabPanel>
              <TabPanel value={value} index={2} className="tab-panel">
                <Link to="/xiaomi-watches" className={classes.link}>
                  <span
                    className="seemore"
                    style={{ top: "0", lineHeight: "3rem" }}
                  >
                    <strong>Xiaomi watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
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
                <SeeMoreButtonMobile
                  titleAfterClick="Xiaomi watches"
                  isActive={true}
                  link="/xiaomi-watches"
                />
              </TabPanel>
              <TabPanel value={value} index={3} className="tab-panel">
                <Link to="/huawei-watches" className={classes.link}>
                  <span
                    className="seemore"
                    style={{ top: "0", lineHeight: "3rem" }}
                  >
                    <strong>Huawei watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
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

                <SeeMoreButtonMobile
                  titleAfterClick="Huawei watches"
                  isActive={true}
                  link="/huawei-watches"
                />
              </TabPanel>
              <TabPanel value={value} index={4} className="tab-panel">
                <Link to="/oppo-watches" className={classes.link}>
                  <span
                    className="seemore"
                    style={{ top: "0", lineHeight: "3rem" }}
                  >
                    <strong>Oppo watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
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
                <SeeMoreButtonMobile
                  titleAfterClick="Oppo watches"
                  isActive={true}
                  link="/oppo-watches"
                />
              </TabPanel>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SmartWatches;

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
  link: {
    textDecoration: "none",
    color: "var(--primary)",
    top: "15px",
    right: "3px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  skeleton: {
    height: "407px",
    marginTop: "20px",
    backgroundColor: "#fff",
  },
}));
