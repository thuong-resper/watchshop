import { Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SeeMoreButtonMobile = (props) => {
  const { title, titleAfterClick, isActive, toggleClass, link } = props;

  return (
    <div>
      {isActive ? (
        <Link to={link}>
          <Button
            onClick={toggleClass}
            variant="outlined"
            color="primary"
            className="button-show-more"
            endIcon={<ChevronRightIcon />}
          >
            See more&nbsp;<strong>{titleAfterClick}</strong>
          </Button>
        </Link>
      ) : (
        <Button
          onClick={toggleClass}
          variant="outlined"
          color="primary"
          className="button-show-more"
          endIcon={<ExpandMoreIcon />}
        >
          See 6 more&nbsp;<strong>{title}</strong>
        </Button>
      )}
    </div>
  );
};

export default SeeMoreButtonMobile;
