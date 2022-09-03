import "./App.css";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import StaffInfo from "./Components/Pages/StaffInfo";
import LeptopInfo from "./Components/Pages/LeptopInfo";
import { useState } from "react";

function App() {
  const [staffInfoData, setStaffInfoData] = useState([]);
  const getData = (data) => {
    setStaffInfoData(data);
  };
  console.log(staffInfoData);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="staffinfo" element={<StaffInfo data={getData} />} />
        <Route
          path="leptopinfo"
          element={<LeptopInfo staffInfoData={staffInfoData} />}
        />
      </Routes>
    </>
  );
}

export default App;
