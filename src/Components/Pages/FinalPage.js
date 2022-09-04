import classes from "./FinalPage.module.css";
import Button from "../Button.js";
import Frame from "../../images/Frame.png";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
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
              stats={{ height: "60px", width: "408px" }}
              text={"ჩანაწერების სია"}
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
