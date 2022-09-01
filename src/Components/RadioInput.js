import { useState } from "react";
import classes from "./RadioInput.module.css";

const RadioInput = (props) => {
  return (
    <div className={classes.parent}>
      <legend className={classes.text}>{props.text}</legend>
      <div className={classes.radioParent}>
        <div>
          <input
            type="radio"
            id={props.first}
            name="type"
            value={props.first}
            onChange={(e) => {
              props.state(e.target.value);
            }}
            defaultChecked={props.value === props.first}
          />
          <label className={classes.label} htmlFor={props.first}>
            {props.first}
          </label>
        </div>

        <div>
          <input
            onChange={(e) => {
              props.state(e.target.value);
            }}
            type="radio"
            id={props.second}
            name="type"
            value={props.second}
            defaultChecked={props.value === props.second}
          />
          <label className={classes.label} htmlFor={props.second}>
            {props.second}
          </label>
        </div>
      </div>
    </div>
  );
};
export default RadioInput;
