import classes from "./BackVector.module.css";
import Vector from "../../images/Vector.png";
import { useNavigate } from "react-router-dom";

const BackVector = (props) => {
  let navigate = useNavigate();

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

      {props.state && (
        <div>
          <p className={classes.info}>თანამშრომლის ინფო</p>
          <p className={classes.info}>1/2</p>
        </div>
      )}
    </>
  );
};
export default BackVector;
