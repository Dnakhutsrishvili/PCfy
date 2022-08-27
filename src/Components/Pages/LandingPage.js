import classes from "./LandingPage.module.css";
import Logo from "../../images/LOGO-02 1.png";
import LandingPageBanner from "../../images/banner.png";
import Button from "../Button";

const LandingPage = () => {
  return (
    <>
      <div className={classes.flexParent}>
        <img className={classes.logo} src={Logo} alt="Logo"></img>
        <img
          className={classes.banner}
          src={LandingPageBanner}
          alt="banner"
        ></img>
        <div className={classes.btnContainer}>
          <Button nav={"/staffinfo"} text={"ჩანაწერის დამატება"}></Button>
          <Button text={"ჩანაწერების სია"}></Button>
        </div>
      </div>
      ;
    </>
  );
};
export default LandingPage;
