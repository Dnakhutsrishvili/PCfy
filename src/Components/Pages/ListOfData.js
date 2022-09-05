import classes from "./ListOfData.module.css";
import BackVector from "../Helpers/BackVector";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListOfData = (props) => {
  const [data, setData] = useState([]);

  //geting data async
  useEffect(() => {
    async function getdata() {
      const res = await fetch(
        "https://pcfy.redberryinternship.ge/api/laptops?token=938f2a57717c76cdf84bce4f32254396"
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

  return (
    <>
      <div>
        <div className={classes.parent}>
          <BackVector nav={"/"} state={props.responsive.state} />
          <p className={classes.text}>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</p>
        </div>
        <div className={classes.mapeConteiner}>
          {data.map((item) => {
            return (
              <div className={classes.mappedParent} key={item.laptop.id}>
                <img
                  alt="laptopImg"
                  className={classes.img}
                  src={`https://pcfy.redberryinternship.ge/${item.laptop.image}`}
                ></img>
                <div className={classes.rowParent}>
                  <div className={classes.nameParent}>
                    <p className={classes.name}>{item.user.name}</p>
                    <p className={classes.name}>{item.user.surname}</p>
                  </div>
                  <p className={classes.laptopname}> {item.laptop.name}</p>
                  <div
                    onClick={() => {
                      props.data(item.laptop.id);
                    }}
                  >
                    <Link to="/listofleptop">მეტის ნახვა</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ListOfData;
