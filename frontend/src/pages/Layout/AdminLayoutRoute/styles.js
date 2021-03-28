export const styles = (theme) => ({
  modal: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  content: {
    padding: theme.spacing(2, 4, 3),
  },
  header: {
    backgroundColor: theme.color.secondary,
    padding: theme.spacing(2, 4),
    color: theme.color.textColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
