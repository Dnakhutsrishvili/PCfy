import { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../InputForm";
import Layout from "../Layout";
import classes from "./StaffInfo.module.css";
import OptionForm from "../OptionForm";
import Button from "../Button";

const StaffInfo = () => {
  //state
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");

  //validation
  const [nameValidation, setNameValidation] = useState(false);
  const [lastNameValidation, setlastNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [numberValidation, setNumberValidation] = useState(false);
  const [teamValidation, setTeamValidation] = useState(false);
  const [positionValidation, setPositionValidation] = useState(false);

  const [validation, setValidation] = useState(false);
  const [borderColorInputName, setBorderColorInputName] = useState({});
  const [borderColorInputLastName, setBorderColorInputLastName] = useState({});
  const [borderColorInputEmail, setBorderColorInputEmail] = useState({});
  const [borderColorInputNumber, setBorderColorInputNumber] = useState({});
  const [borderColorFormTeam, setBorderColorFormTeam] = useState({});
  const [borderColorFormPos, setBorderColorFormPos] = useState({});

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
    if (
      name.trim().length > 2 &&
      name.match(/^([აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+)$/)
    ) {
      setNameValidation(true);
      setBorderColorInputName({});
    } else {
      setNameValidation(false);
      setBorderColorInputName({ borderColor: "#e52f2f" });
    }

    if (
      lastName.trim().length > 2 &&
      lastName.match(/^([აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+)$/)
    ) {
      setlastNameValidation(true);
      setBorderColorInputLastName({});
    } else {
      setlastNameValidation(false);
      setBorderColorInputLastName({ borderColor: "#e52f2f" });
    }

    if (email.trim().length > 1 && email.endsWith("redberry.ge")) {
      setEmailValidation(true);
      setBorderColorInputEmail({});
    } else {
      setEmailValidation(false);
      setBorderColorInputEmail({ borderColor: "#e52f2f" });
    }

    if (number.match(/^(\+?995)?(79\d{7}|5\d{8})$/) && number.length === 12) {
      setNumberValidation(true);
      setBorderColorInputNumber({});
    } else {
      setNumberValidation(false);
      setBorderColorInputNumber({ borderColor: "#e52f2f" });
    }

    if (team !== "" && team.id !== 0) {
      setTeamValidation(true);
      setBorderColorFormTeam({});
    } else {
      setTeamValidation(false);
      setBorderColorFormTeam({ border: "1.8px solid #e52f2f" });
    }
    if (position !== "" && position.id !== 0) {
      setPositionValidation(true);
      setBorderColorFormPos({});
    } else {
      setPositionValidation(false);
      setBorderColorFormPos({ border: "1.8px solid #e52f2f" });
    }
    if (
      nameValidation &&
      lastNameValidation &&
      emailValidation &&
      numberValidation &&
      teamValidation &&
      positionValidation
    ) {
      console.log(validation);
    }
  };
  console.log("name " + nameValidation);
  console.log("lastname " + lastNameValidation);
  console.log("email " + emailValidation);
  console.log("number " + numberValidation);
  console.log("team " + teamValidation);
  console.log("pos " + positionValidation);
  console.log(validation);

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
                color={borderColorInputName}
              ></InputForm>
              <InputForm
                label={"გვარი"}
                instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                text={"text"}
                placeholder={"input"}
                state={setlastName}
                stats={{ height: "60px", width: "408px" }}
                color={borderColorInputLastName}
              ></InputForm>
            </div>
            <div className={classes.fixed1}>
              <OptionForm
                data={teamData}
                initialValue={{ name: "თიმი", id: 0 }}
                state={setTeam}
                color={borderColorFormTeam}
              ></OptionForm>
            </div>
            <div className={classes.fixed2}>
              <OptionForm
                data={positionData}
                initialValue={{ name: "პოზიცია", id: 0 }}
                state={setPosition}
                color={borderColorFormPos}
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
                color={borderColorInputEmail}
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
                color={borderColorInputNumber}
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
