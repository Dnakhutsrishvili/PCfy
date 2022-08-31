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
      <div onClick={navigateHendeler} className={classes.vector}>
        <img className={classes.vectorImg} src={Vector} alt="vector"></img>
      </div>
    </>
  );
};
export default BackVector;
