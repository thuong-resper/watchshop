import { Avatar, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import { useStyles } from "./styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const ProductColor = ({ product }) => {
  const { colors } = product;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12} className={classes.table}>
      <Grid item xs={3}>
        Colors
      </Grid>
      <Grid item xs={9} className={classes.promotionTagItem}>
        <div className={classes.root}>
          <TabPanel value={value} index={value}>
            {colors[value].name}
          </TabPanel>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.muiTabRoot}
          >
            {colors.map((color) => (
              <Tab
                icon={<Avatar alt="test avatar" src="/logo192.png" />}
                className={classes.tabColor}
                key={color.name}
              />
            ))}
          </Tabs>
        </div>
      </Grid>
    </Grid>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default ProductColor;
