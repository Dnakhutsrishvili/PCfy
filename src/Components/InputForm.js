import classes from "./InputForm.module.css";

const InputForm = (props) => {
  //input filed component
  console.log(props.color.borderColor);
  return (
    <div className={classes.inputConteiner}>
      <label
        style={{ color: props.color.borderColor }}
        className={classes.label}
      >
        {props.label}
      </label>
      <input
        // value={props.value.name}
        onChange={(e) => {
          props.state(e.target.value);
        }}
        type={props.text}
        placeholder={props.placeholder}
        className={classes.input}
        style={{ ...props.stats, ...props.color }}
      ></input>
      <p
        style={{ color: props.color.borderColor }}
        className={classes.instructions}
      >
        {props.instructions}
      </p>
    </div>
  );
};
export default InputForm;
