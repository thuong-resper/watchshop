import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  // promotions
  table: {
    display: "flex",
    alignItems: "baseline",
    borderTop: "1px solid #9e9e9e14",
    // paddingTop: "1.5rem",
  },
  promotionTagItem: {
    margin: theme.spacing(1),
    position: "relative",
    "& div": {
      width: "100%",
    },
  },
  promotionTagItemDetailHide: {
    display: "none",
  },
  promotionTagItemDetail: {
    position: "absolute",
    top: 40,
    left: 0,
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    padding: "12px 16px",
    zIndex: 1,
  },
  buttonGroup: {
    // width: 100,
    "& button": {
      marginBottom: "5px",
      fontSize: "12px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "fit-content", // some width
      maxWidth: "100%",
      color: "inherit",
      textAlign: "left",
      border: "1px solid #0000000f",
    },
    "& button:after": {
      // position: absolute;
      // border-top: .3em solid;
      // border-right: .3em solid transparent;
      // border-bottom: 0;
      // top: 50%;
      // transform: translateY(-50%);
      // font-size: 17px;
      // right: 5px;
      //   display: inline-block;
      // margin-left: .255em;
      // vertical-align: .255em;
      // content: "";
      // border-top: .3em solid;
      // border-right: .3em solid transparent;
      // border-bottom: 0;
      // border-left: .3em solid transparent;
      display: "inline-block",
      marginLeft: "0.255rem",
      verticalAlign: ".255em",
      content: "",
      borderTop: ".3em solid",
      borderRight: ".3em solid transparent",
      borderBottom: 0,
      borderLeft: ".3em solid transparent",
      position: "absolute",
      right: "5px",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "17px",
    },
    "& div": {
      inset: "4px auto auto 0px !important",
      zIndex: 10,
    },
  },
  detail: {
    backgroundColor: "white",
    border: "1px solid #0000000f",
    padding: theme.spacing(1),
    whiteSpace: "break-spaces",
  },
}));

// font-weight: 500;
// line-height: 1.75;
// border-radius: 4px;
// letter-spacing: 0.02857em;
// text-transform: uppercase;
