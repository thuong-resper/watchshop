import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  tableTh: { width: 130, padding: "16px 0 16px 0" },


  priceCompare: { marginRight: theme.spacing(1) },
  price: { display: "flex", flexDirection: "column" },
  iconButton: { display: "flex" },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  oneCartItem: {
    margin: "20px 0",
    "&td": {
      borderBottom: "none",
    },
  },

  //new

  content: {
    display: "flex",
    justifyContent: "space-between",
    // width: "80%",
  },
  Qty: {
    display: "flex",
    height: 40,
    // alignItems: "center",
  },
  Input: {
    width: 40,
    maxHeight: 30,
    // text
  },
  IconButton: {
    lineHeight: 40,
    maxHeight: 30,
    height: "100%",
  },
}));
