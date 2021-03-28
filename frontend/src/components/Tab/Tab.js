import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";

export const AntTabs = withStyles({
  indicator: {
    backgroundColor: "var(--primary)",
  },
})((props) => (
  <Tabs disableRipple {...props} variant="scrollable" scrollButtons="auto" />
));

export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    whiteSpace: "nowrap",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    "&:hover": {
      color: "var(--primary)",
      opacity: 1,
    },
    "&$selected": {
      color: "var(--primary)",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "var(--primary)",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
