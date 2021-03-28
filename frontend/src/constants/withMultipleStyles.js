import { withStyles } from "@material-ui/core/styles";

// Fixed: material-ui "The key provided to the classes property is not implemented"
const withMultipleStyles = (...params) => {
  return withStyles((theme) => {
    var styles = {};
    for (var len = params.length, key = 0; key < len; key++) {
      styles = Object.assign(styles, params[key](theme));
    }

    return styles;
  });
};

export default withMultipleStyles;
