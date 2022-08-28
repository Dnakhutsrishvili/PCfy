import { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../InputForm";
import Layout from "../Layout";
import classes from "./StaffInfo.module.css";
import OptionForm from "../OptionForm";
import Button from "../Button";
const StaffInfo = () => {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [validation, setValidation] = useState({
    nameValidation: false,
    lastNameValidation: false,
    emailValidation: false,
    numberValidation: false,
    teamValidation: false,
    positionValidation: false,
  });

  useEffect(() => {
    if (
      name.length > 2 &&
      name.match(/^([აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+)$/)
    ) {
      setValidation({
        nameValidation: true,
        lastNameValidation: false,
        emailValidation: false,
        numberValidation: false,
        teamValidation: false,
        positionValidation: false,
      });
    }

    if (
      lastName.length > 2 &&
      lastName.match(/^([აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+)$/)
    ) {
      setValidation({
        nameValidation: false,
        lastNameValidation: true,
        emailValidation: false,
        numberValidation: false,
        teamValidation: false,
        positionValidation: false,
      });
    }

    if (email.length > 1 && email.endsWith("redberry.ge")) {
      setValidation({
        nameValidation: false,
        lastNameValidation: false,
        emailValidation: true,
        numberValidation: false,
        teamValidation: false,
        positionValidation: false,
      });
    }
  }, [name]);

  console.log(validation);
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
  }, [localStorage]);

  const getFullData = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout>
        <div className={classes.conteiner}>
          <form onSubmit={getFullData} className={classes.formContainer}>
            <div className={classes.inpConteiner}>
              <InputForm
                // value={date}
                label={"სახელი"}
                instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                text={"text"}
                placeholder={"input"}
                state={setName}
                stats={{ height: "60px", width: "408px" }}
              ></InputForm>
              <InputForm
                label={"გვარი"}
                instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                text={"text"}
                placeholder={"input"}
                state={setlastName}
                stats={{ height: "60px", width: "408px" }}
              ></InputForm>
            </div>
            <div className={classes.fixed1}>
              <OptionForm
                data={teamData}
                initialValue={{ name: "თიმი", id: 0 }}
                state={setTeam}
              ></OptionForm>
            </div>
            <div className={classes.fixed2}>
              <OptionForm
                data={positionData}
                initialValue={{ name: "პოზიცია", id: 0 }}
                state={setPosition}
              ></OptionForm>
            </div>
            <div className={classes.email}>
              <InputForm
                label={"მეილი"}
                instructions={"უნდა მთავრდებოდეს @redberry.ge-ით"}
                text={"email"}
                placeholder={"grish666@redberry.ge"}
                state={setEmail}
                stats={{ height: "60px", width: "878px" }}
              ></InputForm>
            </div>
            <div className={classes.number}>
              <InputForm
                label={"ტელეფონის ნომერი"}
                instructions={"უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"}
                text={"number"}
                placeholder={"+995 598 00 07 01"}
                state={setNumber}
                stats={{ height: "60px", width: "878px" }}
              ></InputForm>
            </div>
            <div className={classes.btn}>
              <Button
                stats={{ height: "60px", width: "176px" }}
                nav={"/staffinfo"}
                text={"შემდეგი"}
                type="submit"
              ></Button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default StaffInfo;
