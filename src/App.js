import "./App.css";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import StaffInfo from "./Components/Pages/StaffInfo";
import LeptopInfo from "./Components/Pages/LeptopInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="staffinfo" element={<StaffInfo />} />
        <Route path="leptopinfo" element={<LeptopInfo />} />
      </Routes>
    </>
  );
}

export default App;
