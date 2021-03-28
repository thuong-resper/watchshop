import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  // promotions
  table: {
    display: "flex",
    alignItems: "baseline",
    borderTop: "1px solid #9e9e9e14",
  },
  promotionTagItem: {
    margin: theme.spacing(1),
    position: "relative",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // width: 30,
  },
  muiTabRoot: { width: "100%" },
  tabColor: {
    minWidth: "64px !important",
    height: "64px !important",
  },
}));

// font-weight: 500;
// line-height: 1.75;
// border-radius: 4px;
// letter-spacing: 0.02857em;
// text-transform: uppercase;
