import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

function CustomBodyCell(props) {
  return (
    <div>
      {props.value ? (
        <ClearIcon color="secondary" />
      ) : (
        <CheckIcon color="primary" />
      )}
    </div>
  );
}

export default CustomBodyCell;
