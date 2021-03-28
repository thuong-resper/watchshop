import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  background: {
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: "1.5rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    width: "100%", // 16:9
    height: "100%", // 16:9
    maxHeight: "20rem",
    objectFit: "cover",
  },
  rating: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productBrand: {
    display: "flex",
    alignItems: "center",
  },
  brandLink: {
    margin: "0 5px",
    textDecoration: "none",
    fontSize: "12px",
  },
  brandDivider: {
    height: 15,
    width: 1,
    background: "#9e9e9e",
  },
  priceCompare: {
    textDecoration: "line-through",
    color: "#9e9e9e",
    whiteSpace: "nowrap",
    fontSize: 14,
    marginRight: theme.spacing(0.5),
  },
  button: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  orderButton: {
    minWidth: "10rem",
    margin: theme.spacing(2),
  },
  table: {
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #9e9e9e14",
    padding: "1.5rem 0",
  },
  input: {
    webkitAppearance: "none",
  },

  formControl: {
    minWidth: 120,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  // delivery

  layout: {
    width: "100%",
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  paper: {
    margin: "auto",
    width: "100%",
    maxWidth: "600px",
  },
  base: { padding: "0 8px" },
  root: {
    width: "100%",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },

  location: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eff0f5",
  },
  locationIcon: { color: "var(--whiteThin)" },
  summary_section: {
    borderRadius: 4,
    marginLeft: "16px",
    backgroundColor: "#fff !important",
  },
  title: {
    backgroundColor: "#fff",
    padding: "0.5rem 0",
    marginTop: "1rem",
    borderRadius: 4,
  },
  summary_section_content: {
    paddingBottom: 16,
  },
  checkout_row: {
    display: "flex",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  checkout_summary_label: {
    alignItems: "center",
    display: "flex",
  },
  checkout_summary_value: {
    fontSize: 16,
    textAlign: "right",
    color: "#202020",
    letterSpacing: "-.44px",
    verticalAlign: "middle",
  },
  voucher_input: {
    marginBottom: 8,
    width: "100%",
  },

  voucher_input_inner: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
    width: "100%",
  },
  voucher_input_col_9: {
    width: "73%",
  },
  voucher_input_type: { width: "100%" },
  voucher_input_button: {
    height: "100%",
    margin: 0,
    width: "100%",
  },
  confirm_cart_button: {
    height: "2.5rem",
    margin: 0,
    width: "100%",
    textTransform: "none",
  },
  voucher_input_col_3: {
    width: "25%",
  },
  checkout_order_row: {
    display: "table",
    width: "100%",
    marginBottom: "16px",
  },
  checkout_order_total_title: {
    display: "table-cell",
    fontSize: "14px",
    color: "#202020",
    lineHeight: "16px",
  },
  checkout_order_total_fee: {
    display: "table-cell",
    fontSize: "18px",
    color: "var(--secondary)",
    textAlign: "right",
  },
  checkout_order_total_fee_tip: {
    fontSize: "12px",
    color: "#424242",
    letterSpacing: "0",
    lineHeight: "16px",
    display: "block",
    textAlign: "right",
    marginTop: "5px",
  },
}));
