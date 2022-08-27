import "./App.css";
import LandingPage from "./Components/LandingPage";
import { Route, Routes } from "react-router-dom";
import StaffInfo from "./Components/StaffInfo";

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
