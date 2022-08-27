import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./OptionForm.module.css";

const OptionForm = () => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState({ name: "თიმი", id: 0 });
  const [showState, setShowState] = useState(false);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://pcfy.redberryinternship.ge/api/teams")
      .then((response) => setData(response.data.data));
  }, []);
  // console.log(data.id);
  return (
    <div className={classes.container}>
      <div
        className={classes.option}
        onClick={() => {
          setShowState(!showState);
        }}
      >
        {selectedId.name}
      </div>
      {showState &&
        data.map((item) => {
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
  );
};
export default OptionForm;
