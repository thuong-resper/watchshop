import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { useStyles } from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const classes = useStyles();

  const {
    title,
    component,
    iconAnchor,
    confirmButton,
    disagreeButton,
    fullScreen,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={handleClickOpen}>{iconAnchor}</IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.dialog}>
          <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
          <CloseIcon
            color="inherit"
            onClick={handleClose}
            className={classes.closeIcon}
          />
        </div>
        <DialogContent>{component}</DialogContent>
        <DialogActions>
          {disagreeButton ? (
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
          ) : null}

          {confirmButton}
        </DialogActions>
      </Dialog>
    </div>
  );
}
