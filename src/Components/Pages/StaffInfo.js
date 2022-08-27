import { useState } from "react";
import InputForm from "../InputForm";
import Layout from "../Layout";
import classes from "./StaffInfo.module.css";
import OptionForm from "../OptionForm";
const StaffInfo = () => {
  //states for name and last name
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");

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

           <OptionForm data={}></OptionForm>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default StaffInfo;
