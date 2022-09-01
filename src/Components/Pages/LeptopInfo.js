import Layout from "../Layout";
import classes from "./LeptopInfo.module.css";
import BackVector from "../Helpers/BackVector";
import ImageUploadForm from "../ImageUploadForm";
import InputForm from "../InputForm";
import OptionForm from "../OptionForm";
import { useEffect, useState } from "react";
import axios from "axios";
import RadioInput from "../RadioInput";
import Button from "../Button";

const LeptopInfo = () => {
  const [leptopBrends, setLeptopBrends] = useState([]);
  const [cpuData, setCpuData] = useState([]);

  const [leptopForm, setLeptopForm] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("leptopform");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [date, setDate] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("date");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [price, setPrice] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("price");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [dataType, setDataType] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("datatype");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [cpuBirtvi, setCpuBirtvi] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cpubirtvi");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [cpuNakadi, setCpuNakadi] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cpunakadi");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [leptopRam, setLeptopRam] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("leptopram");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [leptopName, setLeptopName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("leptopname");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [Brends, setBrends] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("brends");

    const initialValue = JSON.parse(saved);
    return initialValue || { name: "ლეპტოპის ბრენდი", id: 0 };
  });
  const [Cpu, setCpu] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cpu");

    const initialValue = JSON.parse(saved);
    return initialValue || { name: "CPU", id: 0 };
  });

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://pcfy.redberryinternship.ge/api/brands")
      .then((response) => setLeptopBrends(response.data.data));
    axios
      .get("https://pcfy.redberryinternship.ge/api/cpus")
      .then((response) => setCpuData(response.data.data));
  }, []);

  useEffect(() => {
    localStorage.setItem("brends", JSON.stringify(Brends));
    localStorage.setItem("leptopname", JSON.stringify(leptopName));
    localStorage.setItem("cpu", JSON.stringify(Cpu));
    localStorage.setItem("cpubirtvi", JSON.stringify(cpuBirtvi));
    localStorage.setItem("cpunakadi", JSON.stringify(cpuNakadi));
    localStorage.setItem("leptopram", JSON.stringify(leptopRam));
    localStorage.setItem("datatype", JSON.stringify(dataType));
    localStorage.setItem("date", JSON.stringify(date));
    localStorage.setItem("price", JSON.stringify(price));
    localStorage.setItem("leptopform", JSON.stringify(leptopForm));
  }, [
    Brends,
    leptopName,
    Cpu,
    cpuBirtvi,
    cpuNakadi,
    leptopRam,
    dataType,
    date,
    price,
    leptopForm,
  ]);
  return (
    <>
      <Layout
        stats={{ width: "1920px", height: "2043px" }}
        secondHr={{ display: "flex" }}
        firstHr={{ display: "none" }}
      >
        <BackVector nav={"/staffinfo"} />
        <div className={classes.conteiner}>
          <ImageUploadForm></ImageUploadForm>
          <div className={classes.secondParent}>
            <InputForm
              value={leptopName}
              label={"ლეპტოპის სახელი"}
              instructions={"ლათინური ასოები, ციფრები, !@#$%^&*()_+= "}
              text={"text"}
              placeholder={"HP"}
              state={setLeptopName}
              stats={{ width: "407px", height: "60px" }}
              color={1}
            ></InputForm>
            <OptionForm
              data={leptopBrends}
              initialValue={Brends}
              state={setBrends}
              size={{ width: "408px", height: "60px" }}
              margin={{ marginTop: "-10px" }}
              //   color={borderColorFormPos}
            ></OptionForm>
          </div>
          <div className={classes.secondLineContainer}>
            <OptionForm
              data={cpuData}
              initialValue={Cpu}
              state={setCpu}
              size={{ width: "277px", height: "60px" }}
              margin={{ marginTop: "-10px" }}
              //   color={borderColorFormPos}
            ></OptionForm>
            <div className={classes.cpubirtvi}>
              <InputForm
                value={cpuBirtvi}
                label={"CPU-ს ბირთვი"}
                instructions={"მხოლოდ ციფრები"}
                text={"number"}
                placeholder={"14"}
                state={setCpuBirtvi}
                stats={{ width: "276px", height: "60px" }}
                color={1}
              ></InputForm>
            </div>
            <div className={classes.cpunakadi}>
              <InputForm
                value={cpuNakadi}
                label={"CPU-ს ნაკადი"}
                instructions={"მხოლოდ ციფრები"}
                text={"number"}
                placeholder={"365"}
                state={setCpuNakadi}
                stats={{ width: "276px", height: "60px" }}
                color={1}
              ></InputForm>
            </div>
          </div>
          <div className={classes.thirdLineparent}>
            <InputForm
              value={leptopRam}
              label={"ლეპტოპის RAM (GB)"}
              instructions={"მხოლოდ ციფრები"}
              text={"number"}
              placeholder={"16"}
              state={setLeptopRam}
              stats={{ width: "407px", height: "60px" }}
              color={1}
            ></InputForm>
            <RadioInput
              state={setDataType}
              text={"მეხსიერების ტიპი"}
              first={"SSD"}
              second={"HDD"}
              value={dataType}
            ></RadioInput>
          </div>
          <div className={classes.fourthParent}>
            <div className={classes.lastParent}>
              <InputForm
                value={date}
                label={"შეძენის რიცხვი (არჩევითი)"}
                instructions={""}
                text={"date"}
                placeholder={""}
                state={setDate}
                stats={{ width: "407px", height: "60px" }}
                color={1}
              ></InputForm>
              <InputForm
                value={price}
                label={"ლეპტოპის ფასი"}
                instructions={"მხოლოდ ციფრები"}
                text={"number"}
                placeholder={"0000"}
                state={setPrice}
                stats={{ width: "407px", height: "60px" }}
                color={1}
              ></InputForm>
            </div>
            <RadioInput
              state={setLeptopForm}
              text={"ლეპტოპის მდგომარეობა"}
              first={"ახალი"}
              second={"მეორადი"}
              value={leptopForm}
            ></RadioInput>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default LeptopInfo;
