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
import { Link } from "react-router-dom";
import SeeMoreButtonMobile from "../../../Button/SeeMoreButtonMobile/SeeMoreButtonMobile";
import SimpleAlerts from "../../../UI/Alerts/Alerts";
import Product from "../../Product/Product";
import SkeletonProduct from "../../Product/Skeleton/SkeletonProduct";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 769, itemsToShow: 4 },
  { width: 960, itemsToShow: 5 },
];

const WatchStraps = (props) => {
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
              <Tab label="Watch Straps" {...a11yProps(0)} />
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
              <TabPanel value={value} index={0} className="tab-panel">
                <Link to="/watch-accessories" className="seemore">
                  <span>
                    See more <strong> watch straps</strong>
                  </span>
                </Link>

                {/* button see more on mobile */}

                <SeeMoreButtonMobile
                  titleAfterClick="watch accessories"
                  isActive={true}
                  link="/watch-accessories"
                />
                <Grid container justify="flex-start" style={{ width: "100%" }}>
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
  );
};

export default WatchStraps;

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
