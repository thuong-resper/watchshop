import { Grid, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { useState } from "react";
import { useStyles } from "./styles";
import styles from "./styles.module.css";

const SelectQty = (props) => {
  const classes = useStyles();
  const { countInStock } = props.product;

  const max = countInStock;

  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    console.log(e.target.value);
    const base = Math.abs(e.target.value);

    if (base >= max) {
      setCount(count - count + parseInt(max));
    } else {
      setCount(count - count + parseInt(base));
    }
  };
  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Grid item xs={12} className={classes.table}>
      <Grid item xs={3}>
        Quantity
      </Grid>
      <Grid item xs={9} className={classes.root}>
        <IconButton onClick={decrement} disabled={count === 1 || count === 0}>
          <RemoveIcon />
        </IconButton>
        <TextField
          type="number"
          value={count}
          className={styles.inputField}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <IconButton onClick={increment} disabled={count === max}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SelectQty;
