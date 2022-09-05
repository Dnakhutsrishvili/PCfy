import classes from "./Layout.module.css";
import ButtomLogo from "../images/LOGO-10 2.png";
import { useState } from "react";

const Layout = (props) => {
  //frame for main pages

  return (
    <div style={props.stats} className={classes.parent}>
      <header
        style={props.state ? { display: "none" } : { display: "flex" }}
        className={classes.headerParent}
      >
        <div style={props.state ? { display: "none" } : { display: "" }}>
          <h1 className={classes.title}>თანამშრომლების ინფო</h1>
          <hr style={props.firstHr} className={classes.underline} />
        </div>
        <div style={props.state ? { display: "none" } : { display: "" }}>
          <h1 className={classes.title}>ლეპტოპის მახასიათებლები</h1>
          <hr style={props.secondHr} className={classes.underline} />
        </div>
      </header>
      {props.children}
      <img
        style={props.state ? { display: "none" } : { display: "flex" }}
        className={classes.logo}
        src={ButtomLogo}
        alt="logo"
      ></img>
    </div>
  );
};
export default Layout;
