import classes from "./InputForm.module.css";

const InputForm = (props) => {
  //input filed component
  return (
    <div className={classes.inputConteiner}>
      <label className={classes.label}>{props.label}</label>
      <input
        // value={props.value.name}
        onChange={(e) => {
          props.state(e.target.value);
        }}
        type={props.text}
        placeholder={props.placeholder}
        className={classes.input}
        style={props.stats}
      ></input>
      <p className={classes.instructions}> {props.instructions}</p>
    </div>
  );
};
export default InputForm;
