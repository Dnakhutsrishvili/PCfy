import "./App.css";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import StaffInfo from "./Components/Pages/StaffInfo";
import LeptopInfo from "./Components/Pages/LeptopInfo";
import { useState, useEffect } from "react";
import FinalPage from "./Components/Pages/FinalPage";
import ListOfData from "./Components/Pages/ListOfData";
import axios from "axios";
import ListOfLeptop from "./Components/Pages/ListOfLeptop";

function App() {
  const [staffInfoData, setStaffInfoData] = useState([]);
  const [leptopId, setLeptopId] = useState([]);
  const getData = (data) => {
    setStaffInfoData(data);
  };
  const getId = (dataa) => {
    setLeptopId(dataa);
  };
  console.log(leptopId);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="staffinfo" element={<StaffInfo data={getData} />} />
        <Route path="finalpage" element={<FinalPage />} />
        <Route path="listofdata" element={<ListOfData data={getId} />} />
        <Route path="listofleptop" element={<ListOfLeptop id={leptopId} />} />
        <Route
          path="leptopinfo"
          element={<LeptopInfo staffInfoData={staffInfoData} />}
        />
      </Routes>
    </>
  );
}

export default App;
