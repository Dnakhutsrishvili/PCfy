import classes from "./LandingPage.module.css";
import Logo from "../../images/LOGO-02 1.png";
import LandingPageBanner from "../../images/banner.png";
import LandingPageBannerMobile from "../../images/Landing.png";
import Button from "../Button";

const LandingPage = (props) => {
  return (
    <>
      <div className={classes.flexParent}>
        <img className={classes.logo} src={Logo} alt="Logo"></img>
        <img
          className={classes.banner}
          src={LandingPageBanner}
          alt="banner"
        ></img>
        <img
          className={classes.bannerMobile}
          src={LandingPageBannerMobile}
          alt="banner"
        ></img>
        <div className={classes.btnContainer}>
          <Button
            nav={"/staffinfo"}
            text={"ჩანაწერის დამატება"}
            stats={
              props.responsive.state
                ? { height: "60px", width: "358px" }
                : { height: "60px", width: "408px" }
            }
          ></Button>
          <Button
            stats={
              props.responsive.state
                ? { height: "60px", width: "358px" }
                : { height: "60px", width: "408px" }
            }
            text={"ჩანაწერების სია"}
            nav={"/listofdata"}
          ></Button>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
