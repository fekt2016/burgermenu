
import classes from "./Navbar.module.css";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>Nav bar</div>
      <Burger />

    </nav>
  );
};
export default Navbar;
