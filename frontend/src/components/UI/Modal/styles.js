import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  // root: {
  //   minWidth: 345,
  // },
  dialog: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeIcon: {
    cursor: "pointer",
    marginRight: "1rem",
  },
}));
