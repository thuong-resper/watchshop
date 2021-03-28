import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useStyles } from "./styles";

const ProductPromotion = ({ product }) => {
  const classes = useStyles();
  const { promotions } = product;
  console.log(promotions);
  return (
    <Grid item xs={12} className={classes.table}>
      <Grid item xs={3}>
        Promotions
      </Grid>
      <Grid item xs={9} className={classes.promotionTagItem}>
        <div>
          {promotions.map((item) => (
            <DropdownButton
              as={ButtonGroup}
              key={item.name}
              id={`dropdown-variants-${item}`}
              variant={item.name.toLowerCase()}
              title={item.name}
              className={classes.buttonGroup}
            >
              <Dropdown.Item
                eventKey={item._id}
                as={"div"}
                className={classes.detail}
              >
                <Typography
                  variant="body2"
                  className={classes.item}
                  color="secondary"
                >
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.detail}</Typography>
              </Dropdown.Item>
            </DropdownButton>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductPromotion;
