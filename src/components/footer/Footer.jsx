import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.foot}>
      <p className={classes.can}>Canberra, Australia.</p>
      <hr className={classes.hrr} />
      <div className={classes.Navbar}>
        <div className={classes.nv}>
          <a href="#a">About</a>
          <a href="#a">Advertising</a>
          <a href="#a">Licenses</a>
          <a href="#a">Business</a>
          <a href="#a">Safety guidelines</a>
        </div>
        <div className={classes.feet}>
          <a href="#a">Privacy</a>
          <a href="#a">Terms</a>
          <a href="#a">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
