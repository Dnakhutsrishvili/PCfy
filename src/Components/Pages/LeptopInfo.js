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
import { useNavigate } from "react-router-dom";

const LeptopInfo = (props) => {
  let navigate = useNavigate();
  //state for image
  const [image, setImage] = useState("");

  const [data] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("datatosend");

    const initialValue = JSON.parse(saved);
    return initialValue || props.staffInfoData;
  });

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
    return initialValue || { name: "???????????????????????? ??????????????????", id: 0 };
  });
  const [Cpu, setCpu] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cpu");

    const initialValue = JSON.parse(saved);
    return initialValue || { name: "CPU", id: 0 };
  });

  //get data for rendering
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://pcfy.redberryinternship.ge/api/brands")
      .then((response) => setLeptopBrends(response.data.data));
    axios
      .get("https://pcfy.redberryinternship.ge/api/cpus")
      .then((response) => setCpuData(response.data.data));
  }, []);

  //set localstorage speretly for onchange save
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
    props.staffInfoData,
  ]);

  //geting image formdata
  const getImage = (image) => {
    const formData = new FormData();
    formData.append("userpic", image, image.name);

    setImage(formData.get("userpic"));
  };

  //validation

  const [datatypeValidation, setdatatypeValidation] = useState(false);

  const [leptopsStateValidation, setleptopsStateValidation] = useState(false);

  const [borderColorImage, setborderColorImage] = useState({});
  const [leptopnameval, setleptopnameval] = useState({});
  const [leptopbrendval, setleptopbrendval] = useState({});
  const [cpuBorder, setcpuBorder] = useState({});
  const [birtviBorder, setbirtviBorder] = useState({});
  const [nakadiBorder, setnakadiBorder] = useState({});
  const [ramBorder, setRamborder] = useState({});
  const [dateborder, setdateborder] = useState({});
  const [priceborder, setpriceborder] = useState({});

  const getFullData = (e) => {
    e.preventDefault();
    console.log("trigereed");
    //validation
    if (image.name === undefined) {
      setborderColorImage({ border: "3px dashed #e52f2f" });
    } else {
      setborderColorImage({});
    }

    if (!leptopName.length > 0) {
      setleptopnameval({ borderColor: "#e52f2f" });
    } else {
      setleptopnameval({});
    }

    if (Brends !== "" && Brends.id !== 0) {
      setleptopbrendval({});
    } else {
      setleptopbrendval({ border: "1px solid #e52f2f" });
    }
    if (Cpu !== "" && Cpu.id !== 0) {
      setcpuBorder({});
    } else {
      setcpuBorder({ border: "1px solid #e52f2f" });
    }

    if (!cpuBirtvi.length > 0) {
      setbirtviBorder({ borderColor: "#e52f2f" });
    } else {
      setbirtviBorder({});
    }

    if (!cpuNakadi.length > 0) {
      setnakadiBorder({ borderColor: "#e52f2f" });
    } else {
      setnakadiBorder({});
    }

    if (leptopRam.length > 0) {
      setRamborder({});
    } else {
      setRamborder({ borderColor: "#e52f2f" });
    }

    if (dataType.length > 0) {
      setdatatypeValidation(false);
    } else {
      setdatatypeValidation(true);
    }

    if (date.length > 0) {
      setdateborder({});
    } else {
      setdateborder({ borderColor: "#e52f2f" });
    }

    if (price.length > 0) {
      setpriceborder({});
    } else {
      setpriceborder({ borderColor: "#e52f2f" });
    }

    if (leptopForm.length > 0) {
      setleptopsStateValidation(false);
    } else {
      setleptopsStateValidation(true);
    }

    let laptopState = "new";
    if (leptopForm === "???????????????") {
      laptopState = "new";
    } else {
      laptopState = "used";
    }
    //creating object to send to api
    const dataLeptop = {
      token: "938f2a57717c76cdf84bce4f32254396",
      laptop_name: leptopName,

      laptop_image: image,

      laptop_brand_id: Brends.id,

      laptop_cpu: Cpu.name,

      laptop_cpu_cores: cpuBirtvi,

      laptop_cpu_threads: cpuNakadi,

      laptop_ram: leptopRam,

      laptop_hard_drive_type: dataType,

      laptop_state: laptopState,

      laptop_purchase_date: date,

      laptop_price: price,
      ...data,
    };

    const headers = {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
    };
    //sending post request with axios
    axios
      .post(
        "https://pcfy.redberryinternship.ge/api/laptop/create",
        dataLeptop,
        {
          headers,
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          navigate("/finalpage");
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Layout
        stats={
          props.responsive.state
            ? { width: "390px", height: "1811px" }
            : { width: "1920px", height: "1921px" }
        }
        co
        secondHr={{ display: "flex" }}
        firstHr={{ display: "none" }}
        state={props.responsive.state}
      >
        <BackVector nav={"/staffinfo"} state={props.responsive.state} />
        {props.responsive.state && (
          <div className={classes.header}>
            <p>???????????????????????? ??????????????????????????????????????????</p>
            <p>2/2</p>
          </div>
        )}
        <div className={classes.conteiner}>
          <form onSubmit={getFullData}>
            <ImageUploadForm
              border={borderColorImage}
              getImage={getImage}
              state={props.responsive.state}
            ></ImageUploadForm>
            <div className={classes.secondParent}>
              <InputForm
                value={leptopName}
                label={"???????????????????????? ??????????????????"}
                instructions={"???????????????????????? ??????????????????, ?????????????????????, !@#$%^&*()_+= "}
                text={"text"}
                placeholder={"HP"}
                state={setLeptopName}
                stats={
                  props.responsive.state
                    ? { height: "60px", width: "358px" }
                    : { height: "60px", width: "407px" }
                }
                color={leptopnameval}
              ></InputForm>
              <OptionForm
                data={leptopBrends}
                initialValue={Brends}
                state={setBrends}
                margin={{ marginTop: "-10px" }}
                color={leptopbrendval}
                width={{ width: "408px" }}
                size={
                  props.responsive.state
                    ? { height: "60px", width: "348px" }
                    : { height: "60px", width: "408px" }
                }
              ></OptionForm>
            </div>
            <div className={classes.secondLineContainer}>
              <OptionForm
                data={cpuData}
                initialValue={Cpu}
                state={setCpu}
                margin={{ marginTop: "-10px" }}
                color={cpuBorder}
                width={{ width: "277px" }}
                size={
                  props.responsive.state
                    ? { height: "60px", width: "348px" }
                    : { height: "60px", width: "277px" }
                }
              ></OptionForm>
              <div className={classes.cpubirtvi}>
                <InputForm
                  value={cpuBirtvi}
                  label={"CPU-??? ??????????????????"}
                  instructions={"?????????????????? ?????????????????????"}
                  text={"number"}
                  placeholder={"14"}
                  state={setCpuBirtvi}
                  color={birtviBorder}
                  stats={
                    props.responsive.state
                      ? { height: "60px", width: "358px" }
                      : { height: "60px", width: "276px" }
                  }
                ></InputForm>
              </div>
              <div className={classes.cpunakadi}>
                <InputForm
                  value={cpuNakadi}
                  label={"CPU-??? ??????????????????"}
                  instructions={"?????????????????? ?????????????????????"}
                  text={"number"}
                  placeholder={"365"}
                  state={setCpuNakadi}
                  stats={
                    props.responsive.state
                      ? { height: "60px", width: "358px" }
                      : { height: "60px", width: "276px" }
                  }
                  color={nakadiBorder}
                ></InputForm>
              </div>
            </div>
            <div className={classes.thirdLineparent}>
              <InputForm
                value={leptopRam}
                label={"???????????????????????? RAM (GB)"}
                instructions={"?????????????????? ?????????????????????"}
                text={"number"}
                placeholder={"16"}
                state={setLeptopRam}
                stats={
                  props.responsive.state
                    ? { height: "60px", width: "358px" }
                    : { height: "60px", width: "407px" }
                }
                color={ramBorder}
              ></InputForm>
              <RadioInput
                state={setDataType}
                text={"????????????????????????????????? ????????????"}
                first={"SSD"}
                second={"HDD"}
                value={dataType}
                type={"datatype"}
                validation={datatypeValidation}
              ></RadioInput>
            </div>
            <div className={classes.fourthParent}>
              <div className={classes.lastParent}>
                <InputForm
                  value={date}
                  label={"????????????????????? ?????????????????? (????????????????????????)"}
                  instructions={""}
                  text={"date"}
                  placeholder={""}
                  state={setDate}
                  stats={
                    props.responsive.state
                      ? { height: "60px", width: "358px" }
                      : { height: "60px", width: "407px" }
                  }
                  color={dateborder}
                ></InputForm>
                <InputForm
                  value={price}
                  label={"???????????????????????? ????????????"}
                  instructions={"?????????????????? ?????????????????????"}
                  text={"number"}
                  placeholder={"0000"}
                  state={setPrice}
                  stats={
                    props.responsive.state
                      ? { height: "60px", width: "358px" }
                      : { height: "60px", width: "407px" }
                  }
                  color={priceborder}
                ></InputForm>
              </div>
              <div className={classes.lastRadio}>
                <RadioInput
                  state={setLeptopForm}
                  text={"???????????????????????? ?????????????????????????????????"}
                  first={"???????????????"}
                  second={"?????????????????????"}
                  value={leptopForm}
                  type={"laptopform"}
                  validation={leptopsStateValidation}
                ></RadioInput>
              </div>
            </div>
            <div className={classes.lastBtn}>
              <p
                className={classes.back}
                onClick={() => {
                  navigate("/staffinfo");
                }}
              >
                ????????????
              </p>
              <Button
                stats={{ height: "60px", width: "219px" }}
                text={"????????????????????????????????????"}
                type="submit"
              ></Button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default LeptopInfo;
