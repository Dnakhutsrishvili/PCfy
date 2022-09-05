import "./App.css";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import StaffInfo from "./Components/Pages/StaffInfo";
import LeptopInfo from "./Components/Pages/LeptopInfo";
import { useState, useEffect } from "react";
import FinalPage from "./Components/Pages/FinalPage";
import ListOfData from "./Components/Pages/ListOfData";

import ListOfLeptop from "./Components/Pages/ListOfLeptop";

function App() {
  const [staffInfoData, setStaffInfoData] = useState([]);
  const [leptopId, setLeptopId] = useState([]);
  const getData = (data) => {
    setStaffInfoData(data);
  };
  const getId = (dataid) => {
    setLeptopId(dataid);
  };
  //responsive state
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    state: width < 800,
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage responsive={responsive} />} />
        <Route
          path="leptopinfo"
          element={
            <LeptopInfo staffInfoData={staffInfoData} responsive={responsive} />
          }
        />
        <Route
          path="staffinfo"
          element={<StaffInfo data={getData} responsive={responsive} />}
        />
        <Route
          path="finalpage"
          element={<FinalPage responsive={responsive} />}
        />
        <Route path="listofdata" element={<ListOfData data={getId} />} />
        <Route path="listofleptop" element={<ListOfLeptop id={leptopId} />} />
      </Routes>
    </>
  );
}

export default App;
