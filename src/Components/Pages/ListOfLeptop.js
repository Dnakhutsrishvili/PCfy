import { useEffect, useState } from "react";
import BackVector from "../Helpers/BackVector";
import classes from "./ListOfLeptop.module.css";

const ListOfLeptop = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await fetch(
        `https://pcfy.redberryinternship.ge/api/laptop/${props.id}?token=938f2a57717c76cdf84bce4f32254396`
      );
      const data = await res.json();
      setData(data.data);
    }

    let unmounted = false;
    if (!unmounted) {
      getdata();
    }

    return () => (unmounted = true);
  }, []);
  console.log(data);
  return (
    <>
      <div className={classes.parent}>
        <BackVector nav={"/listofdata"} />
        <p className={classes.text}>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</p>
        {/* 
        {data.map((item) => {
          return (
            <div>
              <div>
                <img
                  className={classes.img}
                  src={`https://pcfy.redberryinternship.ge/${item.laptop.image}`}
                ></img>
              </div>
              <div></div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};
export default ListOfLeptop;
