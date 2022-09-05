import classes from "./FinalPage.module.css";
import Button from "../Button.js";
import Frame from "../../images/Frame.png";
import { useNavigate } from "react-router-dom";

const FinalPage = (props) => {
  let navigate = useNavigate();

  localStorage.clear();
  return (
    <>
      <div className={classes.background}>
        <div className={classes.modal}>
          <img className={classes.img} src={Frame} alt="frame"></img>
          <p className={classes.text}>ჩანაწერი დამატებულია!</p>
          <div className={classes.btnparent}>
            <Button
              stats={
                props.responsive.state
                  ? { height: "60px", width: "297px" }
                  : { height: "60px", width: "408px" }
              }
              text={"ჩანაწერების სია"}
              nav={"/listofdata"}
            ></Button>

            <p
              onClick={() => {
                navigate("/");
              }}
              className={classes.link}
            >
              მთავარი
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalPage;
