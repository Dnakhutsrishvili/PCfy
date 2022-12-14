import { useEffect, useState } from "react";
import BackVector from "../Helpers/BackVector";
import classes from "./ListOfLeptop.module.css";

const ListOfLeptop = (props) => {
  const [data, setData] = useState([]);
  const [team, setTeam] = useState([]);
  const [position, setPosition] = useState([]);
  const [brends, setBrends] = useState([]);

  useEffect(() => {
    //get laptop info
    async function getdata() {
      const res = await fetch(
        `https://pcfy.redberryinternship.ge/api/laptop/${props.id}?token=938f2a57717c76cdf84bce4f32254396`
      );
      const data = await res.json();
      JSON.stringify(data);
      setData([data.data]);
      //get team info
      const resteam = await fetch(
        "https://pcfy.redberryinternship.ge/api/teams"
      );
      const dataTeam = await resteam.json();
      JSON.stringify(dataTeam);
      setTeam(dataTeam.data);

      //get position info
      const resposition = await fetch(
        "https://pcfy.redberryinternship.ge/api/positions"
      );
      const dataposition = await resposition.json();
      JSON.stringify(dataposition);
      setPosition(dataposition.data);

      //get brends info
      const resbrends = await fetch(
        "https://pcfy.redberryinternship.ge/api/brands"
      );
      const brendsTeam = await resbrends.json();
      JSON.stringify(brendsTeam);
      setBrends(brendsTeam.data);
    }

    let unmounted = false;
    if (!unmounted) {
      getdata();
    }

    return () => (unmounted = true);
  }, [props.id]);

  //get team name

  const variableOne = data.map((item) => {
    return team.filter((teams) => {
      return teams.id === item.user.team_id;
    });
  });
  const teamFiltered = variableOne.flat();

  //get posiotion
  const variableTwo = data.map((item) => {
    return position.filter((pos) => {
      return pos.id === item.user.position_id;
    });
  });
  const positionFiltered = variableTwo.flat();

  //get brends
  const variableThree = data.map((item) => {
    return brends.filter((br) => {
      return br.id === item.laptop.brand_id;
    });
  });
  const brandFiltered = variableThree.flat();

  return (
    <>
      <div className={classes.parent}>
        <BackVector state={props.responsive.state} nav={"/listofdata"} />
        <p className={classes.text}>???????????????????????? ????????????</p>
      </div>
      {data.map((item) => {
        return (
          <div key={item.laptop.price}>
            <div className={classes.firstLine}>
              <div>
                <img
                  className={classes.img}
                  alt="laptopimg"
                  src={`https://pcfy.redberryinternship.ge/${item.laptop.image}`}
                ></img>
              </div>
              <div className={classes.parentUser}>
                <div className={classes.nameline}>
                  <p className={classes.widtName}>??????????????????: </p>
                  <p className={classes.widtName}>????????????:</p>
                  <p className={classes.widtName}>?????????????????????:</p>
                  <p className={classes.widtName}>???????????????:</p>
                  <p className={classes.widtName}>?????????. ??????????????????:</p>
                </div>
                <div className={classes.nameline}>
                  <p className={classes.property}>
                    {item.user.name + " " + item.user.surname}
                  </p>
                  {teamFiltered.map((item, index) => {
                    return (
                      <p key={index} className={classes.property}>
                        {item.name}
                      </p>
                    );
                  })}
                  {positionFiltered.map((item, index) => {
                    return (
                      <p key={index} className={classes.property}>
                        {item.name}
                      </p>
                    );
                  })}
                  <p className={classes.property}> {item.user.email}</p>
                  <p className={classes.property}> {item.user.phone_number}</p>
                </div>
              </div>
            </div>
            <div className={classes.secondLine}>
              <div className={classes.namelineNamefirst}>
                <p className={classes.widtName}>???????????????????????? ??????????????????:</p>
                <p className={classes.widtName}>???????????????????????? ??????????????????:</p>

                <p className={classes.widtName}>RAM:</p>
                <p className={classes.widtName}>????????????????????????????????? ????????????:</p>
              </div>
              <div className={classes.namelineNameSecond}>
                <p className={classes.property}> {item.laptop.name}</p>

                {brandFiltered.map((item, index) => {
                  return (
                    <p key={index} className={classes.property}>
                      {item.name}
                    </p>
                  );
                })}

                <p className={classes.property}> {item.laptop.ram}</p>
                <p className={classes.property}>
                  {item.laptop.hard_drive_type}
                </p>
              </div>
              <div className={classes.secondlineParentNew}>
                <div className={classes.nameline}>
                  <p className={classes.widtName}>CPU:</p>
                  <p className={classes.widtName}>CPU-??? ??????????????????:</p>

                  <p className={classes.widtName}>CPU-??? ??????????????????:</p>
                </div>
                <div className={classes.nameline}>
                  <p className={classes.property}> {item.laptop.cpu.name}</p>
                  <p className={classes.property}>{item.laptop.cpu.cores}</p>
                  <p className={classes.property}>{item.laptop.cpu.threads}</p>
                </div>
              </div>
            </div>
            <div className={classes.secondLine}>
              <div className={classes.nameline}>
                <p className={classes.widtName}>???????????????????????? ?????????????????????????????????:</p>
                <p className={classes.widtName}>???????????????????????? ????????????:</p>
              </div>
              <div className={classes.namelineNew}>
                <p className={classes.property}>
                  {item.laptop.state === "new" ? "???????????????" : "?????????????????????"}
                </p>
                <p className={classes.property}>{item.laptop.price} ???</p>
              </div>
              <div className={classes.secondlineParentNew}>
                <p className={classes.widtName}>????????????????????? ??????????????????:</p>
                <p className={classes.property}>{item.laptop.purchase_date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ListOfLeptop;
