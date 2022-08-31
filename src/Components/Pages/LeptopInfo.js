import Layout from "../Layout";
import classes from "./LeptopInfo.module.css";
import BackVector from "../Helpers/BackVector";
import ImageUploadForm from "../ImageUploadForm";
import InputForm from "../InputForm";
import OptionForm from "../OptionForm";
import { useEffect, useState } from "react";
import axios from "axios";

const LeptopInfo = () => {
  const [leptopBrends, setLeptopBrends] = useState([]);
  const [cpuData, setCpuData] = useState([]);
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

  console.log(cpuData);
  useEffect(() => {
    localStorage.setItem("brends", JSON.stringify(Brends));
    localStorage.setItem("leptopname", JSON.stringify(leptopName));
    localStorage.setItem("cpu", JSON.stringify(Cpu));
    localStorage.setItem("cpubirtvi", JSON.stringify(cpuBirtvi));
    localStorage.setItem("cpunakadi", JSON.stringify(cpuNakadi));
    localStorage.setItem("leptopram", JSON.stringify(leptopRam));
  }, [Brends, leptopName, Cpu, cpuBirtvi, cpuNakadi, leptopRam]);
  return (
    <>
      <Layout secondHr={{ display: "flex" }} firstHr={{ display: "none" }}>
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
          <div>
            <InputForm
              value={leptopRam}
              label={"ლეპტოპის RAM (GB)"}
              instructions={"მხოლოდ ციფრები"}
              text={"number"}
              placeholder={"16"}
              state={setLeptopRam}
              stats={{ width: "276px", height: "60px" }}
              color={1}
            ></InputForm>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default LeptopInfo;
