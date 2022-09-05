import classes from "./BackVector.module.css";
import Vector from "../../images/Vector.png";
import { useNavigate } from "react-router-dom";

const BackVector = (props) => {
  let navigate = useNavigate();

  //use navigate function to navigate into different pages
  const navigateHendeler = () => {
    navigate(props.nav);
  };
  return (
    <>
      <div
        onClick={navigateHendeler}
        style={
          props.state
            ? { background: "none", marginLeft: "-70px", marginTop: "-40px" }
            : { background: "#d9d9d9" }
        }
        className={classes.vector}
      >
        <img className={classes.vectorImg} src={Vector} alt="vector"></img>
      </div>
    </>
  );
};
export default BackVector;
