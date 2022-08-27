import { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../InputForm";
import Layout from "../Layout";
import classes from "./StaffInfo.module.css";
import OptionForm from "../OptionForm";
const StaffInfo = () => {
  //states for name and last name
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");

  //state for data
  const [teamData, setTeamData] = useState([]);
  const [positionData, setPositionData] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://pcfy.redberryinternship.ge/api/teams")
      .then((response) => setTeamData(response.data.data));

    axios
      .get("https://pcfy.redberryinternship.ge/api/positions")
      .then((response) => setPositionData(response.data.data));
  }, []);

  return (
    <>
      <Layout>
        <div className={classes.conteiner}>
          <form className={classes.formContainer}>
            <div className={classes.inpConteiner}>
              <InputForm
                label={"სახელი"}
                instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                text={"text"}
                placeholder={"input"}
                state={setName}
              ></InputForm>
              <InputForm
                label={"გვარი"}
                instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                text={"text"}
                placeholder={"input"}
                state={setlastName}
              ></InputForm>
            </div>
            <div className={classes.fixed1}>
              <OptionForm
                data={teamData}
                initialValue={{ name: "თიმი", id: 0 }}
              ></OptionForm>
            </div>
            <div className={classes.fixed2}>
              <OptionForm
                data={positionData}
                initialValue={{ name: "პოზიცია", id: 0 }}
              ></OptionForm>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default StaffInfo;
