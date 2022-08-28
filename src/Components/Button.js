import classes from "./Button.module.css";
import { useNavigate } from "react-router-dom";
const Button = (props) => {
  //Button Component with routes
  let navigate = useNavigate();
  const clickHandeler = () => {
    navigate(props.nav);
  };
  return (
    <>
      <button
        style={props.stats}
        onClick={clickHandeler}
        className={classes.btn}
      >
        {props.text}
      </button>
    </>
  );
};
export default Button;
