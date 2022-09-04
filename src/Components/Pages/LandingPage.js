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
          <Button
            stats={{ height: "60px", width: "408px" }}
            nav={"/staffinfo"}
            text={"ჩანაწერის დამატება"}
          ></Button>
          <Button
            stats={{ height: "60px", width: "408px" }}
            text={"ჩანაწერების სია"}
            nav={"/listofdata"}
          ></Button>
        </div>
      </div>
      ;
    </>
  );
};
export default LandingPage;
