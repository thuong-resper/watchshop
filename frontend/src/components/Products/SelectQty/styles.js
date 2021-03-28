import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  table: {
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #9e9e9e14",
    paddingTop: "1rem",
  },
  root: {
    alignItems: "center",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    webkitAppearance: "none",
  },
}));
