import { Avatar, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import classes from "./styles.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ProductImageTab = ({ product }) => {
  const { colors } = product;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item xs={2}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {colors.map((color) => (
            <Tab
              icon={
                <Avatar
                  alt="test avatar"
                  src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
                />
              }
              className={classes.tabColor}
              key={color.name}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={10}>
        <TabPanel value={value} index={value}>
          <img
            alt="test avatar"
            src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
            className={classes.imgShow}
          />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default ProductImageTab;
