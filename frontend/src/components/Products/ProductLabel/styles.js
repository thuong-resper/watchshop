import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  productLabel: {
    position: "absolute",
    color: "inherit",
  },
  saleButton: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
    justifyContent: "center",
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 4,
  },
  loyaltyIcon: {
    marginRight: theme.spacing(0.5),
    alignItems: "center",
    display: "flex",
  },
}));

// font-weight: 500;
// line-height: 1.75;
// border-radius: 4px;
// letter-spacing: 0.02857em;
// text-transform: uppercase;
