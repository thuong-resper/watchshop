import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  priceDetail: {
    padding: "20px 0",
    margin: "13px 0",
    borderTop: "1px solid #9e9e9e14",
  },
  priceCompare: {
    textDecoration: "line-through",
    color: "#9e9e9e",
    whiteSpace: "nowrap",
    fontSize: 14,
    marginRight: theme.spacing(0.5),
  },
}));
