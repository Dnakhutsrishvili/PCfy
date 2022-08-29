import { useState, useEffect } from "react";
import classes from "./OptionForm.module.css";
import Arrow from "../images/arrow.png";

const OptionForm = (props) => {
  const [selectedId, setSelectedId] = useState(props.initialValue);
  const [showState, setShowState] = useState(false);

  // console.log(data.id);
  useEffect(() => {
    props.state(selectedId);
  }, [selectedId, props]);
  return (
    <div className={classes.container}>
      <div
        style={props.color}
        className={classes.option}
        onClick={() => {
          setShowState(!showState);
        }}
      >
        {selectedId.name}
        <img src={Arrow} className={classes.arrow} alt="arrow"></img>
      </div>
      <div className={classes.dropshadow}>
        {showState &&
          props.data.map((item) => {
            return (
              <div
                className={classes.dropdown}
                onClick={() => {
                  setSelectedId({ name: item.name, id: item.id });
                  setShowState(false);
                }}
                key={item.id}
              >
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default OptionForm;
