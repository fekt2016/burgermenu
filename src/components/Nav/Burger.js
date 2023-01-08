import React, { useState } from "react";
import classes from "./Burger.module.css";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`${classes.burger}`} onClick={() => setOpen(!open)}>
        <div
          className={`${classes.icon} ${!open && classes.iconBKG} ${
            !open && classes.icontr1
          }`}
        ></div>
        <div
          className={`${classes.icon} ${!open && classes.iconBKG}  ${
            !open && classes.icontr2
          }`}
        ></div>
        <div
          className={`${classes.icon} ${!open && classes.iconBKG}  ${
            !open && classes.icontr3
          }`}
        ></div>
      </div>
      <RightNav open={open}/>
    </>
  );
};

export default Burger;
