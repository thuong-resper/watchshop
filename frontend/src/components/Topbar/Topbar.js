import React from "react";
import styles from "./Topbar.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const topBar = (props) => {
  return (
    <div className={styles.topBar}>
      <ul className="topBar__left"></ul>
      <ul className="topBar__right">
        <li className="topBar__right_item">
          <LocationOnOutlinedIcon />
        </li>
        <li className="topBar__right_item">sda</li>
        <li className="topBar__right_item"></li>
        <li className="topBar__right_item"></li>
        <li className="topBar__right_item"></li>
      </ul>
      <button className="bb">sdasd</button>
    </div>
  );
};

export default topBar;
