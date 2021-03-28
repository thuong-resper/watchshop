import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
const slugify = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};

const Tabs = ({ children, initialTab }) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  // const router = useRouter();

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));
  };

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
      console.log(initialTab);
    }
  }, []);

  // useEffect(() => {
  //   router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {
  //     shallow: true,
  //   });
  //   console.log(activeTab);
  // }, [activeTab]);

  return (
    <div>
      <ul>
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <li
              className={slugify(label) === activeTab ? classes.current : ""}
              key={label}
            >
              <p onClick={(e) => handleClick(e, label)}>{label}</p>
            </li>
          );
        })}
      </ul>
      {children.map((one) => {
        if (slugify(one.props.label) === activeTab)
          return (
            <div key={one.props.label} className={classes.content}>
              {one.props.children}
            </div>
          );
      })}
    </div>
  );
};

export default Tabs;
