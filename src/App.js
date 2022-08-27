import "./App.css";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import StaffInfo from "./Components/Pages/StaffInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="staffinfo" element={<StaffInfo />} />
      </Routes>
      ,
    </>
  );
}

export default App;
