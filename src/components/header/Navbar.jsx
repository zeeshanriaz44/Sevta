import classes from "./navbar.module.css";
import React from "react";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.upper}>
        <a href="#1">Home</a>
        <a href="#1">New Pilots</a>
        <a href="#1">Home</a>
        <a href="#1">Home</a>
        <a href="#1">Home</a>
      </div>
      <div className={classes.bottom}>
        <p>Sevta Paragliding Club</p>
      </div>
    </nav>
  );
}
