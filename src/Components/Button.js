import classes from "./Button.module.css";
import { useNavigate } from "react-router-dom";
const Button = (props) => {
  let navigate = useNavigate();
  const clickHandeler = () => {
    navigate(props.nav);
  };
  return (
    <>
      <button onClick={clickHandeler} className={classes.btn}>
        {props.text}
      </button>
    </>
  );
};
export default Button;
