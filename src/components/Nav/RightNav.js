import React from 'react'
import classes from './RightNav.module.css';
export const RightNav = (props) => {
  return (
    <ul className={`${classes.navlist} ${!props.open && classes.navlistdisplay}`}>
        <li className={classes.navitem}>Home</li>
        <li className={classes.navitem}>About Us</li>
        <li className={classes.navitem}>Contact Us</li>
        <li className={classes.navitem}>Sign In</li>
        <li className={classes.navitem}>Sign Up</li>
      </ul>
  )
}
export default RightNav;