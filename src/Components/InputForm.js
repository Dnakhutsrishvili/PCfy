import classes from "./InputForm.module.css";

const InputForm = (props) => {
  return (
    <div className={classes.inputConteiner}>
      <label className={classes.label}>{props.label}</label>
      <input className={classes.input}></input>
      <p className={classes.instructions}> {props.instructions}</p>
    </div>
  );
};
export default InputForm;
