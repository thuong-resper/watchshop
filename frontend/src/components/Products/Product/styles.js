import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 250,
    minHeight: "100%",
    minWidth: "100%",
    width: "100%",
    objectFit: "cover",
  },

  cardContent: {
    padding: "10px 16px 10px 16px !important",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  cardAction: {
    width: "100%",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  iconSpacing: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  priceCompare: {
    marginLeft: theme.spacing(1),
    textDecoration: "line-through",
    color: "#848484",
    whiteSpace: "nowrap",
    fontSize: 14,
  },
}));
