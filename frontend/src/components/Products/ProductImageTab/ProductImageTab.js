import { Avatar, IconButton } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";
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

  const handleBackTab = () => {
    if (value > 0) {
      setValue(value - 1);
    }
    if (value === 0) {
      setValue(value);
    }
  };

  const handleNextTab = () => {
    const length = colors.length - 1;

    if (value < length) {
      setValue(value + 1);
    }
    if (value === length) {
      setValue(value - length);
    }
  };

  return (
    <>
      <Box position="relative">
        <TabPanel value={value} index={value} className={styles.box}>
          <img
            alt="test avatar"
            src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
            className={styles.imgShow}
          />
        </TabPanel>
        <div className={styles.button}>
          <Box className={styles.button_flex}>
            <IconButton
              onClick={handleBackTab}
              aria-label="NavigateBeforeIcon"
              color="primary"
              disabled={value === 0}
            >
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={handleNextTab}
              aria-label="NavigateNextIcon"
              color="primary"
            >
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          </Box>
        </div>
      </Box>

      <Box m="0 0.5rem" className={styles.box1}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {colors.map((color) => (
            <Tab
              icon={
                <Avatar
                  alt="test avatar"
                  src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
                />
              }
              className={styles.tabColor}
              key={color.name}
            />
          ))}
        </Tabs>
      </Box>
    </>
    // <Grid container direction="column" justify="center">
    //   <Grid item xs={12}>
    //     <TabPanel value={value} index={value}>
    //       <img
    //         alt="test avatar"
    //         src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
    //         className={classes.imgShow}
    //       />
    //     </TabPanel>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       indicatorColor="primary"
    //       textColor="primary"
    //       variant="scrollable"
    //       scrollButtons="auto"
    //       aria-label="scrollable auto tabs example"
    //       className={classes.tabs}
    //     >
    //       {colors.map((color) => (
    //         <Tab
    //           icon={
    //             <Avatar
    //               alt="test avatar"
    //               src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
    //             />
    //           }
    //           className={classes.tabColor}
    //           key={color.name}
    //         />
    //       ))}
    //     </Tabs>
    //   </Grid>
    // </Grid>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default ProductImageTab;
