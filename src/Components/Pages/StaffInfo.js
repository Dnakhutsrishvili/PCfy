import { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../InputForm";
import Layout from "../Layout";
import classes from "./StaffInfo.module.css";
import OptionForm from "../OptionForm";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

import BackVector from "../Helpers/BackVector";

const StaffInfo = () => {
  let navigate = useNavigate();
  //state
  const [filteredPositions, setFilteredPositions] = useState([]);
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [lastName, setlastName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("lastname");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [email, setEmail] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("email");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [number, setNumber] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("number");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [team, setTeam] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("team");

    const initialValue = JSON.parse(saved);
    return initialValue || { name: "თიმი", id: 0 };
  });
  const [position, setPosition] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("position");

    const initialValue = JSON.parse(saved);
    return initialValue || { name: "პოზიცია", id: 0 };
  });

  const [nextPage, setNextPage] = useState("");

  //validation
  const [nameValidation, setNameValidation] = useState(false);
  const [lastNameValidation, setlastNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [numberValidation, setNumberValidation] = useState(false);
  const [teamValidation, setTeamValidation] = useState(false);
  const [positionValidation, setPositionValidation] = useState(false);

  const [borderColorInputName, setBorderColorInputName] = useState({});
  const [borderColorInputLastName, setBorderColorInputLastName] = useState({});
  const [borderColorInputEmail, setBorderColorInputEmail] = useState({});
  const [borderColorInputNumber, setBorderColorInputNumber] = useState({});
  const [borderColorFormTeam, setBorderColorFormTeam] = useState({});
  const [borderColorFormPos, setBorderColorFormPos] = useState({});

  //local storage

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

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("lastname", JSON.stringify(lastName));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("number", JSON.stringify(number));
    localStorage.setItem("team", JSON.stringify(team));
    localStorage.setItem("position", JSON.stringify(position));

    console.log(team);

    let newarr = positionData.filter((pos) => {
      return team.id === pos.team_id;
    });
    setFilteredPositions(newarr);
  }, [name, lastName, email, number, team, position]);
  console.log(filteredPositions);
  useEffect(() => {
    if (
      nameValidation &&
      lastNameValidation &&
      emailValidation &&
      numberValidation &&
      teamValidation &&
      positionValidation
    ) {
      navigate("/leptopinfo");
    }
  }, [
    nameValidation,
    lastNameValidation,
    emailValidation,
    numberValidation,
    teamValidation,
    positionValidation,
  ]);

  console.log(nextPage);

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
      setBorderColorFormTeam({ border: "1px solid #e52f2f" });
    }
    if (position.id === 0) {
      setPositionValidation(false);
      setBorderColorFormPos({ border: "1px solid #e52f2f" });
    } else {
      setPositionValidation(true);
      setBorderColorFormPos({});
    }
  };

  return (
    <>
      <Layout
        stats={{ width: "1920px", height: "1327px" }}
        firstHr={{ display: "flex" }}
        secondHr={{ display: "none" }}
      >
        <BackVector nav={"/"} />
        <div className={classes.conteiner}>
          <form onSubmit={getFullData} className={classes.formContainer}>
            <div className={classes.inpConteiner}>
              <InputForm
                value={name}
                label={"სახელი"}
                instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                text={"text"}
                placeholder={"input"}
                state={setName}
                stats={{ height: "60px", width: "408px" }}
                color={borderColorInputName}
              ></InputForm>
              <InputForm
                value={lastName}
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
                margin={{ marginTop: "58px" }}
                size={{ width: "858px", height: "60px" }}
                data={teamData}
                initialValue={team}
                state={setTeam}
                color={borderColorFormTeam}
              ></OptionForm>
            </div>
            <div className={classes.fixed2}>
              <OptionForm
                margin={{ marginTop: "58px" }}
                size={{ width: "858px", height: "60px" }}
                data={filteredPositions || positionData}
                initialValue={position}
                state={setPosition}
                color={borderColorFormPos}
              ></OptionForm>
            </div>
            <div className={classes.email}>
              <InputForm
                value={email}
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
                value={number}
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
