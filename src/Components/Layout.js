import classes from "./Layout.module.css";
import ButtomLogo from "../images/LOGO-10 2.png";

const Layout = (props) => {
  return (
    <div className={classes.parent}>
      <header className={classes.headerParent}>
        <div>
          <h1 className={classes.title}>თანამშრომლების ინფო</h1>
          <hr className={classes.underline} />
        </div>
        <div>
          <h1 className={classes.title}>ლეპტოპის მახასიათებლები</h1>
        </div>
      </header>
      {props.children}
      <img className={classes.logo} src={ButtomLogo} alt="logo"></img>
    </div>
  );
};
export default Layout;
