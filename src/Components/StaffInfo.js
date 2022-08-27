import InputForm from "./InputForm";
import Layout from "./Layout";
import classes from "./StaffInfo.module.css";
const StaffInfo = () => {
  return (
    <>
      <Layout>
        <div className={classes.conteiner}>
          <div className={classes.inpConteiner}>
            <InputForm
              label={"სახელი"}
              instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
            ></InputForm>
            <InputForm
              label={"გვარი"}
              instructions={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
            ></InputForm>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default StaffInfo;
