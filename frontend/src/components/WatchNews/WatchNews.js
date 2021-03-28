import { Grid, Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Product from "../Products/Product/Product";
import { AntTab, AntTabs } from "../Tab/Tab";
import SimpleAlerts from "../UI/Alerts/Alerts";
import { NewsItem } from "./NewsItem/NewsItem";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 769, itemsToShow: 4 },
  { width: 960, itemsToShow: 4 },
];

const WatchNews = (props) => {
  const classes = useStyles();

  const { loading, error, products } = props;

  const [value, setValue] = useState(0);
  // const [spinner, setSpinner] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // set show skeleton when switching tabs (value change)
  // useEffect(() => {
  //   setTimeout(() => setSpinner(false), 1000);
  //   return () => {
  //     return setSpinner(true);
  //   };
  // }, [value]);

  return (
    <div>
      {loading ? (
        <div className={classes.skeleton}>
          <Skeleton animation="pulse" variant="rect" height={300} />
          <Skeleton variant="text" animation="pulse" height={30} width="80%" />
          <Skeleton
            animation="pulse"
            width="60%"
            height={20}
            style={{ marginBottom: 20 }}
          />
        </div>
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
              <AntTab label="News" {...a11yProps(0)} />
              <AntTab label="Guide" {...a11yProps(1)} />
              {/* <AntTab label="Guide" {...a11yProps(2)} /> */}
            </AntTabs>
          </AppBar>
          <div>
            <TabPanel
              value={value}
              index={0}
              className="tab-panel tab-panel-footer"
            >
              <NewsItem class="video-news" />
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              className="tab-panel tab-panel-footer"
            >
              <NewsItem />
            </TabPanel>
            {/* <TabPanel value={value} index={2} className="tab-panel"></TabPanel> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchNews;

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
    position: "absolute",
    top: "15px",
    right: "3px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  videoBackground: {
    position: "relative",
    width: "auto",
    maxWidth: "100%",
    display: "block",
    cssFloat: "left",
    padding: "10px",
  },
  PlayArrowIcon: {
    position: "absolute",
  },
  skeleton: {
    height: "407px",
    marginTop: "20px",
    backgroundColor: "#fff",
  },
}));
